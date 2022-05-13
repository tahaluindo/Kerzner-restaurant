import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'


export const Breakfast_Thumb = () =>{
    const navigation = useNavigation();

    const goToBreakfast = () =>{
        navigation.navigate('Breakfasts')
    }

    return(
        <TouchableOpacity onPress={goToBreakfast}>
            <ImageBackground
                style={styles.imageThumbnail}
                source={require('../../image_props/nathan-dumlao-2VSTCRx8ccY-unsplash.jpg')}
                imageStyle={{borderRadius:20}}
            >
                <View style={styles.imageThumbTextContainer}>
                    <Text style={styles.imageThumbText}>
                        Breakfast
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

/////////////////////////////////////////////////////////////////////////////////

export const Salads_Thumb = () =>{
    const navigation = useNavigation();

    const goToSalads = () =>{
        navigation.navigate('Salads')
    }

    return(
        <TouchableOpacity onPress={goToSalads}>
            <ImageBackground
                style={styles.imageThumbnail}
                source={require('../../image_props/mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg')}
                imageStyle={{borderRadius:20}}
            >
                <View style={styles.imageThumbTextContainer}>
                    <Text style={styles.imageThumbText}>
                        Salads
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

/////////////////////////////////////////////////////////////////////////////////

export const SpecialityBurgers_Thumb = () =>{
    const navigation = useNavigation();

    const goToSpecialityBurgers = () =>{
        navigation.navigate('SpecialityBurgers')
    }
    return(
        <TouchableOpacity onPress={goToSpecialityBurgers}>
            <ImageBackground
                style={styles.imageThumbnail}
                source={require('../../image_props/mahbub-majid-ijiBzdaxDx8-unsplash.jpg')}
                imageStyle={{borderRadius:20}}
            >
                <View style={styles.imageThumbTextContainer}>
                    <Text style={styles.imageThumbText}>
                        Speciality Burgers
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

/////////////////////////////////////////////////////////////////////////////////

export const Sandwitches_Thumb = () =>{
    const navigation = useNavigation();

    const goToSandwiches = () =>{
        navigation.navigate('Sandwiches')
    }

    return(
        <TouchableOpacity onPress={goToSandwiches}>
            <ImageBackground
                style={styles.imageThumbnail}
                source={require('../../image_props/mahbub-majid-3eFXM5BDaI4-unsplash.jpg')}
                imageStyle={{borderRadius:20}}
            >
                <View style={styles.imageThumbTextContainer}>
                    <Text style={styles.imageThumbText}>
                        Sandwiches
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

/////////////////////////////////////////////////////////////////////////////////

export const HotMeals_Thumb = () =>{
    const navigation = useNavigation();

    const goToHotMeals = () =>{
        navigation.navigate('HotMeals')
    }

    return(
        <TouchableOpacity onPress={goToHotMeals}>
            <ImageBackground
                style={styles.imageThumbnail}
                source={require('../../image_props/alex-munsell-auIbTAcSH6E-unsplash.jpg')}
                imageStyle={{borderRadius:20}}
            >
                <View style={styles.imageThumbTextContainer}>
                    <Text style={styles.imageThumbText}>
                        HotMeals
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

/////////////////////////////////////////////////////////////////////////////////

export const SignaturePizzas_Thumb = () =>{
    const navigation = useNavigation();

    const goToSignaturePizzas = () =>{
        navigation.navigate('SignaturePizzas')
    }

    return(
        <TouchableOpacity onPress={goToSignaturePizzas}>
            <ImageBackground
                style={styles.imageThumbnail}
                imageStyle={{borderRadius:20}}
                source={require('../../image_props/emmanuel-zua-LxlMjePM7rQ-unsplash.jpg')}
            >
                <View style={styles.imageThumbTextContainer}>
                    <Text style={styles.imageThumbText}>
                        Signature Pizzas
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////

export const Omelets_Thumb = () =>{
    const navigation = useNavigation();

    const goToOmelets = () =>{
        navigation.navigate('Omelets')
    }

    return(
        <TouchableOpacity onPress={goToOmelets}>
            <ImageBackground
                style={styles.imageThumbnail}
                source={require('../../image_props/louis-hansel-shotsoflouis-V3frlG3Hgqc-unsplash.jpg')}
                imageStyle={{borderRadius:20}}
            >
                <View style={styles.imageThumbTextContainer}>
                    <Text style={styles.imageThumbText}>
                        Omelets
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    imageThumbnail:{
        height:150,
        width:340,
        marginHorizontal:10,
        marginVertical:10,
    },
    imageThumbTextContainer:{
        marginTop:120,
        marginHorizontal:15,
    },
    imageThumbText:{
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'bold',
    },
})