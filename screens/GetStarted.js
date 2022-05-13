import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { TouchableOpacity, Text, View, Dimensions, Button, StatusBar, ScrollView, Image, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { width, height } = Dimensions.get('window');
let imageHeight = height - 80;

const GetStarted = () => {

    const navigation = useNavigation();

    const [hasLaunched, setHasLaunched] = useState('false');

    const setLaunchState = async() =>{
        setHasLaunched('true');
        AsyncStorage.setItem('launchStatus', hasLaunched);
    }

    useEffect(() =>{
        const numOfBackground = 3;
        let scrollValue = 0, scrolled = 0;
        setInterval(function(){
            scrolled++;
            if(scrolled < numOfBackground)
            scrollValue = scrollValue + width;
        else{
            scrollValue = 0;
            scrolled = 0
        }
          _scrollView.scrollTo({x: scrollValue}) 
        }, 3000);
    })

    const goToSignUp = () =>{
        setLaunchState();
        navigation.navigate('Login');
    }
    
    return (
        <View>
            <StatusBar
                animated={true}
                backgroundColor='#212121'
                networkActivityIndicatorVisible={true}
                animated={true}
            />
            <ScrollView
                style={styles.imageContainer}
                ref={(scrollView) => { _scrollView = scrollView; }}
                horizontal={true} pagingEnabled={true} 
                >
                <Image source={require('../image_props/andres-rodriguez-mKP2bl0R0pk-unsplash.jpg')} style={styles.image} />
                <Image source={require('../image_props/andres-rodriguez-So4EHYeShUM-unsplash.jpg')} style={styles.image} />
                <Image source={require('../image_props/nishaan-ahmed-Mh087eDe_qA-unsplash.jpg')} style={styles.image} />
            </ScrollView>

            <View style={{position: 'absolute'}}>
                <Text style={styles.slogan}>
                    Food for{"\n"}Everyone
                </Text>
            </View>
            
            <View>
                <TouchableOpacity
                        style={styles.getStartedButton}
                        onPress={goToSignUp}
                        hitSlop={{ left: 20, top: 20, right: 20, bottom: 20 }}
                >
                    <Text style={styles.getStartedText}>
                        Get started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    imageContainer:{
        height: imageHeight,
    },
    image:{
        width:width,
        height:imageHeight,
    },
    slogan:{
        alignSelf:'flex-start',
        marginLeft:10,
        marginTop:20,
        color:'#F2651C',
        fontSize:60,
        fontWeight:'bold',
    },
    getStartedButton:{
        position:'relative',
        backgroundColor:'transparent',
        width:width,
        backgroundColor:'#F2651C',
        height:60,
        borderBottomColor:'#F2651C',
        borderBottomWidth:1,
        borderTopColor:'#F2651C',
        borderTopWidth:1,
    },
    getStartedText:{
        fontSize:20,
        color:'#FFFFFF',
        alignSelf:'center',
        marginVertical:15,
    },
})