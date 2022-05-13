import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Drinks = () => {

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
    
                console.log("Drink added to Cart!")
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
                    source={require('../../../image_props/rirri-R4zSXgDZLEU-unsplash.jpg')}
                />
            </View>
            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={styles.menuContainer}>
                    <Text style={styles.menuName}>
                        Soft Drinks (300ml)
                    </Text>

                    <View>
                        <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Coke
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 18.00
                            </Text>
                        </View>
                
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
                                    AddToCart(menuDetails, "Coke (300ml)", "R 18.00", quantityUpdate, "drinks01")}
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
                    
                    <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Coke Zero
                            </Text>                        
                            <Text style={styles.drinkPrice}>
                                R 18.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "Coke Zero (300ml)", "R 18.00", quantityUpdate, "drinks02")}
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

                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Sprite
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 18.00
                            </Text>
                        </View>
                        
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
                                    AddToCart(menuDetails, "Sprite (300ml)", "R 18.00", quantityUpdate, "drinks03")}
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
                    
                    <View>
                    <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Sprite Zero
                            </Text>                   
                            <Text style={styles.drinkPrice}>
                                R 18.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "Sprite Zero (300ml)", "R 18.00", quantityUpdate, "drinks04")}
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

                        <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Dry Lemon
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 18.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "Dry Lemon (300ml)", "R 18.00", quantityUpdate, "drinks05")}
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

                        <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Granadilla Twist
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 18.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "Granadilla Twist (300ml)", "R 18.00", quantityUpdate, "drinks06")}
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

                        <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Lemon Twist
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 18.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "Lemon Twist (300ml)", "R 18.00", quantityUpdate, "drinks07")}
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

                    <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Stoney
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 18.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "Stoney (300ml)", "R 18.00", quantityUpdate, "drinks08")}
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

                        <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Fanta Orange
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 18.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "Fanta Orange (300ml)", "R 18.00", quantityUpdate, "drinks09")}
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

                        <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Creme Soda
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 18.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "Creme Soda (300ml)", "R 18.00", quantityUpdate, "drinks10")}
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

                        <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Appletiser
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 22.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "Appletizer (300ml)", "R 22.00", quantityUpdate, "drinks11")}
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

                        <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Red Grapetiser
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 22.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "Red Grapetiser (300ml)", "R 22.00", quantityUpdate, "drinks12")}
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

                        <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                Red Bull
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 45.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "Red Bull (300ml)", "R 45.00", quantityUpdate, "drinks13")}
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

                        <View>
                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                STH Still Water (500ml)
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 20.00
                            </Text>
                        </View>
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
                                    AddToCart(menuDetails, "STH Still Water (500ml)", "R 20.00", quantityUpdate, "drinks14")}
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

                        <View style={styles.menuViewContainer}>
                            <Text style={styles.drinkName}>
                                STH Sparkling Water (500ml)
                            </Text>
                            <Text style={styles.drinkPrice}>
                                R 20.00
                            </Text>
                        </View>
                    </View>

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
                                    AddToCart(menuDetails, "STH Sparkling Water (500ml)", "R 20.00", quantityUpdate, "drinks15")}
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

        



                    <View style={styles.menuContainer}>
                    <Text style={styles.menuName}>
                        Smoothies
                    </Text>

                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                            Banana {"&"} Strawberry Smoothie
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 50.00
                        </Text>
                    </View>
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
                                    AddToCart(menuDetails, "Banana & Strawberry Smoothie", "R 50.00", quantityUpdate, "drinks16")}
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

                    <View>
                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                            Strawberry Smoothie
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 50.00
                        </Text>
                    </View>
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
                                    AddToCart(menuDetails, "Strawberry Smoothie", "R 50.00", quantityUpdate, "drinks17")}
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

                    <View>
                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                            Blueberry Smoothie
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 50.00
                        </Text>
                    </View>
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
                                    AddToCart(menuDetails, "Blueberry Smoothie", "R 50.00", quantityUpdate, "drinks18")}
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

                    <View>
                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                            Raspberry Smoothie
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 50.00
                        </Text>
                    </View>
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
                                    AddToCart(menuDetails, "Raspberry Smoothie", "R 50.00", quantityUpdate, "drinks19")}
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

                    <View>
                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                            Dairy Free Strawberry {"&"}{"\n"} Banana Smoothie
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 50.00
                        </Text>
                    </View>
                </View>
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
                                    AddToCart(menuDetails, "Dairy Free & Banana Smoothie", "R 50.00", quantityUpdate, "drinks20")}
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
                <View style={styles.menuContainer}>
                    <Text style={styles.menuName}>
                        Shakes
                    </Text>

                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                            Banana Milkshake
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 50.00
                        </Text>
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
                                    AddToCart(menuDetails, "Banana Milkshake", "R 50.00", quantityUpdate, "drinks21")}
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

                    <View>

                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                            Strawberry Milkshake
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 50.00
                        </Text>
                    </View>
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
                                    AddToCart(menuDetails, "Strawberry Milkshake", "R 50.00", quantityUpdate, "drinks22")}
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

                    <View>
                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                            Banana {"&"} Pretzel Milkshake
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 50.00
                        </Text>
                    </View>
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
                                    AddToCart(menuDetails, "Banana & Pretzel Milkshake", "R 50.00", quantityUpdate, "drinks23")}
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

                    
                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                            Chocolate Milkshake
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 50.00
                        </Text>
                    </View>

                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                        Vegan Milkshake
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 55.00
                        </Text>
                    </View>
                </View>

                <View style={styles.menuContainer}>
                    <Text style={styles.menuName}>
                        Quakes
                    </Text>

                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                            Coffee {"&"} Banana Quake
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 50.00
                        </Text>
                    </View>

                    <View style={styles.menuViewContainer}>
                        <Text style={styles.drinkName}>
                            Coffee {"&"} Vanilla Quake
                        </Text>
                        <Text style={styles.drinkPrice}>
                            R 50.00
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Drinks

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
        marginHorizontal:20,
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
        alignSelf:'center',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 20,
        color: '#000000',
    },
    menuViewContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:0.3,
        borderTopColor:'#F2651C',
        marginHorizontal:5,
        marginVertical:10
    },
    drinkName:{
        alignSelf:'flex-start',
        fontSize:15,
        color:"#5e5e5e",
    },
    drinkPrice:{
        fontSize:15,
        color:'#000000',
        fontWeight:'bold',
    }
})
