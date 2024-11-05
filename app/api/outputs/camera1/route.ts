import { NextResponse } from 'next/server';
import outputData from '@/mocks/output.json';

const TIME_RANGE = 1000 * 60 * 5;
const TIME_INTERVAL = 1000 * 1;
const DATA_COUNT = TIME_RANGE / TIME_INTERVAL;

// const cache = { camera1Cnt: 1 };

const camera1Outputs = outputData.filter((d) => d.sensor_name === 'Camera1');
const data = [...camera1Outputs, ...camera1Outputs, ...camera1Outputs, ...camera1Outputs];
// const maxCnt = Math.floor(data.length);

// export const GET = async () => {
//   console.log('cnt: ', cache.camera1Cnt, new Date());
//   const endCnt = cache.camera1Cnt + DATA_COUNT;
//   console.log('endCnt: ', endCnt);
//   if (endCnt > maxCnt) {
//     console.log('overflow!', endCnt, maxCnt);
//     cache.camera1Cnt = 0;
//   }
//   const response = NextResponse.json(refreshTimestamp(data.slice(cache.camera1Cnt, endCnt)));
//   cache.camera1Cnt = cache.camera1Cnt + 1;
//   console.log('after cnt: ', cache.camera1Cnt);

//   return response;
// };
const startTime = new Date('2024-11-05 18:00:00');

export const GET = async () => {
  const now = new Date();
  const millisec = now.getTime();
  const start = (millisec - startTime.getTime()) % DATA_COUNT;
  const end = start + DATA_COUNT;
  console.log('start: ', start, 'end: ', end, 'data length: ', data.length);

  return NextResponse.json(refreshTimestamp(data.slice(start, end)));
};
const refreshTimestamp = (data: typeof camera1Outputs) => {
  const now = new Date();

  return [...data].map((d, idx) => ({
    ...d,
    timestamp: new Date(now.getTime() - idx * 1000).toISOString(),
  }));
};
