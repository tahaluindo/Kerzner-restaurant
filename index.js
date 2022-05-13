/**
 * @format
 */

// import {AppRegistry} from 'react-native';
import App from './App';
import { registerRootComponent } from 'expo';//added
import {name as appName} from './app.json';

registerRootComponent(App);//added
// AppRegistry.registerComponent(appName, () => App);  //uncomment if it doesnt launch
