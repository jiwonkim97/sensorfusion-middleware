import { NextResponse } from 'next/server';
import outputData from '@/mocks/output.json';

const TIME_RANGE = 1000 * 60 * 5;
const TIME_INTERVAL = 1000 * 1;
const DATA_COUNT = TIME_RANGE / TIME_INTERVAL;

// const cache = { camera1Cnt: 1 };

const camera1Outputs = outputData.filter((d) => d.sensor_name === 'Camera1');
const camera2Outputs = outputData.filter((d) => d.sensor_name === 'Camera2');
const camera3Outputs = outputData.filter((d) => d.sensor_name === 'Camera3');
const camera4Outputs = outputData.filter((d) => d.sensor_name === 'Camera4');
const lidar1Outputs = outputData.filter((d) => d.sensor_name === 'LiDAR1');
// const maxCnt = Math.floor(
//   Math.min(
//     camera1Outputs.length,
//     camera2Outputs.length,
//     camera3Outputs.length,
//     camera4Outputs.length,
//     lidar1Outputs.length
//   )
// );

const startTime = new Date('2024-11-04 18:00:00');

export const GET = async () => {
  const now = new Date();
  const start = Math.floor((now.getTime() - startTime.getTime()) / 5000) % DATA_COUNT;
  const end = start + DATA_COUNT;

  return NextResponse.json([
    ...refreshTimestamp(camera1Outputs.slice(start, end)),
    ...refreshTimestamp(camera2Outputs.slice(start, end)),
    ...refreshTimestamp(camera3Outputs.slice(start, end)),
    ...refreshTimestamp(camera4Outputs.slice(start, end)),
    ...refreshTimestamp(lidar1Outputs.slice(start, end)),
  ]);
};

const refreshTimestamp = (data: typeof camera1Outputs) => {
  const now = new Date();

  return [...data].map((d, idx) => ({
    ...d,
    timestamp: new Date(now.getTime() - (data.length - idx) * 1000).toISOString(),
  }));
};
