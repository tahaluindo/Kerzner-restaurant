import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, LogBox } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import * as firebase  from 'firebase'
import ProfilePicture from 'react-native-profile-picture'
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
    const navigation = useNavigation();

    const firebaseAuth = firebase.default.auth();
    const user = firebaseAuth.currentUser;

    const [pictureAvail, setPictureAvail] = useState(false);

    const [pickedImage, setPickedImage] = useState(null);

    const [photoURL, setPhotoURL] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [usernameEditable, setUsernameEditable] = useState(false);
    const [phoneEditable, setPhoneEdtiable] = useState(false);


    const updatePicture = async() =>{
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status !== 'granted'){
            alert("TheKerzner@UJ App needs the camera permission to update your profile picture.")
            console.log("camera permission denied")
        }else{
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images,
                allowsEditing : true,
                aspect: [4, 3],
                quality : 1
            });

            // setPhotoURL(result)

            console.log(result);

            if(!result.cancelled){
                setPickedImage(result.uri);
                
                firebaseAuth.currentUser.updateProfile(firebaseAuth.currentUser,{
                    photoURL:pickedImage
                }).then(() =>{
                    console.log("profile picture updated")
                }).catch((error) =>{
                    console.log(error)
                })
            }
        }
    }

    const fetchProfile = () =>{ 
        try{
            setUsername(user.displayName);
            setEmail(user.email);
            setPhone(user.phoneNumber);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        try {
                fetchProfile();
                
                if(photoURL !== ""){
                    setPictureAvail(true);
                    LogBox.ignoreAllLogs();
                }  
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor='#F2651C'
                networkActivityIndicatorVisible={true}
                animated={true}
            />
            <Text style={styles.myProfileText}>
                My Profile
            </Text>
            <View style={styles.personalDetailsRow}>
                <Text style={styles.personalDetailsHead}>
                    Personal details
                </Text>
                
                <TouchableOpacity>
                    <Text style={styles.editText}>
                        edit
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.personalDetailsContainer}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.pictureContainer}>
                            <TouchableOpacity
                                style={styles.pictureButton}
                                onPress={updatePicture}
                            >
                                <ProfilePicture
                                    isPicture={pictureAvail}
                                    URLPicture={photoURL}
                                    user='@'
                                    shape='circle'
                                    backgroundColor='#F2651C'
                                    width={120}
                                    height={120}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.detailsTextContainer}>
                            <View>
                                <TextInput
                                    style={styles.userNameText}
                                    onChangeText={(username) => setUsername(username)}
                                    value={username}
                                    placeholder={username}
                                    editable={usernameEditable}
                                />
                            </View>
                            <View>
                                <Text style={styles.emailText}>
                                    {email}
                                </Text>
                            </View>
                            <View>
                                <TextInput
                                    onChangeText={(phone) => setPhone(phone)}
                                    value={phone}
                                    placeholder={phone}
                                    editable={phoneEditable}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonOption}>
                    <Text style={styles.optionTextL}>
                        Orders
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOption}>
                    <Text style={styles.optionTextL}>
                        Pending reviews
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOption}>
                    <Text style={styles.optionTextL}>
                        FAQ
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOption}>
                    <Text style={styles.optionTextL}>
                        Help
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            
            <TouchableOpacity
                style={styles.buttonDone}
                onPress={()=> navigation.navigate('Main')}
            >
                <Text style={styles.DoneText}>
                    Done
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        height:'100%'
    },
    myProfileText:{
        fontSize:35,
        fontWeight:'bold',
        marginLeft:10
    },
    contentContainer:{
       marginHorizontal:10,
       marginVertical:10 
    },
    personalDetailsRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginTop:30,
    },
    personalDetailsHead:{
        fontSize:15,
    },
    editText:{
        color:'#F2651C'
    },
    personalDetailsContainer:{
        backgroundColor:'#FFFFFF',
        borderRadius:20
    },
    detailsContainer:{
        marginHorizontal:10,
        marginVertical:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    pictureContainer:{

    },
    pictureButton:{
        
    },
    detailsTextContainer:{
        flexDirection:'column'  
    },
    userNameText:{
        color:'#000000',
        fontSize:20
    },
    emailText:{
        color:'#abadb0', 
        paddingBottom:5,
        borderBottomColor:'#abadb0',
        borderBottomWidth:0.5
    },
    buttonOption:{
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        height:50,
        marginVertical:15,
        borderRadius:20,
    },
    optionTextL:{
        fontSize:20,
        marginVertical:10
    },
    buttonDone:{
        alignItems:'center',
        backgroundColor:'#F2651C',
        marginHorizontal:10,
        height:50,
        marginVertical:15,
        borderRadius:50,
    },
    DoneText:{
        fontSize:15,
        color:'#FFFFFF',
        marginVertical:15,
    }
})
