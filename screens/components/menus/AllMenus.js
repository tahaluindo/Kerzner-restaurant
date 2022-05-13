import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Breakfasts from './Breakfasts'
import Deserts from './Deserts'
import Drinks from './Drinks'
import HotMeals from './HotMeals'
import Salads from './Salads'
import Sandwiches from './Sandwiches'
import SignaturePizzas from './SignaturePizzas'
import SpecialityBurgers from './SpecialityBurgers'

const AllMenus = () => {
    return (
        <View>
            <View style={{borderBottomWidth:0.5, borderBottomColor:'#F2651C'}}>
                <Text style={{marginHorizontal:5, fontSize:20, fontWeight:'bold'}}>
                    All Menus
                </Text>
            </View>
            <ScrollView>
                <Breakfasts/>
                <HotMeals/>
                <Salads/>
                <Sandwiches/>
                <SignaturePizzas/>
                <SpecialityBurgers/>
                <Deserts/>
                <Drinks/>
            </ScrollView>
        </View>
    )
}

export default AllMenus
