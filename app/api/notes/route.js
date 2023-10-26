import { connect } from "@/app/dbconfig/dbconfig";
import Note from "@/app/model/Note";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
connect();
export async function POST(request) {
  try {
    const { title, description } = await request.json();
    console.log(title, description);
    if (!title || !description)
      return NextResponse.json(
        { message: "Enter All Field", success: false },
        { status: 401 }
      );

    const token = request.cookies.get("token")?.value;
    if (!token)
      return NextResponse.json(
        { message: "Please Login", success: false },
        { status: 400 }
      );
    const user = await jwt.verify(token, process.env.TOKEN_JWT);
    const newNote = new Note({
      userId: user._id,
      title,
      description,
    });
    newNote.save();
    return NextResponse.json(
      { message: "Note Added", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token)
      return NextResponse.json(
        { message: "Please Login", success: false },
        { status: 400 }
      );
    const user = await jwt.verify(token, process.env.TOKEN_JWT);
    const allNotes = await Note.find({ userId: user._Id });
    return NextResponse.json({ allNotes });
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
