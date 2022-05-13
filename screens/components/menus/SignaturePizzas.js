import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignaturePizzas = () => {
    // const BBQ_Chicken_Mushroom_Pizza = () =>{
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
    
                console.log("Speciality Burger Stored!")
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
                        source={require('../../../image_props/emmanuel-zua-LxlMjePM7rQ-unsplash.jpg')}
                    />
            </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>BBQ Chicken {"&"} Mushroom Pizza</Text>
                        <Text style={styles.menuIngredients}>A freshly made pizza made with mozzarella cheese, Tangy Tomato, BBQ Chicken, Mushroom {"&"} Peppers</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 92.00</Text>
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
                                        AddToCart(menuDetails, "BBQ Chicken & Mushroom Pizza", "R 92.00", quantityUpdate, "Pizzas01")}
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
                        <Text style={styles.menuName}>Four Seasons Pizza</Text>
                        <Text style={styles.menuIngredients}>A freshly prepared pizza made with Mozzarella Cheese, Spinach, Feta, Mushrooms {"&"} Olives</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 78.00</Text>
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
                                        AddToCart(menuDetails, "Four Seasons Pizza", "R 78.00", quantityUpdate, "Pizzas02")}
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
                        <Text style={styles.menuName}>Meat Lovers Delight</Text>
                        <Text style={styles.menuIngredients}>A freshly prepared pizza made with Mozzarella Cheese, Salami, Pork Ribs, Feta, Mushrooms {"&"} Bacon Jam</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 105.00</Text>
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
                                        AddToCart(menuDetails, "Meat Lovers Delight", "R 105.00", quantityUpdate, "Pizzas03")}
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
export default SignaturePizzas

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
