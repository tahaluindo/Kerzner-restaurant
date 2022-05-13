import React, {useEffect} from 'react'
import { View, Text, StyleSheet, BackHandler, TouchableOpacity, LogBox } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {NavigationApps,actions,googleMapsTravelModes} from "react-native-navigation-apps"

const PickupOption = () => {
    const navigation = useNavigation();

    const toMenu = () =>{
        navigation.navigate('Main')
    }

    useEffect(() => {
        LogBox.ignoreAllLogs();
    })
    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>
                <Text style={styles.headText}>
                    Navigation Options
                </Text>
            </View>
            <View style={styles.iconsContainer}>
                <NavigationApps
                    iconSize={100}
                    row
                    address='Kerzner Building'
                    lat='-26.18921'
                    long='28.01675'
                    waze={{
                        address:'Kerzner Building',
                        lat:'-26.18921',
                        long:'28.01675',
                        action:actions.navigateByAddress
                    }}
                    googleMaps={{
                        address:'Kerzner Building',
                        lat:'-26.18921',
                        long:'28.01675',
                        action: actions.navigateByLatAndLon,
                        travelMode:googleMapsTravelModes.driving
                    }}
                    maps={{
                        address:'Kerzner Building',
                        long:'-26.18921',
                        lat:'28.01675',
                        action: actions.navigateByLatAndLon,
                    }}
                />
            </View>
            <View style={styles.cancelContainer}>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={toMenu}
                >
                    <Text style={styles.cancelText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PickupOption

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
    },
    headContainer:{
        marginVertical:10,
        borderBottomColor:'#F2651C',
        borderBottomWidth:30,
        borderBottomRightRadius:20,
        borderBottomStartRadius:20,
        borderTopWidth:30,
        borderTopColor:'#F2651C',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    headText:{
        fontSize:50,
        fontWeight:'bold',
        marginBottom:20
    },
    cancelContainer:{
        marginTop:190,
        alignItems:'center'
    },
    cancelButton:{
        backgroundColor:'#F2651C',
        width:320,
        alignItems:'center',
        borderRadius:20
    },
    cancelText:{
        color:'#FFFFFF',
        fontSize:20,
        fontWeight:'bold',
        marginVertical:10,
    }
})
