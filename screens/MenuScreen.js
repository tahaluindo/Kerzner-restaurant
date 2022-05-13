import React from 'react'
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MenuScreen = (navigation) => {
    return (
        <View>
            <StatusBar
                animated={true}
                backgroundColor='transparent'
                networkActivityIndicatorVisible={true}
            />
            <View style={styles.menuTextContainer}>
                <Text style={styles.menuHeadText}>
                    Menu
                </Text>
                <View>
                    {/* <NavigationContainer style={styles.container} independent={true}>
                        <Stack.Navigator initialRouteName = 'Breakfasts'>
                            <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
                            <Stack.Screen name='Breakfasts' component={Menu.Breakfasts} options={{headerShown:false}}/>
                            <Stack.Screen name='Salads' component={Menu.Salads} options={{headerShown:false}}/>
                            <Stack.Screen name='SpecialtyBurgers' component={Menu.SpecialtyBurgers} options={{headerShown:false}}/>
                            <Stack.Screen name='Sandwiches' component={Menu.Sandwiches} options={{headerShown:false}}/>
                            <Stack.Screen name='HotMeals' component={Menu.HotMeals} options={{headerShown:false}}/>
                            <Stack.Screen name='SignaturePizzas' component={Menu.SignaturePizzas} options={{headerShown:false}}/>
                        </Stack.Navigator>
                    </NavigationContainer> */}
                </View>
            </View>
        </View>
    )
}

export default MenuScreen

const styles =StyleSheet.create({
    menuTextContainer:{
        marginHorizontal:10,
        marginVertical:5,
    },
    menuHeadText:{
        fontSize:20,
        fontWeight:'bold',
    }
})