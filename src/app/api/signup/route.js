import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectToDB from "@/lib/dbConnect"; // Import DB connection

export async function POST(req) {
    try {
        await connectToDB(); // 🔹 Ensure DB connection before querying

        const body = await req.json();
        const { email, name, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json({ message: "Invalid Fields" }, { status: 400 });
        }

        const isUserAlreadyExist = await User.findOne({ email });
        if (isUserAlreadyExist) {
            return NextResponse.json({ msg: "User Already Exists" }, { status: 400 });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, name, password: hashPassword });
        await user.save();

        const token = jwt.sign({ name, email }, 'jejflekfnmlkrjgoirsjglknlgk', { expiresIn: "7d" });
        const response = NextResponse.json({ msg: "Created User Account Successfully" }, { status: 200 });

        response.cookies.set('token', token, { httpOnly: true, secure: true, sameSite: "strict" });

        return response;
    } catch (error) {
        console.error("❌ Signup Error:", error);
        return NextResponse.json({ msg: `Unexpected Error: ${error.message}` }, { status: 500 });
    }
}
