import User from "@/app/model/User";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { connect } from "@/app/dbconfig/dbconfig";
connect();
export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password)
      return NextResponse.json(
        { message: "Enter All Field", success: false },
        { status: 401 }
      );
    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return NextResponse.json(
        { message: "User Not Found", success: false },
        { status: 401 }
      );
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invaild Input", success: false },
        { status: 401 }
      );
    }
    const tokenContent = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    console.log(tokenContent);
    const token = jwt.sign(tokenContent, process.env.TOKEN_JWT, {
      expiresIn: "10d",
    });
    const res = NextResponse.json(
      { message: "Login Successfully", success: true },
      { status: 200 }
    );
    res.cookies.set("token", token, { httpOnly: true });
    return res;
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
