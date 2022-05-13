import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, LogBox } from 'react-native'

const MainContents = () => {

    const navigation = useNavigation();

    //CATEGORIES
    const [catHorizontal, setCatHorizontal] = useState([
        {   
            src : require('../image_props/whitney-wright-6G98hiCJETA-unsplash.jpg'),
            key:'catBreakfast',
            title:'Breakfast',
            value:'Breakfasts'
        },
        {
            src : require('../image_props/rirri-R4zSXgDZLEU-unsplash.jpg'),
            key:'catDrinks',
            title:'Drinks',
            value:'Drinks'
        },
        {
            src : require('../image_props/monika-grabkowska-P1aohbiT-EY-unsplash.jpg'),
            key:'catDeserts',
            title:'Deserts',
            value:'Deserts'
        },
        {
            src : require('../image_props/mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg'),
            key:'catSalads',
            title:'Salads',
            value:'Salads'
        },   
        {
            src : require('../image_props/alex-munsell-Yr4n8O_3UPc-unsplash.jpg'),
            key:'catHot_Meals',
            title:'Hot Meals',
            value:'HotMeals'
        }
    ]);

    const showAllCats = () =>{
        navigation.navigate('AllMenus')
    }
    useEffect(() => {
        LogBox.ignoreAllLogs();
    })

    const toSelectedMenu = (selected) =>{
        navigation.navigate(selected)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.catContainer}>
                <View style={styles.catTextField}>
                    <Text style={styles.catText}>
                            Categories
                    </Text>

                    <TouchableOpacity
                        style={styles.viewAllButton}
                        underlayColor='#FFFFFF'
                        onPress={() => showAllCats()}    
                    >
                        <Text style={styles.viewAllText}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                        style={styles.catContainer}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={catHorizontal}
                        renderItem={({ item })=>(
                            <View
                                style={styles.smallCatImageContainer}
                            >   
                                <TouchableOpacity onPress={()=>toSelectedMenu(item.value)}>
                                    <Image 
                                        source={item.src}
                                        key={item.key}
                                        style={styles.smallCatImage}
                                    />
                                    <Text style={styles.catTitle}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
            </View>
        </View>
    )
}

export default MainContents

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:10,
        borderBottomWidth:0.5,
        borderColor:'#F2651C'
    },
    catTextField:{
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
    },
    catText:{
        color:'#000000',
        fontWeight:'bold'
    },
    viewAllButton:{
        backgroundColor:'#FFFFFF',
        marginLeft:220
    },
    viewAllText:{
        color:'#F2651C',
        fontWeight:'bold',
    },
    catContainer:{
        marginLeft:5,
        marginRight:5
    },
    smallCatImageContainer:{
        marginHorizontal:5,
        marginVertical:5
    },
    smallCatImage:{
        width:70,
        height:70,
        borderRadius:12,
        borderColor:'#000000',
        borderWidth:0.2,
    },
    catTitle:{
        color:'#000000',
        fontSize:13,
        alignSelf:'center'
    }
})