import React, {useState, useEffect} from 'react'
import { View, Text,StyleSheet, TextInput, LogBox, Alert, TouchableOpacity, StatusBar, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
//INSTALLED PACKAGES:
import PasswordInputText from 'react-native-hide-show-password-input';
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/core'

const Login = () => {
    const navigation = useNavigation();
    
    const provider = new firebase.default.auth.GoogleAuthProvider();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let errorMessage = "";

    useEffect(()=>{
        LogBox.ignoreAllLogs();     //IGNORE ANIMATION WARNING
        errorMessage="";
        
        firebase.default.auth().signOut().then(()=>{
            console.log('no user signed in')
        }).catch((error)=>{
            console.log('sign out failed')
        })
    }, []);

    const formErrors = () =>{
        if(errorMessage!==""){
            Alert.alert(
                "Log In",
                errorMessage,
                [   
                    {
                        text: "Okay",
                        onPress: () => errorMessage="",
                        style: 'cancel'
                    },
                ]
            )
        }
    }


    const signInButton = () =>{
        if(email!=="" & password!==""){
            if(typeof email !== "undefined"){
                var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                
                if(!pattern.test(email)){
                    errorMessage = errorMessage+"\nPlease enter a valid email address";
                    alert(errorMessage);
                    console.log(errorMessage);
                }
                else{
                    handleLogIn();
                    stateObserver();
                }
            }
        } 
        else{
            errorMessage = errorMessage+"\nPlease fill in the empty field(s)";
            formErrors();
        }
    };

    const SignUpButton = () =>{
        navigation.navigate('SignUp');
    };

    const createProfile = () =>{
        user.updateProfile({
            displayName : name,
        //////////
        }).then(() =>{
            console.log('username : ', user.displayName);
        }).catch((err) => console.log(err))
    };

    const handleLogIn = () =>{
        firebase.default
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() =>
                navigation.navigate('Main'),
                console.log("email : ", email),
            )
            .catch(err => alert(err));
    };

    const stateObserver = () =>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              console.log('Logged In')
            } else {
              console.log('Signed out')
            }
        });
    }

    const googleLogin = () =>{ //ONLY WORKS WHEN DEPLOYED
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase
            .auth()
            .signInWithRedirect(provider)
            .then(function(result){
                console.log(result)
            }).catch(error => console.log(error))        
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS==="android"?"height":"height"}
            style={styles.View1}
        >
            <StatusBar
                animated={true}
                backgroundColor='#F9F9F9'
                networkActivityIndicatorVisible={true}
                animated={true}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.textSection}>
                    <Text style={styles.LogInText}>
                        Log In
                    </Text>
                </View>

                <Text style={styles.KerznerHeadText}>
                    TheKerzner@UJ
                </Text>

                <Image
                    style={styles.UjImage}
                    source={require('../image_props/logo_white.jpg')}
                />

                <TextInput
                    style={styles.InputBoxEmail}
                    placeholder="Email"
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    value={email}
                    onChangeText={(email)=>setEmail(email)}
                />

                <PasswordInputText
                    style={styles.InputBoxPassword}
                    value={password}
                    onChangeText={(password)=>setPassword(password)}
                />

                <TouchableOpacity
                    style={styles.ClickableTextButton}
                    onPress={googleLogin}
                >
                    <Text style={styles.ClickableTextGoogle}>
                        Login with Google
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.LogSignButton}
                    onPress={signInButton}    
                >
                    <Text style={styles.LogSignText}>
                        Log In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.LogSignButton}
                    onPress={SignUpButton}
                >
                    <Text style={styles.LogSignText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ClickableTextButton}>
                    <Text style={styles.ClickableText}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    View1:{
        flex:1,
        width: '100%',
        alignItems: 'center',
        height:'100%',
        backgroundColor:'#FFFFFF',
    },
    textSection:{
        borderBottomColor:'#E4E4E4',
        borderBottomWidth:1,
    },
    LogInText:{
        fontWeight:'bold',
        alignSelf:"center",
        fontSize:20,
        color:"#F2651C",
        marginVertical:5,
    },
    KerznerHeadText:{
        marginTop:30,
        fontWeight:"bold",
        fontSize:36,
        alignSelf:"center",
        color:"#F2651C",
    },
    UjImage:{
        width:120,
        height:120,
        marginTop:10,
        resizeMode:'stretch',
        alignSelf:'center',
        marginBottom:20.
    },
    InputBoxEmail:{
        backgroundColor:"#F6F6F6",
        borderWidth:1,
        height:40,
        borderColor:"#F2994A",
        borderRadius:8,
        width:320,
    },
    InputBoxPassword:{
        backgroundColor:"#F6F6F6",
        borderWidth:1,
        borderColor:"#F2994A",
        borderRadius:8,
        width:320,
        height:40,
        marginTop:15,
        marginBottom:20,
    },
    LogSignButton:{
        borderWidth:1,
        backgroundColor:"#F2651C",
        borderColor:"#FFFFFF",
        borderRadius:100,
        alignItems:"center",
        height:40,
        marginTop:10,
    },
    LogSignText:{
        fontWeight:"500",
        color: "#FFFFFF",
        marginTop:10,
    },
    ClickableTextButton:{
        backgroundColor:"transparent",
        alignSelf:"center",
    },
    ClickableTextGoogle:{
        color:"#023d9e",
        textDecorationLine: 'underline',
        fontSize:16,
        fontWeight:"600",
        marginTop:10,
    },
    ClickableText:{
        color:"#F2651C",
        fontSize:16,
        fontWeight:"600",
        marginTop:10,
    }
});

export default Login
