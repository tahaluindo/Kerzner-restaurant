import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, LogBox } from 'react-native'
import * as LocationLibrary from 'expo-location';
import * as Permissions from 'expo-permissions';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {FontAwesome5} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import * as firebase from 'firebase';
import 'firebase/database';

const Location = () => {
    const navigation = useNavigation();

    const auth = firebase.default.auth().currentUser;

    const [currentDate, setCurrentDate] = useState('');

    const [deliveryOption, setDeliveryOption] = useState(0);
    const [paymentOption, setPaymentOption] = useState(0);

    const [orderType, setOrderType] = useState('PICKUP');

    const [addrInfo, setAddrInfo] = useState("N/A");

    const [ latitudeVal, setLatitude ] = useState(0);
    const [ longitudeVal, setLongitude ] = useState(0);

    const [orderStatus, setOrderStatus] = useState(false);

    let priceVar = 0;

    //Breakfasts
    const [breakfast1Status, setBreakfast1Status] = useState();
    const [menuBreakfast1, setmenuBreakfast1] = useState("");
    const [priceBreakfast1, setpriceBreakfast1] = useState("")
    const [quantityBreakfast1, setquantityBreakfast1] = useState("")
    const [keyBreakfast1, setkeyBreakfast1] = useState("")

    const [breakfast2Status, setBreakfast2Status] = useState();
    const [menuBreakfast2, setmenuBreakfast2] = useState("");
    const [priceBreakfast2, setpriceBreakfast2] = useState("")
    const [quantityBreakfast2, setquantityBreakfast2] = useState("")
    const [keyBreakfast2, setkeyBreakfast2] = useState("")

    const [breakfast3Status, setBreakfast3Status] = useState();
    const [menuBreakfast3, setmenuBreakfast3] = useState("");
    const [priceBreakfast3, setpriceBreakfast3] = useState("")
    const [quantityBreakfast3, setquantityBreakfast3] = useState("")
    const [keyBreakfast3, setkeyBreakfast3] = useState("")

    //Sandwiches
    const [sandwich1Status, setSandwich1Status] = useState();
    const [menuSandwich1, setmenuSandwich1] = useState("");
    const [priceSandwich1, setpriceSandwich1] = useState("")
    const [quantitySandwich1, setquantitySandwich1] = useState("")
    const [keySandwich1, setkeySandwich1] = useState("")

    const [sandwich2Status, setSandwich2Status] = useState();
    const [menuSandwich2, setmenuSandwich2] = useState("");
    const [priceSandwich2, setpriceSandwich2] = useState("")
    const [quantitySandwich2, setquantitySandwich2] = useState("")
    const [keySandwich2, setkeySandwich2] = useState("")

    const [sandwich3Status, setSandwich3Status] = useState();
    const [menuSandwich3, setmenuSandwich3] = useState("");
    const [priceSandwich3, setpriceSandwich3] = useState("")
    const [quantitySandwich3, setquantitySandwich3] = useState("")
    const [keySandwich3, setkeySandwich3] = useState("")

    //Burgers
    const [burger1Status, setBurger1Status] = useState();
    const [menuBurger1, setmenuBurger1] = useState("");
    const [priceBurger1, setpriceBurger1] = useState("")
    const [quantityBurger1, setquantityBurger1] = useState("")
    const [keyBurger1, setkeyBurger1] = useState("")

    const [burger2Status, setBurger2Status] = useState();
    const [menuBurger2, setmenuBurger2] = useState("");
    const [priceBurger2, setpriceBurger2] = useState("")
    const [quantityBurger2, setquantityBurger2] = useState("")
    const [keyBurger2, setkeyBurger2] = useState("")

    const [burger3Status, setBurger3Status] = useState();
    const [menuBurger3, setmenuBurger3] = useState("");
    const [priceBurger3, setpriceBurger3] = useState("")
    const [quantityBurger3, setquantityBurger3] = useState("")
    const [keyBurger3, setkeyBurger3] = useState("")

    //Pizzas
    const [pizza1Status, setPizza1Status] = useState();
    const [menuPizza1, setmenuPizza1] = useState("");
    const [pricePizza1, setpricePizza1] = useState("")
    const [quantityPizza1, setquantityPizza1] = useState("")
    const [keyPizza1, setkeyPizza1] = useState("")

    const [pizza2Status, setPizza2Status] = useState();
    const [menuPizza2, setmenuPizza2] = useState("");
    const [pricePizza2, setpricePizza2] = useState("")
    const [quantityPizza2, setquantityPizza2] = useState("")
    const [keyPizza2, setkeyPizza2] = useState("")

    const [pizza3Status, setPizza3Status] = useState();
    const [menuPizza3, setmenuPizza3] = useState("");
    const [pricePizza3, setpricePizza3] = useState("")
    const [quantityPizza3, setquantityPizza3] = useState("")
    const [keyPizza3, setkeyPizza3] = useState("")

    //HotMeals
    const [hotMeal1Status, setHotMeal1Status] = useState(true);
    const [menuHotMeal1, setmenuHotMeal1] = useState("");
    const [priceHotMeal1, setpriceHotMeal1] = useState("")
    const [quantityHotMeal1, setquantityHotMeal1] = useState("")
    const [keyHotMeal1, setkeyHotMeal1] = useState("")

    const [hotMeal2Status, setHotMeal2Status] = useState();
    const [menuHotMeal2, setmenuHotMeal2] = useState("");
    const [priceHotMeal2, setpriceHotMeal2] = useState("")
    const [quantityHotMeal2, setquantityHotMeal2] = useState("")
    const [keyHotMeal2, setkeyHotMeal2] = useState("")

    //Salads
    const [salad1Status, setSalad1Status] = useState();
    const [menuSalad1, setmenuSalad1] = useState("");
    const [priceSalad1, setpriceSalad1] = useState("")
    const [quantitySalad1, setquantitySalad1] = useState("")
    const [keySalad1, setkeySalad1] = useState("")

    const [salad2Status, setSalad2Status] = useState();
    const [menuSalad2, setmenuSalad2] = useState("");
    const [priceSalad2, setpriceSalad2] = useState("")
    const [quantitySalad2, setquantitySalad2] = useState("")
    const [keySalad2, setkeySalad2] = useState("")

    const [salad3Status, setSalad3Status] = useState();
    const [menuSalad3, setmenuSalad3] = useState("");
    const [priceSalad3, setpriceSalad3] = useState("")
    const [quantitySalad3, setquantitySalad3] = useState("")
    const [keySalad3, setkeySalad3] = useState("")

    // //Drinks
    // const [menuDrink1, setmenuDrink1] = useState("");
    // const [priceDrink1, setpriceDrink1] = useState("")
    // const [quantityDrink1, setquantityDrink1] = useState("")
    // const [keyDrink1, setkeyDrink1] = useState("")

    // const [menuDrink2, setmenuDrink2] = useState("");
    // const [priceDrink2, setpriceDrink2] = useState("")
    // const [quantityDrink2, setquantityDrink2] = useState("")
    // const [keyDrink2, setkeyDrink2] = useState("")

    // const [menuDrink3, setmenuDrink3] = useState("");
    // const [priceDrink3, setpriceDrink3] = useState("")
    // const [quantityDrink3, setquantityDrink3] = useState("")
    // const [keyDrink3, setkeyDrink3] = useState("")




    const [finalPriceVar, setFinalPriceVar] = useState();

    //RADIO BUTTON PROPS
    var radio_delivery_props = [
        {label:  'Pick up', value: 0},
        {label: 'Delivery', value: 1}
    ];
    var radio_payment_props = [
        {label:
            <View style={styles.optionIconContainer}>
                <FontAwesome5
                    style={styles.optionIcon}
                    name='credit-card'
                    size={30}
                    color='#F2651C'
                    selectionColor='#FFFFFF'
                    accessibilityIgnoresInvertColors={true}
                />
                <Text style={styles.optionText}>
                    Card on delivery
                </Text>
            </View>,
            value: 0
        },

        {label:
            <View style={styles.optionIconContainer}>
                <FontAwesome5
                    style={styles.optionIcon}
                    name='wallet'
                    size={32}
                    color='#F2651C'
                    selectionColor='#FFFFFF'
                    accessibilityIgnoresInvertColors={true}
                />
                <Text style={styles.optionText}>
                    Cash
                </Text>
            </View>,
            value: 1
        },
    ];

    const updatePaymentOption = (value) =>{
        setPaymentOption(value);
        console.log("payment option:", paymentOption)
    }

    const updateDeliveryOption = (value) =>{
        setDeliveryOption(value);
        
        if(deliveryOption == 0){
            setOrderType("DELIVERY");
        }

        console.log("delivery option:", deliveryOption)
    };

    const fetchPrices = async() =>{
        let stringifyPrices = await AsyncStorage.getItem('allPrices');
        let parsedPrices = JSON.parse(stringifyPrices);

        let breakfastStringPrice1 = (parsedPrices.finalPriceBreakfast1).substring(1);
        let breakfastIntPrice1 = parseInt(breakfastStringPrice1);

        let breakfastStringPrice2 = (parsedPrices.finalPriceBreakfast2).substring(1);
        let breakfastIntPrice2 = parseInt(breakfastStringPrice2);

        let breakfastStringPrice3 = (parsedPrices.finalPriceBreakfast3).substring(1);
        let breakfastIntPrice3 = parseInt(breakfastStringPrice3);



        let sandwichStringPrice1 = (parsedPrices.finalPriceSandwich1).substring(1);
        let sandwichIntPrice1 = parseInt(sandwichStringPrice1);

        let sandwichStringPrice2 = (parsedPrices.finalPriceSandwich2).substring(1);
        let sandwichIntPrice2 = parseInt(sandwichStringPrice2);

        let sandwichStringPrice3 = (parsedPrices.finalPriceSandwich3).substring(1);
        let sandwichIntPrice3 = parseInt(sandwichStringPrice3);



        let burgerStringPrice1 = (parsedPrices.finalPriceBurger1).substring(1);
        let burgerIntPrice1 = parseInt(burgerStringPrice1);

        let burgerStringPrice2 = (parsedPrices.finalPriceBurger2).substring(1);
        let burgerIntPrice2 = parseInt(burgerStringPrice2);

        let burgerStringPrice3 = (parsedPrices.finalPriceBurger3).substring(1);
        let burgerIntPrice3 = parseInt(burgerStringPrice3);
        


        let pizzaStringPrice1 = (parsedPrices.finalPricePizzas1).substring(1);
        let pizzaIntPrice1 = parseInt(pizzaStringPrice1);

        let pizzaStringPrice2 = (parsedPrices.finalPricePizzas2).substring(1);
        let pizzaIntPrice2 = parseInt(pizzaStringPrice2);

        let pizzaStringPrice3 = (parsedPrices.finalPricePizzas3).substring(1);
        let pizzaIntPrice3 = parseInt(pizzaStringPrice3);


        let hotMealStringPrice1 = (parsedPrices.finalPriceHotMeals1).substring(1);
        let hotMealIntPrice1 = parseInt(hotMealStringPrice1);

        let hotMealStringPrice2 = (parsedPrices.finalPriceHotMeals2).substring(1);
        let hotMealIntPrice2 = parseInt(hotMealStringPrice2);


        let saladStringPrice1 = (parsedPrices.finalPriceSalads1).substring(1);
        let saladIntPrice1 = parseInt(saladStringPrice1);

        let saladStringPrice2 = (parsedPrices.finalPriceSalads2).substring(1);
        let saladIntPrice2 = parseInt(saladStringPrice2);

        let saladStringPrice3 = (parsedPrices.finalPriceSalads3).substring(1);
        let saladIntPrice3 = parseInt(saladStringPrice3);



        if(breakfastIntPrice1 > 0){
            priceVar = priceVar+breakfastIntPrice1
        }
        if(breakfastIntPrice2 > 0){
            priceVar = priceVar+breakfastIntPrice2
        }
        if(breakfastIntPrice3 > 0){
            priceVar = priceVar+breakfastIntPrice3
        }


        if(sandwichIntPrice1 > 0){
            priceVar = priceVar+sandwichIntPrice1
        }
        if(sandwichIntPrice2 > 0){
            priceVar = priceVar+sandwichIntPrice2
        }
        if(sandwichIntPrice3 > 0){
            priceVar = priceVar+sandwichIntPrice3
        }


        if(burgerIntPrice1 > 0){
            priceVar = priceVar+burgerIntPrice1
        }
        if(burgerIntPrice2 > 0){
            priceVar = priceVar+burgerIntPrice2
        }
        if(burgerIntPrice3 > 0){
            priceVar = priceVar+burgerIntPrice3
        }


        if(pizzaIntPrice1 > 0){
            priceVar = priceVar+pizzaIntPrice1
        }
        if(pizzaIntPrice2 > 0){
            priceVar = priceVar+pizzaIntPrice2
        }
        if(pizzaIntPrice3 > 0){
            priceVar = priceVar+pizzaIntPrice3
        }


        if(hotMealIntPrice1 > 0){
            priceVar = priceVar+hotMealIntPrice1
        }
        if(hotMealIntPrice2 > 0){
            priceVar = priceVar+hotMealIntPrice2
        }


        if(saladIntPrice1 > 0){
            priceVar = priceVar+saladIntPrice1
        }
        if(saladIntPrice2 > 0){
            priceVar = priceVar+saladIntPrice2
        }
        if(saladIntPrice3 > 0){
            priceVar = priceVar+saladIntPrice3
        }


        console.log("Total price : ", priceVar)
        setFinalPriceVar(priceVar)
    }

    const currentLocationAlert = () =>{
        Alert.alert(
            "TheKerzner@UJ",
            "Deliver to current location?",
            [
                {
                    text: "Yes",
                    onPress: () =>{
                        pushOrder()
                        successOrder()
                    }
                },
                {
                    text: "Set location",
                    onPress: () =>
                        navigation.navigate('LocationInfo')
                }
            ],
            { cancelable: false }
        );
    };
    
    const proceedToNav = () =>{
        Alert.alert(
            "TheKerzner@UJ",
            "Your order has been successfully recieved. Proceed to navigation options",
            [
                {
                    text: "No, thank you",
                    onPress: () =>{
                        clearOrders(),
                        navigation.navigate('Main')
                    }
                },
                {
                    text: "Proceed",
                    onPress: () =>
                        navigation.navigate('PickupOptions')
                }
            ],
            { cancelable: false }
        );
    };

    const cardPickupWarn = () =>{
        Alert.alert(
            "TheKerzner@UJ",
            "The Pick Up delivery method cannot be paid with Card On Delivery",
            [
                {
                    text: "Okay",
                    onPress: () =>
                        null
                }
            ],
            { cancelable: false }
        );
    };

    const clearOrders = async() =>{
        await AsyncStorage.clear();
    };

    const successOrder = () =>{
        Alert.alert(
            "TheKerzner@UJ",
            "Your order has been successfully recieved and you will be notified when it arrives.",
            [
                {
                    text: "Return to menu",
                    onPress: () =>{
                        clearOrders(),
                        navigation.navigate('Main')
                    }
                }
            ],
            { cancelable: false }
        );
    };


    const fetchOrders = async() =>{
         //Breakfast1
         if(await AsyncStorage.getItem('Breakfasts01')){
            setBreakfast1Status(true);
            try{
                let itemData1 = await AsyncStorage.getItem('Breakfasts01')
                let parsedItem1 = JSON.parse(itemData1);
    
                setmenuBreakfast1(parsedItem1.menu);
                setpriceBreakfast1(parsedItem1.price);
                setquantityBreakfast1(parseInt(parsedItem1.quantity));
                setkeyBreakfast1(parsedItem1.key);
            }catch(err){
                console.log(err);
            }
        }
        

        //Breakfast2
        if(await AsyncStorage.getItem('Breakfasts02')){
            setBreakfast2Status(true);
            try{
                let itemData2 = await AsyncStorage.getItem('Breakfasts02');
                let parsedItem2 = JSON.parse(itemData2);
    
                setmenuBreakfast2(parsedItem2.menu);
                setpriceBreakfast2(parsedItem2.price);
                setquantityBreakfast2(parseInt(parsedItem2.quantity));
                setkeyBreakfast2(parsedItem2.key);
            }catch(err){
                console.log(err);
            }
        }
        

        //Breakfast3
        if(await AsyncStorage.getItem('Breakfasts03')){
            setBreakfast3Status(true);
            try{
                let itemData3 = await AsyncStorage.getItem('Breakfasts03');
                let parsedItem3 = JSON.parse(itemData3);
    
                setmenuBreakfast3(parsedItem3.menu);
                setpriceBreakfast3(parsedItem3.price);
                setquantityBreakfast3(parseInt(parsedItem3.quantity));
                setkeyBreakfast3(parsedItem3.key);
            }catch(err){
                console.log(err);
            }
        }
        

        //Sandwich1
        if(await AsyncStorage.getItem('Sandwiches01')){
            setSandwich1Status(true);
            try{
                let itemData4 = await AsyncStorage.getItem('Sandwiches01');
                let parsedItem4 = JSON.parse(itemData4);
    
                setmenuSandwich1(parsedItem4.menu);
                setpriceSandwich1(parsedItem4.price);
                setquantitySandwich1(parseInt(parsedItem4.quantity));
                setkeySandwich1(parsedItem4.key);
            }catch(err){
                console.log(err);
            }
        }
        

        //Sandwich2
        if(await AsyncStorage.getItem('Sandwiches02')){
            setSandwich2Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('Sandwiches02');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuSandwich2(parsedItem5.menu);
                setpriceSandwich2(parsedItem5.price);
                setquantitySandwich2(parseInt(parsedItem5.quantity));
                setkeySandwich2(parsedItem5.key);
            }catch(err){
                console.log(err);
            }
        }


        //Sandwich3
        if(await AsyncStorage.getItem('Sandwiches03')){
            setSandwich3Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('Sandwiches03');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuSandwich3(parsedItem5.menu);
                setpriceSandwich3(parsedItem5.price);
                setquantitySandwich3(parseInt(parsedItem5.quantity));
                setkeySandwich3(parsedItem5.key);
            }catch(err){
                console.log(err);
            }
        }

        //Burger1
        if(await AsyncStorage.getItem('SpecialityBurgers01')){
            setBurger1Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('SpecialityBurgers01');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuBurger1(parsedItem5.menu);
                setpriceBurger1(parsedItem5.price);
                setquantityBurger1(parseInt(parsedItem5.quantity));
                setkeyBurger1(parsedItem5.key);
            }catch(err){
                console.log(err);
            }
        }


        //Burger2
        if(await AsyncStorage.getItem('SpecialityBurgers02')){
            setBurger2Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('SpecialityBurgers02');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuBurger2(parsedItem5.menu);
                setpriceBurger2(parsedItem5.price);
                setquantityBurger2(parseInt(parsedItem5.quantity));
                setkeyBurger2(parsedItem5.key);
            }catch(err){
                console.log(err);
            }
        }


        //Burger3
        if(await AsyncStorage.getItem('SpecialityBurgers03')){
            setBurger3Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('SpecialityBurgers03');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuBurger3(parsedItem5.menu);
                setpriceBurger3(parsedItem5.price);
                setquantityBurger3(parseInt(parsedItem5.quantity));
                setkeyBurger3(parsedItem5.key);
            }catch(err){
                console.log(err);
            }
        }


        //Pizza1
        if(await AsyncStorage.getItem('Pizzas01')){
            setPizza1Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('Pizzas01');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuPizza1(parsedItem5.menu);
                setpricePizza1(parsedItem5.price);
                setquantityPizza1(parseInt(parsedItem5.quantity));
                setkeyPizza1(parsedItem5.key);
            }catch(err){
                console.log(err);
            }
        }


        //Pizza2
        if(await AsyncStorage.getItem('Pizzas02')){
            setPizza2Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('Pizzas02');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuPizza2(parsedItem5.menu);
                setpricePizza2(parsedItem5.price);
                setquantityPizza2(parseInt(parsedItem5.quantity));
                setkeyPizza2(parsedItem5.key);
            }catch(err){
                console.log(err);
            }
        }


        //Pizza3
        if(await AsyncStorage.getItem('Pizzas03')){
            setPizza3Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('Pizzas03');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuPizza3(parsedItem5.menu);
                setpricePizza3(parsedItem5.price);
                setquantityPizza3(parseInt(parsedItem5.quantity));
                setkeyPizza3(parsedItem5.key);
            }catch(err){
                console.log(err);
            }
        }


        //HotMeal1
        if(await AsyncStorage.getItem('HotMeals01')){
            setHotMeal1Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('HotMeals01');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuHotMeal1(parsedItem5.menu);
                setpriceHotMeal1(parsedItem5.price);
                setquantityHotMeal1(parseInt(parsedItem5.quantity));
                setkeyHotMeal1(parsedItem5.key);

            }catch(err){
                console.log(err);
            }
            console.log(quantityHotMeal1)
        }


        //HotMeal2
        if(await AsyncStorage.getItem('HotMeals02')){
            setHotMeal2Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('HotMeals02');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuHotMeal2(parsedItem5.menu);
                setpriceHotMeal2(parsedItem5.price);
                setquantityHotMeal2(parseInt(parsedItem5.quantity));
                setkeyHotMeal2(parsedItem5.key);

            }catch(err){
                console.log(err);
            }
        }


        //Salad1
        if(await AsyncStorage.getItem('Salads01')){
            setSalad1Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('Salads01');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuSalad1(parsedItem5.menu);
                setpriceSalad1(parsedItem5.price);
                setquantitySalad1(parseInt(parsedItem5.quantity));
                setkeySalad1(parsedItem5.key);
            }catch(err){
                console.log(err);
            }
        }


        //Salad2
        if(await AsyncStorage.getItem('Salads02')){
            setSalad2Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('Salads02');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuSalad2(parsedItem5.menu);
                setpriceSalad2(parsedItem5.price);
                setquantitySalad2(parseInt(parsedItem5.quantity));
                setkeySalad2(parsedItem5.key);

            }catch(err){
                console.log(err);
            }
        }


        //Salad3
        if(await AsyncStorage.getItem('Salads03')){
            setSalad3Status(true);
            try{
                let itemData5 = await AsyncStorage.getItem('Salads03');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuSalad3(parsedItem5.menu);
                setpriceSalad3(parsedItem5.price);
                setquantitySalad3(parseInt(parsedItem5.quantity));
                setkeySalad3(parsedItem5.key);

            }catch(err){
                console.log(err);
            }
        }
    }


    const fetchLocation = async() =>{
        await LocationLibrary.requestPermissionsAsync();
        let locationStatus = await Permissions.getAsync(Permissions.LOCATION);
        if(locationStatus.status === 'granted'){
            console.log('location granted')
        }

        let location = await LocationLibrary.getCurrentPositionAsync({enableHighAccuracy: true});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude)
        console.log("longitude:",longitudeVal, "\n", "latitude:", latitudeVal)
    }

    //PUSH TO FIREBASE
    const pushOrder = () =>{
        fetchLocation();
        status();
    }

    const finishOrder = () =>{
        if(paymentOption == 0){
            console.log('card payment');
            if(deliveryOption == 0){
                console.log('pick up');
                cardPickupWarn();
            }else{
                console.log('delivery');
                currentLocationAlert()
            }
        }else{
            console.log('cash payment')

            if(deliveryOption == 0){
                console.log('pick up');
                
                pushOrder();
                proceedToNav();

                console.log(auth.email)
            }else{
                console.log('Delivery');
                currentLocationAlert();
                

                console.log(auth.email)
            }
        }
    }

    const status = () =>{
        if(breakfast1Status==true||breakfast3Status==true||breakfast2Status==true||
        pizza1Status==true||pizza2Status==true||pizza3Status==true||
        salad1Status==true||salad2Status==true||salad3Status==true||
        burger1Status==true||burger2Status==true||burger3Status==true||
        hotMeal1Status==true||hotMeal2Status==true||
        sandwich1Status==true||sandwich2Status==true||sandwich3Status==true)
        {
            setOrderStatus(true);
            finalOrder();
        }
    }
    const finalOrder = () =>{
        if(orderStatus == true){
            try {
                firebase
                .default
                .database()
                .ref('orders/' + auth.displayName)
                .update({
                    email_addr : auth.email,

                    order_menu : "/"+menuBreakfast1+"/"+menuBreakfast2+"/"+menuBreakfast3+
                                "/"+menuBurger1+"/"+menuBurger2+"/"+menuBurger3+
                                "/"+menuHotMeal1+"/"+menuHotMeal2+
                                "/"+menuPizza1+"/"+menuPizza2+"/"+menuPizza3+
                                "/"+menuSalad1+"/"+menuSalad2+"/"+menuSalad3+
                                "/"+menuSandwich1+"/"+menuSandwich2+"/"+menuSandwich3+"/",

                    order_quantity : "/"+quantityBreakfast1+"/"+quantityBreakfast2+"/"+quantityBreakfast3+
                                "/"+quantityBurger1+"/"+quantityBurger2+"/"+quantityBurger3+
                                "/"+quantityHotMeal1+"/"+quantityHotMeal2+
                                "/"+quantityPizza1+"/"+quantityPizza2+"/"+quantityPizza3+
                                "/"+quantitySalad1+"/"+quantitySalad2+"/"+quantitySalad3+
                                "/"+quantitySandwich1+"/"+quantitySandwich2+"/"+quantitySandwich3+"/",

                    order_price : "/"+priceBreakfast1+"/"+priceBreakfast2+"/"+priceBreakfast3+
                                "/"+priceBurger1+"/"+priceBurger2+"/"+priceBurger3+
                                "/"+priceHotMeal1+"/"+priceHotMeal2+
                                "/"+pricePizza1+"/"+pricePizza2+"/"+pricePizza3+
                                "/"+priceSalad1+"/"+priceSalad2+"/"+priceSalad3+
                                "/"+priceSandwich1+"/"+priceSandwich2+"/"+priceSandwich3+"/",

                    total_order_price : "R "+priceVar+".00",

                    order_type : orderType,

                    location_latitude : latitudeVal,
                    location_longitude : longitudeVal,

                    location_info : addrInfo,

                    order_ref : auth.uid +" "+currentDate
                });
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() =>{
        LogBox.ignoreAllLogs();

        fetchOrders();
        fetchPrices();

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1; 
        var year = new Date().getFullYear(); 
        var hours = new Date().getHours(); 
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds(); 
        setCurrentDate(
            date + '/' + month + '/' + year 
            + ' ' + hours + ':' + min + ':' + sec
        );
    })

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <View style={styles.checkOutTextContainer}>
                    <Text style={styles.checkoutText}>
                        Checkout
                    </Text>
                </View>

                <View style={styles.methodContainer}>
                    <Text style={styles.methodText}>
                        Delivery method
                    </Text>
                </View>
                <View style={styles.optionsContainer}>
                    <RadioForm
                        style={styles.radioOptions}
                        radio_props={radio_delivery_props}
                        initial={0}
                        onPress={(value) => {updateDeliveryOption(value)}}
                    />
                </View>
                <View style={styles.methodContainer}>
                    <Text style={styles.methodText}>
                        Payment method
                    </Text>
                </View>
                <View style={styles.optionsContainer2}>
                    <RadioForm
                        style={styles.radioOptions}
                        radio_props={radio_payment_props}
                        initial={0}
                        onPress={(value) => {updatePaymentOption(value)}}
                    />
                </View>
            </ScrollView>
            <View style={styles.bottomPart}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>
                        Total
                    </Text>
                    <Text style={styles.totalNumber}>
                        R {finalPriceVar}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.orderButton}
                    onPress={finishOrder}
                >
                    <Text style={styles.orderText}>
                        Order
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Location;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f0f0f0'
    },
    content:{
        marginHorizontal:20,
        marginBottom:20
    },
    checkOutTextContainer:{
        borderBottomColor: '#F2651C',
        borderBottomWidth: 0.5
    },
    checkoutText:{
        fontSize:50,
        fontWeight:'bold',
        marginVertical:10,
    },
    methodText:{
        fontSize:20
    },
    methodContainer:{
        marginVertical:10
    },
    optionsContainer:{
        backgroundColor:'#FFFFFF',
        borderRadius:20
    },
    optionsContainer2:{
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        marginBottom:20
    },
    radioOptions:{
        marginHorizontal:15,
        marginVertical:15
    },
    optionIconContainer:{
        flexDirection:'row',
    },
    optionText:{
        fontSize:15,
        marginLeft:10,
        fontWeight:'bold'
    },
    bottomPart:{
        backgroundColor:'#FFFFFF'
    },
    totalContainer:{
        flexDirection:'row',
        marginHorizontal:20,
        borderBottomColor:'#F2651C',
        borderBottomWidth:0.5,
    },
    totalText:{
        fontSize:20
    },
    totalNumber:{
        fontSize:20,
        fontWeight:'bold',
        marginVertical:5,
        marginLeft:140
    },
    orderButton:{
        marginVertical:40,
        alignSelf:'center',
        backgroundColor:'#F2651C',
        width:320,
        height:40,
        borderRadius:30,
        alignItems:'center'
    },
    orderText:{
        marginVertical:7.5,
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'bold'
    }
})