import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  LogBox,
} from 'react-native';
import Splash from './screens/Splash.js';
import GetStarted from './screens/GetStarted.js';
import Login from './screens/Login.js';
import SignUp from './screens/SignUp.js';
import Main from './screens/Main.js';
import MenuScreen from './screens/MenuScreen';
import Cart from './screens/Cart.js';
import Location from './screens/Location';
import LocationInfo from './screens/LocationInfo';
import PickupOptions from './screens/PickupOptions.js';
import SearchField from './screens/components/SearchField.js'
import SearchFieldReal from './screens/components/SearchFieldReal.js';
import TabBar from './screens/components/TabBar.js';
import Profile from './screens/Profile.js';
import PrivacyPolicy from './screens/PrivacyPolicy.js';

// import Test from './screens/Test.js';

//IMPORTING MENUS FROM MENU FOLDER
import Breakfasts from './screens/components/menus/Breakfasts';
import Drinks from './screens/components/menus/Drinks';
import Deserts from './screens/components/menus/Deserts';
import HotMeals from './screens/components/menus/HotMeals';
import Salads from './screens/components/menus/Salads';
import Sandwiches from './screens/components/menus/Sandwiches';
import SignaturePizzas from './screens/components/menus/SignaturePizzas';
import SpecialityBurgers from './screens/components/menus/SpecialityBurgers';
import AllMenus from './screens/components/menus/AllMenus.js';

//INSTALLED LIBRARIES:
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
//REMINDER: USE "import { Asset, Constants, FileSystem, Permissions } from 'react-native-unimodules';" TO IMPORT CERTAIN MODULES


import * as firebase from 'firebase';
//FIREBASE CONFIGURATION
var firebaseConfig = {
  apiKey: "AIzaSyDGPRxZAid1crhkZW0yp6T3t8RStFSc_wE",
  authDomain: "kerzner-uj-82346.firebaseapp.com",
  databaseURL: "https://kerzner-uj-82346-default-rtdb.firebaseio.com",
  projectId: "kerzner-uj-82346",
  storageBucket: "kerzner-uj-82346.appspot.com",
  messagingSenderId: "33228726875",
  appId: "1:33228726875:web:d7d81f3b75f7c28416557e",
  measurementId: "G-C17FJMG9KT"
};


// INITIALIZE FIREBASE:
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
}else {
  firebase.app(); // if already initialized, use that one
}



const Stack = createStackNavigator();
function App(){

  const [status, setStatus] = useState('');

  // const appState = () =>{
  //   if(status == 'false'){
  //     return(
  //       <NavigationContainer style={styles.container}>
  //       <Stack.Navigator initialRouteName = 'GetStarted'>
  //         <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
  //         <Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown:false}}/>
  //         <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
  //         <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
  //         <Stack.Screen name='SearchField' component={SearchField} options={{headerShown:false}}/>
  //         <Stack.Screen name='SearchFieldReal' component={SearchFieldReal} options={{headerShown:false}}/>
  //         <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
  //         <Stack.Screen name='MenuScreen' component={MenuScreen} options={{headerShown:false}}/>
  //         <Stack.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
  //         <Stack.Screen name='Location' component={Location} options={{headerShown:false}}/>
  //         <Stack.Screen name='PickupOptions' component={PickupOptions} options={{headerShown:false}}/>

  //         <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>

  //         <Stack.Screen name='TabBar' component={TabBar} options={{headerShown:false}}/>

          
  //         {/* MAIN SCREEN STACK */}
  //         {/* MENUS STACK */}
  //         <Stack.Screen name='Deserts' component={Deserts} options={{headerShown:false}}/>
  //         <Stack.Screen name='Drinks' component={Drinks} options={{headerShown:false}}/>
  //         <Stack.Screen name='Breakfasts' component={Breakfasts} options={{headerShown:false}}/>
  //         <Stack.Screen name='HotMeals' component={HotMeals} options={{headerShown:false}}/>
  //         <Stack.Screen name='Salads' component={Salads} options={{headerShown:false}}/>
  //         <Stack.Screen name='Sandwiches' component={Sandwiches} options={{headerShown:false}}/>
  //         <Stack.Screen name='SignaturePizzas' component={SignaturePizzas} options={{headerShown:false}}/>
  //         <Stack.Screen name='SpecialityBurgers' component={SpecialityBurgers} options={{headerShown:false}}/>
  //         <Stack.Screen name='AllMenus' component={AllMenus} options={{headerShown:false}}/>
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //     )
  //   }
  //   if(status == 'true'){
  //     return(
  //       <NavigationContainer style={styles.container}>
  //       <Stack.Navigator initialRouteName = 'Login'>
  //         <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
  //         <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
  //         <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
  //         <Stack.Screen name='SearchField' component={SearchField} options={{headerShown:false}}/>
  //         <Stack.Screen name='SearchFieldReal' component={SearchFieldReal} options={{headerShown:false}}/>
  //         <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
  //         <Stack.Screen name='MenuScreen' component={MenuScreen} options={{headerShown:false}}/>
  //         <Stack.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
  //         <Stack.Screen name='Location' component={Location} options={{headerShown:false}}/>
  //         <Stack.Screen name='PickupOptions' component={PickupOptions} options={{headerShown:false}}/>

  //         <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>

  //         <Stack.Screen name='TabBar' component={TabBar} options={{headerShown:false}}/>

          
  //         {/* MAIN SCREEN STACK */}
  //         {/* MENUS STACK */}
  //         <Stack.Screen name='Deserts' component={Deserts} options={{headerShown:false}}/>
  //         <Stack.Screen name='Drinks' component={Drinks} options={{headerShown:false}}/>
  //         <Stack.Screen name='Breakfasts' component={Breakfasts} options={{headerShown:false}}/>
  //         <Stack.Screen name='HotMeals' component={HotMeals} options={{headerShown:false}}/>
  //         <Stack.Screen name='Salads' component={Salads} options={{headerShown:false}}/>
  //         <Stack.Screen name='Sandwiches' component={Sandwiches} options={{headerShown:false}}/>
  //         <Stack.Screen name='SignaturePizzas' component={SignaturePizzas} options={{headerShown:false}}/>
  //         <Stack.Screen name='SpecialityBurgers' component={SpecialityBurgers} options={{headerShown:false}}/>
  //         <Stack.Screen name='AllMenus' component={AllMenus} options={{headerShown:false}}/>
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //     )
  //   }
  // };

  useEffect(() => {
    LogBox.ignoreAllLogs();
    async()=>{
      let fetchStatus = await AsyncStorage.getItem('launchStatus');
      let stringStatus = JSON.stringify(fetchStatus);
      setStatus(stringStatus);
    }
  }, []);
  
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor='transparent'
        networkActivityIndicatorVisible={true}
        animated={true}
      />
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName = 'GetStarted'>
          <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
          <Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown:false}}/>
          <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
          <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='SearchField' component={SearchField} options={{headerShown:false}}/>
          <Stack.Screen name='SearchFieldReal' component={SearchFieldReal} options={{headerShown:false}}/>
          <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
          <Stack.Screen name='MenuScreen' component={MenuScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
          <Stack.Screen name='Location' component={Location} options={{headerShown:false}}/>
          <Stack.Screen name='LocationInfo' component={LocationInfo} options={{headerShown:false}}/>
          <Stack.Screen name='PickupOptions' component={PickupOptions} options={{headerShown:false}}/>

          {/* <Stack.Screen name='Test' component={Test} options={{headerShown:false}}/> */}

          <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
          <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{headerShown:false}}/>

          <Stack.Screen name='TabBar' component={TabBar} options={{headerShown:false}}/>

          
          {/* MAIN SCREEN STACK */}
          {/* MENUS STACK */}
          <Stack.Screen name='Deserts' component={Deserts} options={{headerShown:false}}/>
          <Stack.Screen name='Drinks' component={Drinks} options={{headerShown:false}}/>
          <Stack.Screen name='Breakfasts' component={Breakfasts} options={{headerShown:false}}/>
          <Stack.Screen name='HotMeals' component={HotMeals} options={{headerShown:false}}/>
          <Stack.Screen name='Salads' component={Salads} options={{headerShown:false}}/>
          <Stack.Screen name='Sandwiches' component={Sandwiches} options={{headerShown:false}}/>
          <Stack.Screen name='SignaturePizzas' component={SignaturePizzas} options={{headerShown:false}}/>
          <Stack.Screen name='SpecialityBurgers' component={SpecialityBurgers} options={{headerShown:false}}/>
          <Stack.Screen name='AllMenus' component={AllMenus} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container:{
    // EMPTY
  }
})
