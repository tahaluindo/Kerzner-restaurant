import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const SearchFieldReal = () => {

    const navigation = useNavigation();

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    var data = [
        {
        "menuId": 1,
        "id": "Hot Meal",
        "title": "Creamed Beef Pasta",
        "body": "Layered Beef with Provençale style sauce, cream & Pecorino Cheese",
        "ref" : 'HotMeals'
        },
        {
        "menuId": 2,
        "id": "Hot Meal",
        "title": "Fish And Chips",
        "body": "Served with Choice of Side Salad or STH House Fries & tartare sauce",
        "ref" : 'HotMeals'
        },
        
        {
        "menuId": 3,
        "id": "Burger",
        "title": "STH Beef Burger",
        "body": "An all-South African 100% beef Burger with brown mushroom and mozzarella cheese, Caramelized Onion, Lettuce & Tomato, Pickles served on a Sesame seed roll",
        "ref" : 'SpecialityBurgers'
        },
        {
        "menuId": 4,
        "id": "Burger",
        "title": "STH Chicken Burger",
        "body": "An all-South African Chicken Breast Burger with brown mushroom and mozzarella cheese, Caramelized Onion, Lettuce & Tomato, Pickles served on a Sesame seed roll",
        "ref" : 'SpecialityBurgers'
        },
        {
        "menuId": 5,
        "id": "Burger",
        "title": "STH Falafel Burger",
        "body": "A North African chickpea Burger with brown mushroom and mozzarella cheese, Caramelized Onion, Lettuce & Tomato, Pickles served on a Sesame seed roll",
        "ref" : 'SpecialityBurgers'
        },
        
        {
        "menuId": 6,
        "id": "Pizza",
        "title": "BBQ Chicken & Mushroom Pizza",
        "body": "A freshly made pizza made with mozzarella cheese, Tangy Tomato, BBQ Chicken, Mushroom & Peppers",
        "ref" : 'SignaturePizzas'
        },
        {
        "menuId": 7,
        "id": "Pizza",
        "title": "Four Seasons Pizza",
        "body": "A freshly prepared pizza made with Mozzarella Cheese, Spinach, Feta, Mushrooms & Olives",
        "ref" : 'SignaturePizzas'
        },
        {
        "menuId": 8,
        "id": "Pizza",
        "title": "Meat Lovers Delight",
        "body": "A freshly prepared pizza made with Mozzarella Cheese, Salami, Pork Ribs, Feta, Mushrooms & Bacon Jam",
        "ref" : 'SignaturePizzas'
        },
        
        {
        "menuId": 9,
        "id": "Sandwich",
        "title": "Chicken & Haloumi Quesadilla",
        "body": "Served with Choice of Side Salad or STH House Fries",
        "ref" : 'Sandwiches'
        },
        {
        "menuId": 10,
        "id": "Sandwich",
        "title": "Roasted Root Vegetable Tortilla Wrap",
        "body": "Served with Choice of Side Salad or STH House Fries",
        "ref" : 'Sandwiches'
        },
        {
        "menuId": 11,
        "id": "Sandwich",
        "title": "Slow Braised Chicken Tramazzini",
        "body": "Served with Choice of Side Salad or STH House Fries",
        "ref" : 'Sandwiches'
        },
        
        {
        "menuId": 12,
        "id": "Salad",
        "title": "Garden Salad",
        "body": "A fresh seasonal salad with Garden leaves, English cucumbers, heirloom Tomatoes, Wheat croutons, Black Kalamata Olives & Greek Feta Cheese, Honey Mustard Dressing",
        "ref" : 'Salads'
        },
        {
        "menuId": 13,
        "id": "Salad",
        "title": "Pasta Salad",
        "body": "A pasta salad with Root Veg, heirloom Tomatoes, Toasted Seeds, Black Kalamata Olives & Greek Feta Cheese",
        "ref" : 'Salads'
        },
        {
        "menuId": 14,
        "id": "Salad",
        "title": "Haloumi & Peppadew Salad",
        "body": "Bar Grilled Haloumi with seasonal Garden Leaves, heirloom Tomatoes, Toasted Seeds, Black Kalamata Olives & Greek Feta Cheese & Honey Mustard Dressing",
        "ref" : 'Salads'
        },
        
        {
        "menuId": 15,
        "id": "Breakfast",
        "title": "Waterford Breakfast",
        "body": "Beef Sausage, Bacon, Grilled Tomato, Field Mushroom, Egg & Toast",
        "ref" : 'Breakfasts'
        },
        {
        "menuId": 16,
        "id": "Breakfast",
        "title": "Beans With Hashbrown",
        "body": "Seasoned beans served with Hashbrown",
        "ref" : 'Breakfasts'
        },
        {
        "menuId": 17,
        "id": "Breakfast",
        "title": "Homemade Waffle",
        "body": "Maple syrup",
        "ref" : 'Breakfasts'
        },
        {
        "menuId": 18,
        "id": "Breakfast",
        "title": "Breakfast Fruit Bowl",
        "body": "Seasonal fruit selection",
        "ref" : 'Breakfasts'
        },
        {
        "menuId": 19,
        "id": "Breakfast",
        "title": "Oats",
        "body": "Freshly prepared Oats served with honey & warm milk",
        "ref" : 'Breakfasts'
        },
    ]



    useEffect(() => {
        try {
        setFilteredDataSource(data);
        setMasterDataSource(data);
        } catch (error) {
        console.error(error);
        } 
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(
                function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
        }
    };

    const ItemView = ({item}) => {
        return (
        // Flat List Item
        <Text
            style={styles.itemStyle}
            onPress={() => getItem(item)}>
            {item.title.toUpperCase()}
        </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
        // Flat List Item Separator
        <View
            style={{
                height: 0.5,
                width: '100%',
                backgroundColor: '#F2651C',
            }}
        />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        navigation.navigate(item.ref);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchField}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search Here"
                />
                <FlatList
                    style={styles.list}
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchView:{
        height:50,
    },
    container:{
        flex: 1,
    },
    searchContainer:{
        backgroundColor:'#F2651C',
    },
    itemStyle: {
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#737373'
    },
    searchField:{
        backgroundColor:'#F6F6F6',
        alignSelf:'center',
        width:300,
        borderWidth:2,
        marginVertical:10,
        fontSize:15,
        height:40,
        textAlign:'center',
        borderColor:'#E8E8E8',
        borderRadius:50,
    },
    list:{
        backgroundColor:'#FFFFFF'
    },
});

export default SearchFieldReal;