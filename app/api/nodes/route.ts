import { NextResponse } from "next/server"
// import nodeData from '@/mocks/node.json'

export const GET = () => {
  return NextResponse.json([{
    "id": "6abd85d6593e627a23a9b30077c16736",
    "title": "Camera3",
    "subtitle": "2024-11-05T02:47:05.342765755Z",
    "mainstat": "Active",
    "icon": "camera",
    "node_radius": 30,
    "highlighted": false,
    "color": "#00FF00"
  },{
    "id": "bd0de19e97c328fd0e642f7b2c0be66d",
    "title": "Camera1",
    "subtitle": "2024-11-05T02:47:06.316169023Z",
    "mainstat": "Active",
    "icon": "camera",
    "node_radius": 30,
    "highlighted": false,
    "color": "#00FF00"
  },{
    "id": "7889169f152a293fed5091de53b21fb4",
    "title": "LiDAR1",
    "subtitle": "2024-11-05T02:47:07.906869389Z",
    "mainstat": "Active",
    "icon": "signal",
    "node_radius": 30,
    "highlighted": false,
    "color": "#00FF00"
  },{
    "id": "cca36a8a1f8093f0ae170ff282f57cd2",
    "title": "Camera2",
    "subtitle": "2024-11-05T02:47:04.373517103Z",
    "mainstat": "Active",
    "icon": "camera",
    "node_radius": 30,
    "highlighted": false,
    "color": "#00FF00"
  },{
    "id": "dbc8e202b1f87b3640088263690eeea2",
    "title": "Perception1",
    "subtitle": "2024-11-05T02:47:04.070993505Z",
    "mainstat": "Active",
    "icon": "ai",
    "node_radius": 60,
    "highlighted": true,
    "color": "#00FF00"
  },{
    "id": "12c802882c515d5321806dfd6792ecad",
    "title": "Camera4",
    "subtitle": "2024-11-05T02:47:07.297461271Z",
    "mainstat": "Active",
    "icon": "camera",
    "node_radius": 30,
    "highlighted": false,
    "color": "#00FF00"
  }])
}
