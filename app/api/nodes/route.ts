import { NextResponse } from "next/server"

export const GET = () => {
  return NextResponse.json({"nodes": [
    {
      "id": "CAMERA1",
      "title": "Camera 1",
      "subtitle": "Front View",
      "mainstat": "Active",
      "icon": "camera",
      "nodeRadius": 50
    },
    {
      "id": "CAMERA2",
      "title": "Camera 2",
      "subtitle": "Rear View",
      "mainstat": "Active",
      "icon": "camera",
      "nodeRadius": 50
    },
    {
      "id": "CAMERA3",
      "title": "Camera 3",
      "subtitle": "Left Side",
      "mainstat": "Inactive",
      "icon": "camera-off",
      "nodeRadius": 50,
      "color": "#FF5733"
    },
    {
      "id": "CAMERA4",
      "title": "Camera 4",
      "subtitle": "Right Side",
      "mainstat": "Active",
      "icon": "camera",
      "nodeRadius": 50
    },
    {
      "id": "LIDAR1",
      "title": "LIDAR 1",
      "subtitle": "360° Scanner",
      "mainstat": 250,
      "unit": "Hz",
      "icon": "lidar",
      "nodeRadius": 60,
      "highlighted": true
    },
    {
      "id": "PERCEPTION",
      "title": "Perception Module",
      "subtitle": "AI Processing",
      "mainstat": "Running",
      "secondarystat": "99% Accuracy",
      "icon": "ai",
      "nodeRadius": 70
    }
  ]})
}

// {
//   "nodes": [
//     {
//       "id": "CAMERA1",
//       "title": "Camera 1",
//       "subtitle": "Front View",
//       "mainstat": "Active",
//       "icon": "camera",
//       "nodeRadius": 50
//     },
//     {
//       "id": "CAMERA2",
//       "title": "Camera 2",
//       "subtitle": "Rear View",
//       "mainstat": "Active",
//       "icon": "camera",
//       "nodeRadius": 50
//     },
//     {
//       "id": "CAMERA3",
//       "title": "Camera 3",
//       "subtitle": "Left Side",
//       "mainstat": "Inactive",
//       "icon": "camera-off",
//       "nodeRadius": 50,
//       "color": "#FF5733"
//     },
//     {
//       "id": "CAMERA4",
//       "title": "Camera 4",
//       "subtitle": "Right Side",
//       "mainstat": "Active",
//       "icon": "camera",
//       "nodeRadius": 50
//     },
//     {
//       "id": "LIDAR1",
//       "title": "LIDAR 1",
//       "subtitle": "360° Scanner",
//       "mainstat": 250,
//       "unit": "Hz",
//       "icon": "lidar",
//       "nodeRadius": 60,
//       "highlighted": true
//     },
//     {
//       "id": "PERCEPTION",
//       "title": "Perception Module",
//       "subtitle": "AI Processing",
//       "mainstat": "Running",
//       "secondarystat": "99% Accuracy",
//       "icon": "ai",
//       "nodeRadius": 70
//     }
//   ],
//   "edges": [
//     {
//       "id": "edge1",
//       "source": "CAMERA1",
//       "target": "PERCEPTION",
//       "mainstat": "High Bandwidth",
//       "thickness": 2,
//       "color": "#00FF00",
//       "strokeDasharray": "5,5"
//     },
//     {
//       "id": "edge2",
//       "source": "CAMERA2",
//       "target": "PERCEPTION",
//       "mainstat": "High Bandwidth",
//       "thickness": 2,
//       "color": "#00FF00"
//     },
//     {
//       "id": "edge3",
//       "source": "CAMERA3",
//       "target": "PERCEPTION",
//       "mainstat": "Low Bandwidth",
//       "thickness": 1,
//       "color": "#FFA500",
//       "highlighted": true
//     },
//     {
//       "id": "edge4",
//       "source": "CAMERA4",
//       "target": "PERCEPTION",
//       "mainstat": "High Bandwidth",
//       "thickness": 2,
//       "color": "#00FF00"
//     },
//     {
//       "id": "edge5",
//       "source": "LIDAR1",
//       "target": "PERCEPTION",
//       "mainstat": "Data Stream",
//       "thickness": 3,
//       "color": "#0000FF"
//     }
//   ]
// }