import { NextResponse } from "next/server"
import edgeData from '@/mocks/edge.json'

let cnt = 0;
const edge1Data = edgeData.filter(d => d.id === 'edge1')
const edge2Data = edgeData.filter(d => d.id === 'edge2')
const edge3Data = edgeData.filter(d => d.id === 'edge3')
const edge4Data = edgeData.filter(d => d.id === 'edge4')
const edge5Data = edgeData.filter(d => d.id === 'edge5')

export const GET = () => {
  const maxCnt = Math.floor(Math.min(edge1Data.length / 10, edge2Data.length / 10, edge3Data.length / 10, edge4Data.length / 10, edge5Data.length / 10))

  const response = NextResponse.json([edge1Data[cnt], edge2Data[cnt], edge3Data[cnt], edge4Data[cnt], edge5Data[cnt]])

  cnt += 10
  cnt %= maxCnt

  return response
}
