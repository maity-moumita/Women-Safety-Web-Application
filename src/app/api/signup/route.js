import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import connectToDB from "@/lib/dbConnect";

export async function POST(req) {
  try {
    await connectToDB();

    const body = await req.json();
    const { email, name, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Invalid Fields" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User Already Exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      name,
      password: hashedPassword,
    });

    await user.save();

    // No JWT or cookie setting here (NextAuth handles auth)
    return NextResponse.json(
      {
        message: "User registered successfully",
        user: { id: user._id, name: user.name, email: user.email },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Register Error:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
