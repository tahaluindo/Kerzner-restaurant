;import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, LogBox, StatusBar, Alert } from 'react-native';
import SearchField from './components/SearchField';
import MainAdvert from './MainAdvert';
import MainContents from './MainContents';
import * as MenuThumbs from './components/MenuThumbs';

import TabBar from './components/TabBar';

//INSTALLED LIBRARIES
import { SimpleLineIcons } from '@expo/vector-icons';
import Drawer from 'react-native-drawer';

class Main extends Component {

    openSideTab = () =>{
        this._drawer.open()
    }

    componentDidMount(){
        LogBox.ignoreAllLogs();
    }

    render(){
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type='overlay'
                content={<TabBar/>}
                openDrawerOffset={0.2}
                tapToClose={true}
                closedDrawerOffset={-3}
                tweenHandler={(ratio) => ({
                    main: {opacity:(2-ratio)/2}
                })}
                styles={{
                        drawer:{
                            shadowColor: '#000000',
                            shadowOpacity: 0.8,
                            shadowRadius: 3,
                        },
                        main:{
                            paddingLeft: 3
                        },    
                }}
            >
                
                <View style={styles.container}>
                    <StatusBar
                        animated={true}
                        backgroundColor='#F2651C'
                        networkActivityIndicatorVisible={true}
                    />
                
                    <View style={styles.searchField}>
                        <SimpleLineIcons
                            style={styles.sideTabIcon}
                            name='options-vertical'
                            size={30}
                            color={'#de9f7e'}
                            onPress={this.openSideTab}
                        />
                        <SearchField/>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <MainAdvert/>
                        </View>
                        <View>
                            <MainContents/>
                        </View>

                        <MenuThumbs.SpecialityBurgers_Thumb/>
                        <MenuThumbs.SignaturePizzas_Thumb/>
                        <MenuThumbs.Sandwitches_Thumb/>
                        <MenuThumbs.HotMeals_Thumb/>   
                    </ScrollView>
                </View>
            </Drawer>
        )
    }
}

export default Main

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        flex: 1,
    },
    searchField:{
        flexDirection:'row',
        backgroundColor:'#F2651C'
    },
    sideTabIcon:{
        marginVertical:10,
    },
})

