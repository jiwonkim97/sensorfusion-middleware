import { NextRequest, NextResponse } from 'next/server';
import outputData from '@/mocks/output.json';

const TIME_RANGE = 1000 * 60 * 5;
const TIME_INTERVAL = 1000 * 5;
const DATA_COUNT = TIME_RANGE / TIME_INTERVAL;

let cnt = 0;
const camera1Outputs = outputData.filter((d) => d.sensor_name === 'Camera1');
const camera2Outputs = outputData.filter((d) => d.sensor_name === 'Camera2');
const camera3Outputs = outputData.filter((d) => d.sensor_name === 'Camera3');
const camera4Outputs = outputData.filter((d) => d.sensor_name === 'Camera4');
const lidar1Outputs = outputData.filter((d) => d.sensor_name === 'LiDAR1');
const maxCnt = Math.floor(
  Math.min(
    camera1Outputs.length,
    camera2Outputs.length,
    camera3Outputs.length,
    camera4Outputs.length,
    lidar1Outputs.length
  )
);

export const GET = async (request: NextRequest, { params }: { params: Promise<{ sensor_name: string }> }) => {
  const endCnt = cnt + DATA_COUNT;
  if (endCnt > maxCnt) {
    cnt = 0;
  }
  const response = getSensorData((await params).sensor_name, cnt, endCnt);
  cnt += 1;

  return response;
};

const getSensorData = (sensor_name: string, start: number, end: number) => {
  switch (sensor_name) {
    case 'Camera1':
      return NextResponse.json(refreshTimestamp(camera1Outputs.slice(start, end)));
    case 'Camera2':
      return NextResponse.json(refreshTimestamp(camera2Outputs.slice(start, end)));
    case 'Camera3':
      return NextResponse.json(refreshTimestamp(camera3Outputs.slice(start, end)));
    case 'Camera4':
      return NextResponse.json(refreshTimestamp(camera4Outputs.slice(start, end)));
    case 'LiDAR1':
      return NextResponse.json(refreshTimestamp(lidar1Outputs.slice(start, end)));
  }
};

const refreshTimestamp = (data: typeof camera1Outputs) => {
  const now = new Date();

  return [...data].map((d, idx) => ({
    ...d,
    timestamp: new Date(now.getTime() - (data.length - idx) * 1000).toISOString(),
  }));
};
