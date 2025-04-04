import { NextResponse } from "next/server";
import connectToDB from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import jwt from "jsonwebtoken"

export async function POST(req) {
    try {
        await connectToDB(); // 🔹 Ensure DB connection before querying

        const body = await req.json();
        const { email,password } = body;

        if (!email || !password) {
            return NextResponse.json({ message: "Invalid Email or Password" }, { status: 400 });
        }

        const isUserAlreadyExist = await User.findOne({ email });
        if (!isUserAlreadyExist) {
            return NextResponse.json({ msg: "Invalid Email or User do not exist" }, { status: 400 });
        }

        const isMatched = await bcrypt.compare(password,isUserAlreadyExist.password)
        const name = isUserAlreadyExist.name;
        const token = jwt.sign({ name, email }, 'jejflekfnmlkrjgoirsjglknlgk', { expiresIn: "7d" });
        const response = NextResponse.json({ msg: "User Successfully Login" }, { status: 200 });

        response.cookies.set('token', token, { httpOnly: true, secure: true, sameSite: "strict" });

        return response;
    } catch (error) {
        console.error("❌ Signup Error:", error);
        return NextResponse.json({ msg: `Unexpected Error: ${error.message}` }, { status: 500 });
    }
}