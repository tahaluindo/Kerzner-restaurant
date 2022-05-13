import React, { useEffect } from 'react'
import { View, LogBox, Text, Image, ScrollView, StyleSheet, Linking } from 'react-native'

//INSTALLED LIBRARIES
import { SliderBox } from "react-native-image-slider-box";

const MainAdvert = () => {

    const images = [
        require('../image_props/pablo-merchan-montes-0nT08Z-MhiE-unsplash.jpg'),
        require('../image_props/andres-rodriguez-So4EHYeShUM-unsplash.jpg'),
        require('../image_props/nishaan-ahmed-Mh087eDe_qA-unsplash.jpg'),
    ];

    const advertHandler = () =>{
        Linking.openURL('https://thekerzneratuj.com/');
    };

    useEffect(() => {
        LogBox.ignoreAllLogs();
    })

    return (
        <View style={styles.advertField}>
            <SliderBox
                style={styles.advertPicture}
                images={images}
                dotColor='#F2651C'
                paginationBoxVerticalPadding={5}
                autoplay={true}
                autoplayInterval={3000}
                circleLoop={true}
                onCurrentImagePressed={advertHandler}
            />
        </View>
    )
}

export default MainAdvert

const styles = StyleSheet.create({
    advertField:{
        marginLeft:10,
        marginTop:10,
        backgroundColor:'transparent',
        backgroundColor:'#FFFFFF'
    },
    advertPicture:{
        width:340,
        height:120,
        borderColor:'transparent',
        borderWidth:1,
        backgroundColor:'#FFFFFF'
    }
})