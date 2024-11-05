import {  NextResponse } from "next/server";

// export const GET = (request: NextRequest, { params }: { params: { sensor_name: string; } }) => {
  export const GET = () => {
  return NextResponse.json({result: 'success'})
}