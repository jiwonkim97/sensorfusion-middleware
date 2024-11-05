import { NextResponse } from 'next/server';
import outputData from '@/mocks/output.json';

const TIME_RANGE = 1000 * 60 * 5;
const TIME_INTERVAL = 1000 * 5;
const HZ = 30;
const DATA_COUNT = (TIME_RANGE * HZ) / TIME_INTERVAL;

let cnt = 0;
const camera1Outputs = outputData.filter((d) => d.sensor_name === 'Camera1');
const maxCnt = Math.floor(camera1Outputs.length);

export const GET = async () => {
  const endCnt = cnt + DATA_COUNT;
  if (endCnt > maxCnt) {
    cnt = 0;
  }
  const response = NextResponse.json(refreshTimestamp(camera1Outputs.slice(cnt, endCnt)));
  cnt += TIME_INTERVAL * HZ;

  return response;
};

const refreshTimestamp = (data: typeof camera1Outputs) => {
  const now = new Date();

  return [...data].map((d, idx) => ({
    ...d,
    timestamp: new Date(now.getTime() - idx * 1000 + 1000 / HZ).toISOString(),
  }));
};
