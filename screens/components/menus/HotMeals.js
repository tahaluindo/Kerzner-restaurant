import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HotMeals = () => {
    // const Creamed_Beef_Pasta = () =>{
    const navigation = useNavigation();

    const [quantityUpdate, setQuantityUpdate] = useState(1);

    const menuDetails = ({
        menu : "",
        price : "",
        quantity: "",
        key : "",
    })

    const updateQuantity = (number) =>{
        setQuantityUpdate(number)
    }

    const ToCart = () =>{
        navigation.navigate('Cart');
    }

    const AddToCart = async (menuDetails, menuVar, priceVar, quantityUpdateVar, keyVar) =>{
        menuDetails.menu=menuVar;
        menuDetails.price=priceVar;
        menuDetails.quantity=quantityUpdateVar;
        menuDetails.key=keyVar;
        
        try{
            const jsonMenuValue = JSON.stringify(menuDetails);
            await AsyncStorage.setItem(keyVar, jsonMenuValue)
    
                console.log("Hot Meal added to Cart!")
            }catch(err){
                console.log(err)
            }
        }

        return (
            <View style={styles.container}>
                <View style={styles.headField}>
                    <Text style={styles.menuTextHead}>
                        Menu
                    </Text>
                    <TouchableOpacity
                        style={styles.cartButton}
                        onPress={ToCart}
                    >
                            <FontAwesome
                                style={styles.cartIcon}
                                name='shopping-cart'
                                size={40}
                                color='#F2651C'
                                selectionColor='#FFFFFF'
                                accessibilityIgnoresInvertColors={true}
                            />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../../image_props/alex-munsell-auIbTAcSH6E-unsplash.jpg')}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Creamed Beef Pasta</Text>
                        <Text style={styles.menuIngredients}>Layered Beef with Provençale style sauce, cream {"&"} Pecorino Cheese </Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 70.00</Text>
                            <View style={styles.quantityCartContainer}>
                                <Text style={styles.multiply}>x</Text>
                                <TextInput
                                    style={styles.quantity}
                                    maxLength={2}
                                    editable={true}
                                    defaultValue="1"
                                    placeholder="1"
                                    textAlign="center"
                                    keyboardType="numeric"
                                    multiline={false}
                                    onChangeText={number=>(updateQuantity(number))}
                                />

                                <TouchableOpacity
                                    style={styles.BuyCartButton}
                                    onPress={()=>{
                                        AddToCart(menuDetails, "Creamed Beef Pasta", "R 70.00", quantityUpdate, "HotMeals01")}
                                    }
                                >
                                    <FontAwesome
                                        style={styles.AddCartIcon}
                                        name='cart-plus'
                                        size={30}
                                        color='#F2651C'
                                        selectionColor='#FFFFFF'
                                        accessibilityIgnoresInvertColors={true}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Fish {"&"} Chips</Text>
                        <Text style={styles.menuIngredients}>Served with Choice of Side Salad or STH House Fries {"&"} tartare sauce</Text>
                        <Text style={styles.menuExtra}>A five spice Battered Hake fried to perfection</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 70.00</Text>
                            <View style={styles.quantityCartContainer}>
                                <Text style={styles.multiply}>x</Text>
                                <TextInput
                                    style={styles.quantity}
                                    maxLength={2}
                                    editable={true}
                                    defaultValue="1"
                                    placeholder="1"
                                    textAlign="center"
                                    keyboardType="numeric"
                                    multiline={false}
                                    onChangeText={number=>(updateQuantity(number))}
                                />

                                <TouchableOpacity
                                    style={styles.BuyCartButton}
                                    onPress={()=>{
                                        AddToCart(menuDetails, "Fish And Chips", "R 70.00", quantityUpdate, "HotMeals02")}
                                    }
                                >
                                    <FontAwesome
                                        style={styles.AddCartIcon}
                                        name='cart-plus'
                                        size={30}
                                        color='#F2651C'
                                        selectionColor='#FFFFFF'
                                        accessibilityIgnoresInvertColors={true}
                                    />
                                </TouchableOpacity>
                                </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    // }
}
export default HotMeals

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:5,
        marginVertical:5,
        borderBottomColor:'#F2651C',
        borderBottomWidth:0.5,
    },
    headField:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    multiply:{
        paddingTop:5,
    },
    quantityCartContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:5,
    },
    quantity:{
        borderColor:'#F2651C',
        borderWidth:2,
        borderRadius:5,
        height:35,
        marginHorizontal:5,
        fontWeight:"bold",
        backgroundColor:"#ededed"
    },
    cartButton:{
        backgroundColor:'transparent',       
    },
    menuTextHead:{
        fontSize:25,
        fontWeight:'bold',
    },
    image:{
        borderRadius:20,
        width:'100%',
        height:150,
    },
    menuContainer:{
        marginVertical:5,
        marginHorizontal:10,
        alignContent:'center',
        backgroundColor:'#FFFFFF',
        borderWidth:0.5,
        borderColor:'#FFFFFF',
        borderRadius:20,
    },
    menuName:{
        marginVertical:5,
        marginHorizontal:5,
        alignSelf:'center',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 20,
        color: '#000000'
    },
    menuPrice:{
        marginVertical:2,
        fontSize:20,
        color:'#000000',
        fontWeight:'bold',
    },
    menuIngredients:{
        alignSelf:'center',
        textAlign:'center',
        marginHorizontal:5,
        fontSize:15,
        color:"#5e5e5e",
    },
    menuExtra:{
        alignSelf:'center',
        fontSize:10,
        marginHorizontal:5,
        color:'#8a8a8a',
        marginBottom:5,
        marginHorizontal:5,
    },
    buyField:{
        marginHorizontal:50,
        flexDirection:'row',
        justifyContent:'space-between',
    }
})
