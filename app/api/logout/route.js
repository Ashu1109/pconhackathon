import { NextResponse } from "next/server";

const { connect } = require("@/app/dbconfig/dbconfig");

connect();
export async function GET() {
  try {
    const res = NextResponse.json(
      { message: "Logout Successfully", success: true },
      { status: 200 }
    );
    res.cookies.set("token", null, { expires: new Date(0) });
    return res;
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
