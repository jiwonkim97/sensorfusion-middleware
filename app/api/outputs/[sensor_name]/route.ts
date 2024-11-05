import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest, { params }: { params: { sensor_name: string; } }) => {
  return NextResponse.json({result: 'success'})
}