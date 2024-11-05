import { NextResponse } from "next/server"
import outputData from '@/mocks/output.json'

export const GET = () => {
  return NextResponse.json(outputData)
}
