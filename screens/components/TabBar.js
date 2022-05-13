import React, {useState, useEffect} from 'react'
import { View, LogBox, Text, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import * as firebase  from 'firebase'

const TabBar = () => {
  const navigation = useNavigation();

  const user = firebase.default.auth().currentUser;

  const [userName, setUsername] = useState();

  const toProfile = () =>{
    navigation.navigate('Profile')
  }
  const toPrivacyPolicy = () =>{
    navigation.navigate('PrivacyPolicy')
  }

  const signOut = () =>{
    firebase.default
      .auth()
      .signOut()
      .then(function(){
        navigation.navigate('Login');
        console.log("Signed Out")
      }).catch(function(err){
        alert(err);
        console.log(err);
      })
  }

  useEffect(() => {
    LogBox.ignoreAllLogs();
    // console.log(user.displayName)
    // setUsername(user.displayName);
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor='#F2651C'
        networkActivityIndicatorVisible={true}
        animated={true}
      />

      <View style={styles.userNameContainer}>
        <Text style={styles.userNameText}>
          {userName}
        </Text>
      </View>
      <ScrollView>
        <TouchableOpacity
          style={styles.fieldContainer}
          onPress={toProfile}  
        >
          <FontAwesome
            style={styles.profileIcon}
            name='user-circle-o'
            size={30}
            color='#FFFFFF'
          />
          <Text style={styles.text}>
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fieldContainer}
          onPress={()=>navigation.navigate('Cart')}
        >
          <FontAwesome
            style={styles.profileIcon}
            name='shopping-cart'
            size={30}
            color='#FFFFFF'
          />
          <Text style={styles.text}>
            Orders
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fieldContainer}
          onPress={toPrivacyPolicy}  
        >
          <FontAwesome
            style={styles.profileIcon}
            name='wpforms'
            size={30}
            color='#FFFFFF'
          />
          <Text style={styles.text}>
            Privacy Policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fieldContainer}>
          <FontAwesome
            style={styles.profileIcon}
            name='shield'
            size={30}
            color='#FFFFFF'
          />
          <Text style={styles.text}>
            Security
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fieldContainer}
          onPress={signOut}
        >
          <FontAwesome
            style={styles.profileIcon}
            name='sign-out'
            size={30}
            color='#FFFFFF'
          />
          <Text style={styles.text}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F2651C',
    paddingVertical:106.5
  },
  userNameContainer:{
    alignItems:'center'
  },
  userNameText:{
    color:'#FFFFFF',
    fontSize:20,
    fontWeight:'bold'
  },
  fieldContainer:{
    marginHorizontal:15,
    borderBottomWidth:2,
    borderBottomColor:'#ffa275',
    flexDirection:'row'
  },
  profileIcon:{
    marginVertical:20,
  },
  text:{
    color:'#FFFFFF',
    marginHorizontal:10,
    marginVertical:20,
  }
})