// GoogleMapComponent.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 23.1638, // Latitude for Bargi Hills, Jabalpur
  lng: 79.9554  // Longitude for Bargi Hills, Jabalpur
};

const position = {
  lat: 23.1638,
  lng: 79.9554
};

const GoogleMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
