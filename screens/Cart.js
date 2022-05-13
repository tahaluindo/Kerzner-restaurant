import React,{ useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { LogBox, View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {FontAwesome} from '@expo/vector-icons'

import {
    getUnhandledPromiseRejectionTracker,
    setUnhandledPromiseRejectionTracker,
  } from 'react-native-promise-rejection-utils'

const Cart = () => {
    const navigation = useNavigation();

    const [menuViewBreakfast1, setmenuViewBreakfast1] = useState(false);
    const [menuViewBreakfast2, setmenuViewBreakfast2] = useState(false);
    const [menuViewBreakfast3, setmenuViewBreakfast3] = useState(false);

    const [menuViewSandwich1, setmenuViewSandwich1] = useState(false);
    const [menuViewSandwich2, setmenuViewSandwich2] = useState(false);
    const [menuViewSandwich3, setmenuViewSandwich3] = useState(false);

    const [menuViewBurger1, setmenuViewBurger1] = useState(false);
    const [menuViewBurger2, setmenuViewBurger2] = useState(false);
    const [menuViewBurger3, setmenuViewBurger3] = useState(false);

    const [menuViewPizzas1, setmenuViewPizzas1] = useState(false);
    const [menuViewPizzas2, setmenuViewPizzas2] = useState(false);
    const [menuViewPizzas3, setmenuViewPizzas3] = useState(false);

    const [menuViewSalads1, setmenuViewSalads1] = useState(false);
    const [menuViewSalads2, setmenuViewSalads2] = useState(false);
    const [menuViewSalads3, setmenuViewSalads3] = useState(false);

    const [menuViewHotMeals1, setmenuViewHotMeals1] = useState(false);
    const [menuViewHotMeals2, setmenuViewHotMeals2] = useState(false);
    const [menuViewHotMeals3, setmenuViewHotMeals3] = useState(false);

    const [menuViewDrink1, setmenuViewDrink1] = useState(false);
    const [menuViewDrink2, setmenuViewDrink2] = useState(false);
    const [menuViewDrink3, setmenuViewDrink3] = useState(false);


    //Breakfasts
    const [menuBreakfast1, setmenuBreakfast1] = useState("");
    const [priceBreakfast1, setpriceBreakfast1] = useState("")
    const [quantityBreakfast1, setquantityBreakfast1] = useState("")
    const [keyBreakfast1, setkeyBreakfast1] = useState("")

    const [menuBreakfast2, setmenuBreakfast2] = useState("");
    const [priceBreakfast2, setpriceBreakfast2] = useState("")
    const [quantityBreakfast2, setquantityBreakfast2] = useState("")
    const [keyBreakfast2, setkeyBreakfast2] = useState("")

    const [menuBreakfast3, setmenuBreakfast3] = useState("");
    const [priceBreakfast3, setpriceBreakfast3] = useState("")
    const [quantityBreakfast3, setquantityBreakfast3] = useState("")
    const [keyBreakfast3, setkeyBreakfast3] = useState("")

    //Sandwiches
    const [menuSandwich1, setmenuSandwich1] = useState("");
    const [priceSandwich1, setpriceSandwich1] = useState("")
    const [quantitySandwich1, setquantitySandwich1] = useState("")
    const [keySandwich1, setkeySandwich1] = useState("")

    const [menuSandwich2, setmenuSandwich2] = useState("");
    const [priceSandwich2, setpriceSandwich2] = useState("")
    const [quantitySandwich2, setquantitySandwich2] = useState("")
    const [keySandwich2, setkeySandwich2] = useState("")

    const [menuSandwich3, setmenuSandwich3] = useState("");
    const [priceSandwich3, setpriceSandwich3] = useState("")
    const [quantitySandwich3, setquantitySandwich3] = useState("")
    const [keySandwich3, setkeySandwich3] = useState("")

    //Burgers
    const [menuBurger1, setmenuBurger1] = useState("");
    const [priceBurger1, setpriceBurger1] = useState("")
    const [quantityBurger1, setquantityBurger1] = useState("")
    const [keyBurger1, setkeyBurger1] = useState("")

    const [menuBurger2, setmenuBurger2] = useState("");
    const [priceBurger2, setpriceBurger2] = useState("")
    const [quantityBurger2, setquantityBurger2] = useState("")
    const [keyBurger2, setkeyBurger2] = useState("")

    const [menuBurger3, setmenuBurger3] = useState("");
    const [priceBurger3, setpriceBurger3] = useState("")
    const [quantityBurger3, setquantityBurger3] = useState("")
    const [keyBurger3, setkeyBurger3] = useState("")
    
    //Pizza
    const [menuPizzas1, setmenuPizzas1] = useState("");
    const [pricePizzas1, setpricePizzas1] = useState("")
    const [quantityPizzas1, setquantityPizzas1] = useState("")
    const [keyPizzas1, setkeyPizzas1] = useState("")

    const [menuPizzas2, setmenuPizzas2] = useState("");
    const [pricePizzas2, setpricePizzas2] = useState("")
    const [quantityPizzas2, setquantityPizzas2] = useState("")
    const [keyPizzas2, setkeyPizzas2] = useState("")

    const [menuPizzas3, setmenuPizzas3] = useState("");
    const [pricePizzas3, setpricePizzas3] = useState("")
    const [quantityPizzas3, setquantityPizzas3] = useState("")
    const [keyPizzas3, setkeyPizzas3] = useState("")

    //HotMeal
    const [menuHotMeal1, setmenuHotMeal1] = useState("");
    const [priceHotMeal1, setpriceHotMeal1] = useState("")
    const [quantityHotMeal1, setquantityHotMeal1] = useState("")
    const [keyHotMeal1, setkeyHotMeal1] = useState("")

    const [menuHotMeal2, setmenuHotMeal2] = useState("");
    const [priceHotMeal2, setpriceHotMeal2] = useState("")
    const [quantityHotMeal2, setquantityHotMeal2] = useState("")
    const [keyHotMeal2, setkeyHotMeal2] = useState("")

    const [menuHotMeal3, setmenuHotMeal3] = useState("");
    const [priceHotMeal3, setpriceHotMeal3] = useState("")
    const [quantityHotMeal3, setquantityHotMeal3] = useState("")
    const [keyHotMeal3, setkeyHotMeal3] = useState("")

    //Salad
    const [menuSalad1, setmenuSalad1] = useState("");
    const [priceSalad1, setpriceSalad1] = useState("")
    const [quantitySalad1, setquantitySalad1] = useState("")
    const [keySalad1, setkeySalad1] = useState("")

    const [menuSalad2, setmenuSalad2] = useState("");
    const [priceSalad2, setpriceSalad2] = useState("")
    const [quantitySalad2, setquantitySalad2] = useState("")
    const [keySalad2, setkeySalad2] = useState("")

    const [menuSalad3, setmenuSalad3] = useState("");
    const [priceSalad3, setpriceSalad3] = useState("")
    const [quantitySalad3, setquantitySalad3] = useState("")
    const [keySalad3, setkeySalad3] = useState("")

    //Drink
    const [menuDrink1, setmenuDrink1] = useState("");
    const [priceDrink1, setpriceDrink1] = useState("")
    const [quantityDrink1, setquantityDrink1] = useState("")
    const [keyDrink1, setkeyDrink1] = useState("")

    const [menuDrink2, setmenuDrink2] = useState("");
    const [priceDrink2, setpriceDrink2] = useState("")
    const [quantityDrink2, setquantityDrink2] = useState("")
    const [keyDrink2, setkeyDrink2] = useState("")

    const [menuDrink3, setmenuDrink3] = useState("");
    const [priceDrink3, setpriceDrink3] = useState("")
    const [quantityDrink3, setquantityDrink3] = useState("")
    const [keyDrink3, setkeyDrink3] = useState("")


    let quantityHolder = 0;

    const allPrices = {
        finalPriceBreakfast1 : "",
        finalPriceBreakfast2 : "",
        finalPriceBreakfast3 : "",

        finalPriceBurger1 : "",
        finalPriceBurger2 : "",
        finalPriceBurger3 : "",

        finalPriceSandwich1 : "",
        finalPriceSandwich2 : "",
        finalPriceSandwich3 : "",

        finalPriceHotMeals1 : "",
        finalPriceHotMeals2 : "",
        finalPriceHotMeals3 : "",

        finalPricePizzas1 : "",
        finalPricePizzas2 : "",
        finalPricePizzas3 : "",

        finalPriceSalads1 : "",
        finalPriceSalads2 : "",
        finalPriceSalads3 : "",

        finalPriceDrink1 : "",
        finalPriceDrink2 : "",
        finalPriceDrink3 : "",
    };

    const emptyCartAlert = () =>{
        Alert.alert(
            "TheKerzner@UJ",
            "Your cart is empty",
            [
                {
                    text: "Ok",
                    onPress: () =>
                        navigation.navigate('Main')
                }
            ],
            { cancelable: false }
        );
    };


    useEffect(()=>{
        LogBox.ignoreAllLogs();

        allPrices.finalPriceBreakfast1 = priceBreakfast1,
        allPrices.finalPriceBreakfast2 = priceBreakfast2,
        allPrices.finalPriceBreakfast3 = priceBreakfast3,

        allPrices.finalPriceBurger1 = priceBurger1,
        allPrices.finalPriceBurger2 = priceBurger2,
        allPrices.finalPriceBurger3 = priceBurger3,

        allPrices.finalPriceSandwich1 = priceSandwich1,
        allPrices.finalPriceSandwich2 = priceSandwich2,
        allPrices.finalPriceSandwich3 = priceSandwich3,

        allPrices.finalPriceHotMeals1 = priceHotMeal1,
        allPrices.finalPriceHotMeals2 = priceHotMeal2,
        allPrices.finalPriceHotMeals3 = priceHotMeal3,

        allPrices.finalPriceSalads1 = priceSalad1,
        allPrices.finalPriceSalads2 = priceSalad2,
        allPrices.finalPriceSalads3 = priceSalad3,

        allPrices.finalPricePizzas1 = pricePizzas1,
        allPrices.finalPricePizzas2 = pricePizzas2,
        allPrices.finalPricePizzas3 = pricePizzas3,

        allPrices.finalPriceSalads1 = priceSalad1,
        allPrices.finalPriceSalads2 = priceSalad2,
        allPrices.finalPriceSalads3 = priceSalad3,

        allPrices.finalPriceDrink1 = priceDrink1,
        allPrices.finalPriceDrink2 = priceDrink2,
        allPrices.finalPriceDrink3 = priceDrink3,

        loadItems()
        return() => console.log("Null menu data") //FIX THE MEMORY-LEAK IF YOU REMOVE THIS LINE
    })

    const loadItems = async () =>{
        //Breakfast1
        if(await AsyncStorage.getItem('Breakfasts01')){
            try{
                let itemData1 = await AsyncStorage.getItem('Breakfasts01')
                let parsedItem1 = JSON.parse(itemData1);
    
                setmenuBreakfast1(parsedItem1.menu);
                setpriceBreakfast1(parsedItem1.price);
                setquantityBreakfast1(parseInt(parsedItem1.quantity));
                setkeyBreakfast1(parsedItem1.key);

                setmenuViewBreakfast1(true);
            }catch(err){
                console.log(err);
            }
        }
        

        //Breakfast2
        if(await AsyncStorage.getItem('Breakfasts02')){
            try{
                let itemData2 = await AsyncStorage.getItem('Breakfasts02');
                let parsedItem2 = JSON.parse(itemData2);
    
                setmenuBreakfast2(parsedItem2.menu);
                setpriceBreakfast2(parsedItem2.price);
                setquantityBreakfast2(parseInt(parsedItem2.quantity));
                setkeyBreakfast2(parsedItem2.key);

                setmenuViewBreakfast2(true);

            }catch(err){
                console.log(err);
            }
        }
        

        //Breakfast3
        if(await AsyncStorage.getItem('Breakfasts03')){
            try{
                let itemData3 = await AsyncStorage.getItem('Breakfasts03');
                let parsedItem3 = JSON.parse(itemData3);
    
                setmenuBreakfast3(parsedItem3.menu);
                setpriceBreakfast3(parsedItem3.price);
                setquantityBreakfast3(parseInt(parsedItem3.quantity));
                setkeyBreakfast3(parsedItem3.key);

                setmenuViewBreakfast3(true)

                console.log(itemData3)
            }catch(err){
                console.log(err);
            }
        }
        

        //Sandwich1
        if(await AsyncStorage.getItem('Sandwiches01')){
            try{
                let itemData4 = await AsyncStorage.getItem('Sandwiches01');
                let parsedItem4 = JSON.parse(itemData4);
    
                setmenuSandwich1(parsedItem4.menu);
                setpriceSandwich1(parsedItem4.price);
                setquantitySandwich1(parseInt(parsedItem4.quantity));
                setkeySandwich1(parsedItem4.key);

                setmenuViewSandwich1(true)
            }catch(err){
                console.log(err);
            }
        }
        

        //Sandwich2
        if(await AsyncStorage.getItem('Sandwiches02')){
            try{
                let itemData5 = await AsyncStorage.getItem('Sandwiches02');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuSandwich2(parsedItem5.menu);
                setpriceSandwich2(parsedItem5.price);
                setquantitySandwich2(parseInt(parsedItem5.quantity));
                setkeySandwich2(parsedItem5.key);

                setmenuViewSandwich2(true)
            }catch(err){
                console.log(err);
            }
        }


        //Sandwich3
        if(await AsyncStorage.getItem('Sandwiches03')){
            try{
                let itemData6 = await AsyncStorage.getItem('Sandwiches03');
                let parsedItem6 = JSON.parse(itemData6);
    
                setmenuSandwich3(parsedItem6.menu);
                setPriceSandwich3(parsedItem6.price);
                setquantitySandwich3(parseInt(parsedItem6.quantity));
                setkeySandwich3(parsedItem6.key);

                setmenuViewSandwich3(true)
            }catch(err){
                console.log(err);
            }
        }

        //Burger1
        if(await AsyncStorage.getItem('SpecialityBurgers01')){
            try{
                let itemData7 = await AsyncStorage.getItem('SpecialityBurgers01');
                let parsedItem7 = JSON.parse(itemData7);
    
                setmenuBurger1(parsedItem7.menu);
                setpriceBurger1(parsedItem7.price);
                setquantityBurger1(parseInt(parsedItem7.quantity));
                setkeyBurger1(parsedItem7.key);

                setmenuViewBurger1(true)
            }catch(err){
                console.log(err);
            }
        }


        //Burger2
        if(await AsyncStorage.getItem('SpecialityBurgers02')){
            try{
                let itemData8 = await AsyncStorage.getItem('SpecialityBurgers02');
                let parsedItem8 = JSON.parse(itemData8);
    
                setmenuBurger2(parsedItem8.menu);
                setpriceBurger2(parsedItem8.price);
                setquantityBurger2(parseInt(parsedItem8.quantity));
                setkeyBurger2(parsedItem8.key);

                setmenuViewBurger2(true)
            }catch(err){
                console.log(err);
            }
        }


        //Burger3
        if(await AsyncStorage.getItem('SpecialityBurgers03')){
            try{
                let itemData9 = await AsyncStorage.getItem('SpecialityBurgers03');
                let parsedItem9 = JSON.parse(itemData9);
    
                setmenuBurger3(parsedItem9.menu);
                setpriceBurger3(parsedItem9.price);
                setquantityBurger3(parseInt(parsedItem9.quantity));
                setkeyBurger3(parsedItem9.key);

                setmenuViewBurger3(true)
            }catch(err){
                console.log(err);
            }
        }

        //HotMeals1
        if(await AsyncStorage.getItem('HotMeals01')){
            try{
                let itemData10 = await AsyncStorage.getItem('HotMeals01')
                let parsedItem10 = JSON.parse(itemData10);
    
                setmenuHotMeal1(parsedItem10.menu);
                setpriceHotMeal1(parsedItem10.price);
                setquantityHotMeal1(parseInt(parsedItem10.quantity));
                setkeyHotMeal1(parsedItem10.key);

                setmenuViewHotMeals1(true);
            }catch(err){
                console.log(err);
            }
        }

        //HotMeal2
        if(await AsyncStorage.getItem('HotMeals02')){
            try{
                let itemData11 = await AsyncStorage.getItem('HotMeals02')
                let parsedItem11 = JSON.parse(itemData11);
    
                setmenuHotMeal2(parsedItem11.menu);
                setpriceHotMeal2(parsedItem11.price);
                setquantityHotMeal2(parseInt(parsedItem11.quantity));
                setkeyHotMeal2(parsedItem11.key);

                setmenuViewHotMeals2(true);
            }catch(err){
                console.log(err);
            }
        }

        //HotMeal3
        if(await AsyncStorage.getItem('HotMeals03')){
            try{
                let itemData12 = await AsyncStorage.getItem('HotMeals03')
                let parsedItem12 = JSON.parse(itemData12);
    
                setmenuHotMeal3(parsedItem12.menu);
                setpriceHotMeal3(parsedItem12.price);
                setquantityHotMeal3(parseInt(parsedItem12.quantity));
                setkeyHotMeal3(parsedItem12.key);

                setmenuViewHotMeals3(true);
            }catch(err){
                console.log(err);
            }
        }

        //Pizzas1
        if(await AsyncStorage.getItem('Pizzas01')){
            try{
                let itemData13 = await AsyncStorage.getItem('Pizzas01')
                let parsedItem13 = JSON.parse(itemData13);
    
                setmenuPizzas1(parsedItem13.menu);
                setpricePizzas1(parsedItem13.price);
                setquantityPizzas1(parseInt(parsedItem13.quantity));
                setkeyPizzas1(parsedItem13.key);

                setmenuViewPizzas1(true);
            }catch(err){
                console.log(err);
            }
        }

        //Pizzas2
        if(await AsyncStorage.getItem('Pizzas02')){
            try{
                let itemData14 = await AsyncStorage.getItem('Pizzas02')
                let parsedItem14 = JSON.parse(itemData14);
    
                setmenuPizzas2(parsedItem14.menu);
                setpricePizzas2(parsedItem14.price);
                setquantityPizzas2(parseInt(parsedItem14.quantity));
                setkeyPizzas2(parsedItem14.key);

                setmenuViewPizzas2(true);
            }catch(err){
                console.log(err);
            }
        }

        //Pizzas3
        if(await AsyncStorage.getItem('Pizzas03')){
            try{
                let itemData15 = await AsyncStorage.getItem('Pizzas03')
                let parsedItem15 = JSON.parse(itemData15);
    
                setmenuPizzas3(parsedItem15.menu);
                setpricePizzas3(parsedItem15.price);
                setquantityPizzas3(parseInt(parsedItem15.quantity));
                setkeyPizzas3(parsedItem15.key);

                setmenuViewPizzas3(true);
            }catch(err){
                console.log(err);
            }
        }

        //Salad1
        if(await AsyncStorage.getItem('Salads01')){
            try{
                let itemData16 = await AsyncStorage.getItem('Salads01')
                let parsedItem16 = JSON.parse(itemData16);
    
                setmenuSalad1(parsedItem16.menu);
                setpriceSalad1(parsedItem16.price);
                setquantitySalad1(parseInt(parsedItem16.quantity));
                setkeySalad1(parsedItem16.key);

                setmenuViewSalads1(true);
            }catch(err){
                console.log(err);
            }
        }

        //Salad2
        if(await AsyncStorage.getItem('Salads02')){
            try{
                let itemData17 = await AsyncStorage.getItem('Salads02')
                let parsedItem17 = JSON.parse(itemData17);
    
                setmenuSalad2(parsedItem17.menu);
                setpriceSalad2(parsedItem17.price);
                setquantitySalad2(parseInt(parsedItem17.quantity));
                setkeySalad2(parsedItem17.key);

                setmenuViewSalads2(true);
            }catch(err){
                console.log(err);
            }
        }

        //Salad3
        if(await AsyncStorage.getItem('Salads03')){
            try{
                let itemData18 = await AsyncStorage.getItem('Salads03')
                let parsedItem18 = JSON.parse(itemData18);
    
                setmenuSalad3(parsedItem18.menu);
                setpriceSalad3(parsedItem18.price);
                setquantitySalad3(parseInt(parsedItem18.quantity));
                setkeySalad3(parsedItem18.key);

                setmenuViewSalads3(true);
            }catch(err){
                console.log(err);
            }
        }

        //Drink1
        if(await AsyncStorage.getItem('drinks01')){
            try{
                let itemData19 = await AsyncStorage.getItem('drinks01')
                let parsedItem19 = JSON.parse(itemData19);
    
                setmenuDrink1(parsedItem19.menu);
                setpriceDrink1(parsedItem19.price);
                setquantityDrink1(parseInt(parsedItem19.quantity));
                setkeyDrink1(parsedItem19.key);

                setmenuViewDrink1(true);
            }catch(err){
                console.log(err);
            }
        }
        //Drink3
        if(await AsyncStorage.getItem('drinks02')){
            try{
                let itemData20 = await AsyncStorage.getItem('drinks02')
                let parsedItem20 = JSON.parse(itemData20);
    
                setmenuDrink2(parsedItem20.menu);
                setpriceDrink2(parsedItem20.price);
                setquantityDrink2(parseInt(parsedItem20.quantity));
                setkeyDrink2(parsedItem20.key);

                setmenuViewDrink2(true);
            }catch(err){
                console.log(err);
            }
        }
        //Drink3
        if(await AsyncStorage.getItem('drinks03')){
            try{
                let itemData21 = await AsyncStorage.getItem('drinks03')
                let parsedItem21 = JSON.parse(itemData21);
    
                setmenuDrink3(parsedItem21.menu);
                setpriceDrink3(parsedItem21.price);
                setquantityDrink3(parseInt(parsedItem21.quantity));
                setkeyDrink3(parsedItem21.key);

                setmenuViewDrink3(true);
            }catch(err){
                console.log(err);
            }
        }
        
    }

    

    const decreaseBreakfast1Quantity = () =>{
        setquantityBreakfast1(quantityBreakfast1 - 1)
    }
    const increaseBreakfast1Quantity = () =>{
        setquantityBreakfast1(quantityBreakfast1 + 1)
    }

    const decreaseBreakfast2Quantity = () =>{
        setquantityBreakfast2(quantityBreakfast1 - 1)
    }
    const increaseBreakfast2Quantity = () =>{
        setquantityBreakfast2(quantityBreakfast1 + 1)
    }


    const clearCart = async() =>{
        await AsyncStorage.clear();
        emptyCartAlert()
    }
    
    const removeFromCart = async(key) =>{
        await AsyncStorage.removeItem(toString(key));

        setmenuViewBreakfast1(false);
        setmenuViewBreakfast2(false);
        setmenuViewBreakfast3(false);
    }

    const toCheckout = async() =>{
        if(menuViewBreakfast1 !== true & menuViewBreakfast2 !== true & menuViewBreakfast3 !== true & menuViewBurger1 !== true & menuViewBurger2 !== true & menuViewBurger3 !== true & menuSandwich1 !== true & menuViewSandwich2 !== true & menuViewSandwich3 !== true & menuViewSalads1 !== true & menuViewSalads2 !== true & menuViewSalads3 !== true & menuViewHotMeals1 !== true & menuViewHotMeals2 !== true & menuViewHotMeals3 !== true & menuViewPizzas1 !== true & menuViewPizzas2 !== true & menuViewPizzas3 !== true & menuViewDrink1 !== true & menuViewDrink2 !== true & menuViewDrink3 !== true){
            console.log("empty cart");
            emptyCartAlert();
        }else{
            await AsyncStorage.setItem('allPrices', JSON.stringify(allPrices));
            navigation.navigate('Location')
        }
    }

    const goToMenu = () =>{
        navigation.navigate('Main');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.headField}>
                <Text style={styles.menuTextHead}>
                    Cart
                </Text>
                <TouchableOpacity
                    style={styles.clearCartButton}
                    onPress={clearCart}
                >
                    <Text style={styles.clearCartText}>
                        Clear all
                    </Text>
                </TouchableOpacity>
            </View>
            
            <ScrollView>
                {menuViewBreakfast1 ?
                    <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuBreakfast1}
                            </Text>
                            <TouchableOpacity
                                style={styles.removeIcon}
                                onPress={(keyBreakfast1) => {
                                    removeFromCart(keyBreakfast1),
                                    setmenuViewBreakfast1()
                                }}
                            >
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceBreakfast1}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast1) =>decreaseBreakfast1Quantity(quantityBreakfast1)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityBreakfast1}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast1) =>increaseBreakfast1Quantity(quantityBreakfast1)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }
            



            
            {menuViewBreakfast2 ?
                <View style={styles.menuContainer}>
                    <View style={styles.menuNameField}>
                        <Text style={styles.menuName}>
                            {menuBreakfast2}
                        </Text>
                        <TouchableOpacity style={styles.removeIcon}>
                            <FontAwesome
                                name='close'
                                size={30}
                                color='#000000'
                                selectionColor='#FFFFFF'
                                accessibilityIgnoresInvertColors={true}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.menuIngredients}>
                            {/* {Added to cart } */}
                            Added to cart
                        </Text>
                    </View>

                    <View style={styles.priceField}>
                        <Text style={styles.menuPrice}>
                            {priceBreakfast2}
                        </Text>
                        <View style={styles.quantityField}>
                            <Text
                                style={styles.decrease}
                                onPress={(quantityBreakfast2) =>decreaseBreakfast2Quantity(quantityBreakfast2)}
                            >
                                -
                            </Text>
                            <Text
                                style={styles.quantityNumber}
                            >
                                {quantityBreakfast2}
                            </Text>
                            <Text
                                style={styles.increase}
                                onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                            >
                                +
                            </Text>
                        </View>
                    </View>
                </View>
                : null
            }
            



            {menuViewBreakfast3 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuBreakfast3}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceBreakfast3}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityBreakfast3}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }



            {menuViewSandwich1 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuSandwich1}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceSandwich2}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantitySandwich1}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }


            {menuViewSandwich2 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuSandwich2}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceSandwich2}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantitySandwich2}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }


            {menuViewSandwich3 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuSandwich3}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceSandwich3}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantitySandwich3}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }


            {menuViewBurger1 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuBurger1}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceBurger1}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityBurger1}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewBurger2 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuBurger2}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceBurger2}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityBurger2}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewBurger3 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuBurger3}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceBurger3}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityBurger3}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewHotMeals1 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuHotMeal1}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceHotMeal1}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityHotMeal1}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewHotMeals2 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuHotMeal2}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceHotMeal2}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityHotMeal2}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewHotMeals3 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuHotMeal3}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceHotMeal3}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityHotMeal3}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewPizzas1 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuPizzas1}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {pricePizzas1}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityPizzas1}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewPizzas2 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuPizzas2}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {pricePizzas2}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityPizzas2}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewPizzas3 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuPizzas3}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {pricePizzas3}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityPizzas3}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewSalads1 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuSalad1}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceSalad1}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantitySalad1}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewSalads2 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuSalad2}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceSalad2}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantitySalad2}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewSalads3 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuSalad3}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceSalad3}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantitySalad3}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }


            {menuViewDrink1 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuDrink1}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceDrink1}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityDrink1}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewDrink2 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuDrink2}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceDrink2}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityDrink2}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewDrink3 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuDrink3}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceDrink3}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityDrink3}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }
            </ScrollView>
            <View style={styles.addContainer}>
                <TouchableOpacity
                    style={styles.addWraper}
                    onPress={goToMenu}
                >
                    <Text style={styles.AddText}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.proceedButton}
                onPress={toCheckout}
            >
                <Text style={styles.proceedText}>
                    Proceed to checkout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    headField:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10
    },
    menuTextHead:{
        fontSize:25,
        fontWeight:'bold',
    },
    clearCartText:{
        color:'#F2651C',
        marginVertical:10,
        fontSize:15
    },
    menuContainer:{
        marginVertical:5,
        marginHorizontal:10,
        backgroundColor:'#FFFFFF',
        borderWidth:0.5,
        borderColor:'#FFFFFF',
        borderRadius:20,
    },
    menuNameField:{
        flexDirection:'row'
    },
    menuName:{
        marginVertical:5,
        marginLeft:70,
        fontWeight:'bold',
        fontSize: 20,
        color: '#000000'
    },
    removeIcon:{
        marginHorizontal:20
    },
    menuIngredients:{
        alignSelf:'center',
        textAlign:'center',
        marginHorizontal:5,
        fontSize:15,
        color:"#5e5e5e",
    },
    menuPrice:{
        marginVertical:2,
        fontSize:20,
        color:'#000000',
        fontWeight:'bold',
        marginLeft:10
    },
    priceField:{
        marginHorizontal:10,
        flexDirection:'row',
        alignContent:'space-between',
    },
    quantityField:{
        flexDirection:'row',
        marginLeft:125,
        backgroundColor:'#F2651C',
        borderRadius:15,
        marginBottom:10
    },
    quantityNumber:{
        color:'#FFFFFF',
        fontSize:30,
        marginHorizontal:20,
        fontWeight:'bold',
    },
    decrease:{
        paddingHorizontal:5,
        color:'#FFFFFF',
        fontSize:25,
    },
    increase:{
        paddingHorizontal:5,
        color:'#FFFFFF',
        fontSize:25
    },
    confirmButton:{
        marginTop:50
    },
    proceedButton:{
        marginVertical:20,
        alignSelf:'center',
        marginTop:20,
        backgroundColor:'#F2651C',
        width:320,
        height:40,
        borderRadius:30,
        alignItems:'center'
    },
    proceedText:{
        marginVertical:7.5,
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'bold'
    },
    addContainer:{
        marginLeft:10
    },
    AddText:{
        color:'#F2651C',
        fontSize:15
    }
})
