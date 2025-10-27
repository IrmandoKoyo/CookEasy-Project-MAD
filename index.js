/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SplashScreen from './src/pages/SplashScreen';
import Login from './src/pages/Login';


AppRegistry.registerComponent(appName, () => SplashScreen);
