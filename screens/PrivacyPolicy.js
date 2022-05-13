import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core';

const PrivacyPolicy = () => {

    const navigation = useNavigation();

    return (
        <View>
            <ScrollView style={styles.container}>
                <View style={styles.mainHeadContainer}>
                    <Text style={styles.mainHead}>
                        PRIVACY POLICY
                    </Text>
                </View>
                <View>
                    <Text style={styles.text}>
                        We care about data privacy and security. Please review our Privacy Policy.{"\n"}
                        By using the Application, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Application is hosted in the Republic of South Africa. If you access the Application from the European Union, Asia, or any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the Republic of South Africa, then through your continued use of the Application or Services, you are transferring your data to the Republic of South Africa, and you expressly consent to have your data transferred to and processed in the Republic of South Africa. Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the Children’s Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the Application as quickly as is reasonably practical.]
                    </Text>
                    <View>
                        <Text style={styles.subHead}>
                            DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            We respect the intellectual property rights of others. If you believe that any material available on or through the Application infringes upon any copyright you own or control, please immediately notify our Designated Copyright Agent using the contact information provided below (a “Notification”). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Application infringes your copyright, you should consider first contacting an attorney.{"\n\n"}
                            All Notifications should meet the requirements of DMCA 17 U.S.C. § 512(c)(3) and include the following information: (1) A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed; (2) identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works on the Application are covered by the Notification, a representative list of such works on the Application; (3) identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material; (4) information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an email address at which the complaining party may be contacted; (5) a statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and (6) a statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed upon.{"\n\n"}
                            If you believe your own copyrighted material has been removed from the Application as a result of a mistake or misidentification, you may submit a written counter notification to [us/our Designated Copyright Agent] using the contact information provided below (a “Counter Notification”). To be an effective Counter Notification under the DMCA, your Counter Notification must include substantially the following: (1) identification of the material that has been removed or disabled and the location at which the material appeared before it was removed or disabled; (2) a statement that you consent to the jurisdiction of the Federal District Court in which your address is located, or if your address is outside the Republic of South Africa, for any judicial district in which we are located; (3) a statement that you will accept service of process from the party that filed the Notification or the party’s agent; (4) your name, address, and telephone number; (5) a statement under penalty of perjury that you have a good faith belief that the material in question was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled; and (6) your physical or electronic signature.
                            If you send us a valid, written Counter Notification meeting the requirements described above, we will restore your removed or disabled material, unless we first receive notice from the party filing the Notification informing us that such party has filed a court action to restrain you from engaging in infringing activity related to the material in question. Please note that if you materially misrepresent that the disabled or removed content was removed by mistake or misidentification, you may be liable for damages, including costs and attorney’s fees. Filing a false Counter Notification constitutes perjury.
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.returnButton}
                    onPress={()=>navigation.navigate('Main')}
                >
                <Text style={styles.returnText}>
                    Return
                </Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
    container:{
        marginHorizontal:5,
    },
    mainHeadContainer:{
        borderBottomWidth:0.5,
        borderBottomColor:'#F2651C',
        marginVertical:10,
    },
    mainHead:{
        fontSize: 20,
        fontWeight:'bold',
    },
    text:{
        color: '#525251'
    },
    subHead:{
        fontWeight:'bold'
    },
    returnButton:{
        marginVertical:20,
        alignSelf:'center',
        backgroundColor:'#F2651C',
        width:350,
        height:40,
        borderRadius:30,
        alignItems:'center'
    },
    returnText:{
        marginVertical:7.5,
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'bold'
    }
})