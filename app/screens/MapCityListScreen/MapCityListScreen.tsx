import React from 'react';
import { View } from 'react-native';
import { MapView } from '@rnmapbox/maps';

export function MapCityListScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{
          flex: 1
        }}
      />
    </View>
  );
}
