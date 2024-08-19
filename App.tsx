/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import WeatherApi from './app/http/WeatherApi.ts';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const lat = 54.3667617;
  const lng = 18.6999335;

  useEffect(() => {
    WeatherApi.findCitiesWeatherInRadiusByLatLng(lat, lng, 15, 100)
        .then(arg => console.log('here I am', arg));
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
