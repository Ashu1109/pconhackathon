import { connect } from "@/app/dbconfig/dbconfig";
import Note from "@/app/model/Note";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const note = await Note.findOne({ _id: id });
    if (!note)
      return NextResponse.json(
        { message: "Note Note found", success: false },
        { status: 400 }
      );
    return NextResponse.json({ note });
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const note = await Note.findOneAndRemove({ _id: id });
    if (!note)
      return NextResponse.json(
        { message: "Note Note found", success: false },
        { status: 400 }
      );
    return NextResponse.json(
      { message: "Note Deleted", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
