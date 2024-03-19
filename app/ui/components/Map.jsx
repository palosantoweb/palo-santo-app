'use client'
import React, { useState, useEffect } from "react";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { Marker, Popup } from "react-leaflet";

function Map() {
   const position =[-41.1234478, -71.39186769999999]

   return (
    <MapContainer
    center={position}
    zoom={16}
    style={{ height: "400px", width: "100%" }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  </MapContainer>
   );
}

export default Map;