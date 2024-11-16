import { MAPBOX_API_KEY } from 'react-native-dotenv';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken(MAPBOX_API_KEY);
