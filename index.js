/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { SimpleXMLDebugger } from './app/utils/SimpleXMLDebugger.ts';

import App from './App.tsx';
import { name as appName } from './app.json';

if (__DEV__) {
    global.XMLHttpRequest = SimpleXMLDebugger;
}

AppRegistry.registerComponent(appName, () => App);
