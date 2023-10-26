import { NextResponse } from "next/server";

const { connect } = require("@/app/dbconfig/dbconfig");

connect();
export async function GET(request) {
  try {
    const token = (await request.cookies.get("token")?.value) || null;
    return NextResponse.json({ token: token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
