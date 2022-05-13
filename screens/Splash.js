import React from 'react'
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'

const Splash = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor='#F2651C'
                networkActivityIndicatorVisible={true}
                animated={true}
            />

            <Text style={styles.kerznerText}>
                TheKerzner@UJ
            </Text>
            <Image
                style={styles.logo}
                source={require('../image_props/logo_orange.jpg')}
            />
            <Text></Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        height:'100%',
        backgroundColor:'#F2651C',
    },
    kerznerText:{
        marginTop:140,
        color:'#FFFFFF',
        fontSize:40,
        fontWeight:'bold',
    },
    logo:{
        marginTop:50,
        width:200,
        height:200,
        backgroundColor:'#F2651C',
    },
})
