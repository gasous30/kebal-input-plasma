import React, { useMemo, useState, useRef } from "react";

import "./MapPlasma.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const center = {
  lat: -6.206533280566068,
  lng: 106.84633862550298,
};

const DraggableMarker = ({ position, setPosition }) => {
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  return (
    <Marker
      draggable
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span>Pindahkan Titik sesuai dengan lokasi Anda</span>
      </Popup>
    </Marker>
  );
};
const MapPlasma = (props) => {
  const [position, setPosition] = useState(center);
  props.func(position);
  return (
    <div>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker position={position} setPosition={setPosition} />
      </MapContainer>
      <p>
        {position.lat}, {position.lng}
      </p>
    </div>
  );
};

export default MapPlasma;
