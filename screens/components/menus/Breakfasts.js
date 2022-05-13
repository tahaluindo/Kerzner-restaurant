import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Breakfasts = () => {
    // const Waterford_Breakfast = () =>{
    const navigation = useNavigation();

    const [quantityUpdate, setQuantityUpdate] = useState(1);

    const menuDetails = {
        menu : "",
        price : "",
        quantity : "",
        key : "",
    };

    const [ priceHolder, setPriceHolder ] = useState(0);
    const finalPrice = priceHolder;

    const updateQuantity = (number) =>{
        setQuantityUpdate(number)
    };

    const ToCart = () =>{
        navigation.navigate('Cart');
    };

    const AddToCart = async (menuDetails, menuVar, priceVar, quantityUpdateVar, keyVar) =>{
        menuDetails.menu=menuVar;
        menuDetails.price=priceVar;
        menuDetails.quantity=quantityUpdateVar;
        menuDetails.key=keyVar;

        // alert(menuDetails.quantity)
        
            try{
                await AsyncStorage.setItem(keyVar, JSON.stringify(menuDetails))
            
                console.log("Breakfast added to Cart!")
                
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
                        source={require('../../../image_props/nathan-dumlao-2VSTCRx8ccY-unsplash.jpg')}
                    />
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Waterford Breakfast</Text>
                        <Text style={styles.menuIngredients}>Beef Sausage, Bacon, Grilled Tomato, Field Mushroom, Egg {"&"} Toast</Text>
                        <Text style={styles.menuExtra}>(Served w/ your choice of toast) Brown/white/Rye</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 85.00</Text>
                            
                            <View style={styles.quantityCartContainer}>
                                <Text style={styles.multiply}>x</Text>
                                
                                <TextInput
                                    style={styles.quantity}
                                    maxLength={2}
                                    editable={true}
                                    defaultValue="1"
                                    placeholder="0"
                                    textAlign="center"
                                    keyboardType="numeric"
                                    multiline={false}
                                    onChangeText={number=>(updateQuantity(number))}
                                />

                                <TouchableOpacity
                                    style={styles.BuyCartButton}
                                    onPress={()=>{
                                        AddToCart(menuDetails, "Waterford Breakfast", "R 85.00", quantityUpdate, "Breakfasts01")}
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
                        <Text style={styles.menuName}>Beans With Hashbrown</Text>
                        <Text style={styles.menuIngredients}>Seasoned beans served with Hashbrown</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 65.00</Text>
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
                                        AddToCart(menuDetails, "Beans With Hashbrown", "R 65.00", quantityUpdate, "Breakfasts02")}
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
                        <Text style={styles.menuName}>Homemade Waffle</Text>
                        <Text style={styles.menuIngredients}>Maple syrup</Text>
                        <Text style={styles.menuExtra}>(Served in with Berry Compote with/bacon)</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 65.00</Text>
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
                                        AddToCart(menuDetails, "Homemade Waffle", "R 65.00", quantityUpdate, "Breakfasts03")}
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
                        <Text style={styles.menuName}>Breakfast Fruit Bowl</Text>
                        <Text style={styles.menuIngredients}>Seasonal fruit selection</Text>
                        <Text style={styles.menuExtra}>(Served with nuts {"&"} Bulgarian Yoghurt)</Text>
                        <Text style={styles.menuExtra}>Added Extras</Text>
                        <Text style={styles.menuExtra}>Muesli       R 8.00</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 72.00</Text>
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
                                        AddToCart(menuDetails, "Breakfast Fruit Bowl", "R 72.00", quantityUpdate, "Breakfasts04")}
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
                        <Text style={styles.menuName}>Oats</Text>
                        <Text style={styles.menuIngredients}>Freshly prepared Oats served with honey {"&"} warm milk</Text>
                        <Text style={styles.menuExtra}>Added Extras</Text>
                        <Text style={styles.menuExtra}>Fruit       R 10.00</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 55.00</Text>
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
                                        AddToCart(menuDetails, "STH Beef Oats", "R 55.00", quantityUpdate, "Breakfasts05")}
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
export default Breakfasts

const styles = StyleSheet.create({
    container:{
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
        color:'#5e5e5e',
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
