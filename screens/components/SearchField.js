import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, LogBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
// import Login from '../Login';
// //INSTALLED LIBRARIES
// import { useNavigation } from '@react-navigation/native';
// import {FontAwesome} from '@expo/vector-icons';
// // import Voice from 'react-native-voice';

const SearchField = () => {

    const navigation = useNavigation();

    useEffect(()=>{
        LogBox.ignoreAllLogs();
    }, []);

    return(
        <View style={styles.searchView}>
            <View style={styles.searchContainer}>
                <TouchableOpacity
                    style={styles.searchField}
                    onPress={() => navigation.navigate('SearchFieldReal')}
                >
                    <Text style={styles.searchText}>
                        search menu
                    </Text>
                </TouchableOpacity>
                {/* <FontAwesome
                    style={styles.micIcon}
                    name='microphone'
                    size={30}
                    color={'#C4C4C4'}
                    onPress={voiceInputOn}
                /> */}
            </View>
        </View>
    )
}
export default SearchField;

const styles = StyleSheet.create({
    searchView:{
        backgroundColor:'#F2651C',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        height:50
    },
    searchContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
    },
    searchField:{
        backgroundColor:'#F6F6F6',
        marginLeft:15,
        width:300,
        borderWidth:2,
        fontSize:15,
        height:40,
        borderColor:'#E8E8E8',
        borderRadius:50,
    },
    searchText:{
        alignSelf: 'center',
        marginVertical: 7,
        color: '#857f73'
    }
})



// // VOICE INPUT STATES
    // const [started, setStarted] = useState('');
    // const [results, setResults] = useState([]);
    // const [pitch, setPitch] = useState('');
    // const [error, setError] = useState('');
    // const [end, setEnd] = useState('');
    // const [partialResults, setPartialResults] = useState([]);
    // const [editableResult, setEditableResult] = useState(true);


    // const alertRecording = () =>
    //     Alert.alert(
    //         "Kerzner@UJ",
    //         "Recording...",
    //         [
    //             {
    //                 text: "Cancel",
    //                 onPress: () =>{
    //                     voiceInputOff
    //                     destroyVoiceResults
    //                 },
    //             },
    //             {
    //                 text: "Done",
    //                 onPress: () =>{
    //                     voiceInputOff
    //                 },
    //             },
    //         ]
    //     );

    // //SPEECH INPUT HANDLER
    // const voiceInputOn = async (e) =>{
    //     alertRecording()
    //     try {
    //         await Voice.start('en-US');
    //         setPitch('');
    //         setError('');
    //         setStarted('');
    //         setResults([]);
    //         setPartialResults([]);
    //         setEnd('');
    //     } catch (e) {
    //         //eslint-disable-next-line
    //         console.error(e);
    //     }
    // };

    // const onSpeechStart = (e) => {
    //     console.log('onSpeechStart: ', e);
    //     setStarted('√');
    // };

    // const voiceInputOff = async () =>{
    //     try {
    //         await Voice.stop();
    //     } catch (e) {
    //         //eslint-disable-next-line
    //         console.error(e);
    //     }
    // };

    // //DESTROY/ERASE THE ARRAY OF PARTIAL RESULTS
    // const destroyVoiceResults = async () => {
    //     try {
    //       await Voice.destroy();
    //       setPitch('');
    //       setError('');
    //       setStarted('');
    //       setResults([]);
    //       setPartialResults([]);
    //       setEnd('');
    //     } catch (e) {
    //       //eslint-disable-next-line
    //       console.error(e);
    //     }
    // };

    // //Log when errors are detected---FIX THE "5/client side error" ISSUE
    // const onSpeechError = (e) => {
    //     console.log('onSpeechError: ', e);
    //     setError(JSON.stringify(e.error));
    // };

    // //RETURN RESULTS TO ARRAY WHEN SpeechRecognizer HAS ENDED
    // const onSpeechResults = (e) => {
    //     console.log('onSpeechResults: ', e);
    //     setResults(e.value);
    // };

    // //RETURN DETECTED SOUND-PITCH
    // const onSpeechVolumeChanged = (e) => {
    //     console.log('onSpeechVolumeChanged: ', e);
    //     setPitch(e.value);
    // };


// useEffect(() => {
    // try{
        //     Voice.onSpeechStart = onSpeechStart;
        //     Voice.onSpeechEnd = voiceInputOff;
        //     Voice.onSpeechError = onSpeechError;
        //     Voice.onSpeechResults = onSpeechResults;
        //     Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
        // }catch{(err) => console.log(err)};
        
        // setResults('');

        // return () => {
        //     //destroy the voice process after exiting current screen
        //     Voice.destroy().then(Voice.removeAllListeners);
        // };
// })