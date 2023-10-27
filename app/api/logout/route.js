import { NextResponse } from "next/server";

const { connect } = require("@/app/dbconfig/dbconfig");

connect();
export async function GET() {
  try {
        const response = NextResponse.json({
          message: "Logout successfully",
          success: true,
        });
        response.cookies.set("token", "", {
          expires: new Date(0),
        });
        return response;
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
