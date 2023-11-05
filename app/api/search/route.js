import { connect } from "@/app/dbconfig/dbconfig";
import Note from "@/app/model/Note";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
connect();
export async function GET(request) {
  try {
    const search = request.nextUrl.searchParams.get("search");
    const token = request.cookies.get("token")?.value;
    if (!token)
      return NextResponse.json(
        { message: "Please Login", success: false },
        { status: 400 }
      );
    const user = await jwt.verify(token, process.env.TOKEN_JWT);
    if (!search) {
      const allNotes = await Note.find({ userId: user.id });
      return NextResponse.json({ data: allNotes });
    }
    const data = await Note.find({
      userId: user.id,
      title: {
        $regex: search,
        $options: "i",
      },
    });
    return NextResponse.json({ search, data });
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
