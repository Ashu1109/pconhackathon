import { connect } from "@/app/dbconfig/dbconfig";
import User from "@/app/model/User";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();
export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    if (!name || !email || !password)
      return NextResponse.json(
        { message: "Enter All Field", success: false },
        { status: 401 }
      );

    const user = await User.findOne({ email });
    if (user)
      return NextResponse.json(
        { message: "User Already Exist", success: false },
        { status: 400 }
      );
    const hashedPassword = await bcryptjs.hash(password, 12);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    const tokenContent = {
      name,
      email,
    };
    const token = jwt.sign(tokenContent, process.env.TOKEN_JWT, {
      expiresIn: "1d",
    });
    const res = NextResponse.json(
      { message: "SignUp Successfully", success: true },
      { status: 200 }
    );
    res.cookies.set("token", token, { httpOnly: true });
    return res;
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
