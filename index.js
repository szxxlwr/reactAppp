/**
 * @format
 */

import {AppRegistry} from 'react-native';
// 没有这一行开发环境没有问题，但是在生产环境上可能会闪退
import 'react-native-gesture-handler';
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
