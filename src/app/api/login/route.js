import { NextResponse } from "next/server";
import connectToDB from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectToDB();

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Invalid Email or Password" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User does not exist" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Return user object with necessary fields for NextAuth
    return NextResponse.json({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    }, { status: 200 });

  } catch (error) {
    console.error("❌ Login Error:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
