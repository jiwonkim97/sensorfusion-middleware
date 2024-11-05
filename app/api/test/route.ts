import { NextResponse } from "next/server";

let i = 0;
export const GET = () => {
  return NextResponse.json({result: i++})
}