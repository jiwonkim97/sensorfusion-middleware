import { NextRequest, NextResponse } from 'next/server';
import outputData from '@/mocks/output.json';

const TIME_RANGE = 60 * 5;

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

export const GET = (request: NextRequest, { params }: { params: { sensor_name: string } }) => {
  const endCnt = cnt + TIME_RANGE;
  if (endCnt > maxCnt) {
    cnt = 0;
  }
  const response = getSensorData(params.sensor_name, cnt, cnt + TIME_RANGE);
  cnt = endCnt;

  return response;
};

const getSensorData = (sensor_name: string, start: number, end: number) => {
  switch (sensor_name) {
    case 'Camera1':
      return NextResponse.json(camera1Outputs.slice(start, end));
    case 'Camera2':
      return NextResponse.json(camera2Outputs.slice(start, end));
    case 'Camera3':
      return NextResponse.json(camera3Outputs.slice(start, end));
    case 'Camera4':
      return NextResponse.json(camera4Outputs.slice(start, end));
    case 'LiDAR1':
      return NextResponse.json(lidar1Outputs.slice(start, end));
  }
};
