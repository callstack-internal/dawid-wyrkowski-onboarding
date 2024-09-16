/**
 * @format
 */

import { SimpleXMLDebugger } from './app/utils/SimpleXMLDebugger';

if (__DEV__) {
    global.XMLHttpRequest = SimpleXMLDebugger;
}

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
