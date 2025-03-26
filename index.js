/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import excercise2 from './excercise2';
import Exercise3 from './Exercise3'; // Perbaikan import
import Flexbox from './Flexbox';
import Exercise4 from './Exercise4';
import RestAPI from './RestAPI';
import Exercise7 from './Exercise7';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Exercise7); // Perbaikan syntax
