import { NextResponse } from 'next/server';
import outputData from '@/mocks/output.json';

const TIME_RANGE = 1000 * 60 * 5;
const TIME_INTERVAL = 1000 * 1;
const DATA_COUNT = TIME_RANGE / TIME_INTERVAL;

let cnt = 0;
const camera1Outputs = outputData.filter((d) => d.sensor_name === 'Camera1');
const data = [...camera1Outputs, ...camera1Outputs, ...camera1Outputs, ...camera1Outputs];
const maxCnt = Math.floor(data.length);

export const GET = async () => {
  console.log('cnt: ', cnt, new Date());
  const endCnt = cnt + DATA_COUNT;
  console.log('endCnt: ', endCnt);
  if (endCnt > maxCnt) {
    console.log('overflow!', endCnt, maxCnt);
    cnt = 0;
  }
  const response = NextResponse.json(refreshTimestamp(data.slice(cnt, endCnt)));
  cnt += 1;
  console.log('after cnt: ', cnt);

  return response;
};

const refreshTimestamp = (data: typeof camera1Outputs) => {
  const now = new Date();

  return [...data].map((d, idx) => ({
    ...d,
    timestamp: new Date(now.getTime() - idx * 1000).toISOString(),
  }));
};
