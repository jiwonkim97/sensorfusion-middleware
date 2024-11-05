import { NextResponse } from "next/server"
import edgeData from '@/mocks/edge.json'

export const GET = () => {
  return NextResponse.json(edgeData)
}
