import { getCenter } from 'geolib';

import { latLngTupleToObject } from '@utils/latLngTupleToObject.ts';

// [LNG, LAT]
export const FallbackBounds: {
  ne: [number, number];
  sw: [number, number];
} = {
  ne: [14.156001300148233, 53.96161914863009],
  sw: [22.892223645326283, 49.05142736914263]
};

const centerOfBounds = getCenter([
  latLngTupleToObject(FallbackBounds.ne),
  latLngTupleToObject(FallbackBounds.sw)
]);

export const FallbackLatLng = {
  lng: 0,
  lat: 0
};

if (centerOfBounds) {
  FallbackLatLng.lng = centerOfBounds.longitude;
  FallbackLatLng.lat = centerOfBounds.latitude;
}
