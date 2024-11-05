import { NextResponse } from "next/server"
import nodeData from '@/mocks/node.json'

export const GET = () => {
  return NextResponse.json(nodeData)
}
