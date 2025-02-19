import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  const { destination } = route.params;

  // Dummy coordinates for the destination
  const destinationCoordinates = {
    latitude: 37.78825,
    longitude: -122.4324
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }}>
        <Marker
          coordinate={destinationCoordinates}
          title={destination}
          description="Your Destination"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;