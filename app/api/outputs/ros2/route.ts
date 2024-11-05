import { NextResponse } from 'next/server';
import outputData from '@/mocks/output.json';

let cnt = 0;

const makeSmall = (value: string) => {
  return (Number(value) * (Math.random() * 0.15 + 13)).toString();
};

const camera1Data = outputData
  .filter((d) => d.sensor_name === 'Camera1')
  .map((d) => ({
    ...d,
    hz: makeSmall(d.hz),
    bandwidth: makeSmall(d.bandwidth),
  }));
const camera2Data = outputData
  .filter((d) => d.sensor_name === 'Camera2')
  .map((d) => ({
    ...d,
    hz: makeSmall(d.hz),
    bandwidth: makeSmall(d.bandwidth),
  }));
const camera3Data = outputData
  .filter((d) => d.sensor_name === 'Camera3')
  .map((d) => ({
    ...d,
    hz: makeSmall(d.hz),
    bandwidth: makeSmall(d.bandwidth),
  }));
const camera4Data = outputData
  .filter((d) => d.sensor_name === 'Camera4')
  .map((d) => ({
    ...d,
    hz: makeSmall(d.hz),
    bandwidth: makeSmall(d.bandwidth),
  }));
const lidar1Data = outputData
  .filter((d) => d.sensor_name === 'LiDAR1')
  .map((d) => ({
    ...d,
    hz: makeSmall(d.hz),
    bandwidth: makeSmall(d.bandwidth),
  }));

const maxCnt = Math.floor(
  Math.min(camera1Data.length, camera2Data.length, camera3Data.length, camera4Data.length, lidar1Data.length)
);

export const GET = () => {
  const response = NextResponse.json([
    camera1Data[cnt],
    camera2Data[cnt],
    camera3Data[cnt],
    camera4Data[cnt],
    lidar1Data[cnt],
  ]);
  cnt += 1;
  cnt %= maxCnt;

  return response;
};
