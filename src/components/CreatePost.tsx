import React, { useState, useContext } from "react"
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Pressable, KeyboardAvoidingView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Languages from '../languages'
import LanguageContext from '../languages/languageContext'
import Colors from "../../assets/Colors";
import Field from "./InputField";
import UserImage from "./userImage";
import Btn from "./Button"
import Spacer from "./Spacer"
import Auc from "./Auc"

const CreatePost: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const contextState = useContext(LanguageContext);
  
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
       else if (language === 'es'){
            Strings = Languages[1].texts  
        }
        else{
            //default language if not any language provided
            Strings = Languages[0].texts
        }
    }
    const [isOn, setIsOn] = useState(false);
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: ('https://www.bootdey.com/img/Content/avatar/avatar1.png') }} />
            <Field width={250} borderRadius={50} />
            <TouchableOpacity style={styles.bubble} onPress={() => setModalVisible(true)} >
                <AntDesign
                    name="arrowright"
                    size={20}
                    color={Colors.white}
                />
            </TouchableOpacity>
            <View >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.background}>
                        <View style={styles.modalView}>
                            {/* Modal content goes here */}
                            <View
                            // style={{ backgroundColor: 'pink' }}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <UserImage width={40} height={40} />
                                    <View>
                                        <Text style={styles.name}>Yasmine Kamel</Text>
                                        <Text style={styles.email}>@Yasmine Kamel</Text>
                                    </View>
                                </View>
                                <Spacer />
                                <TextInput
                                    placeholder="Write anything..."
                                    placeholderTextColor={Colors.fadedgray}
                                    style={styles.input}
                                />
                                <Spacer />
                                <Text style={styles.tags}>{Strings.ST66}</Text>
                                <Spacer />
                                <View style={{ flexDirection: 'row', }} >
                                    <View style={{ marginRight: 5 }}>
                                        <Auc text="AUC" width={50} height={30} />
                                    </View>
                                    <Auc text="GENERAL" width={95} height={30} />
                                </View>
                                <Spacer />
                                {/* <KeyboardAvoidingView
                                    // behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
                                    behavior="position"
                                    style={styles.innercontainer}
                                > */}
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={[styles.tags, { marginTop: 5 }]}>{Strings.ST67}</Text>
                                        <TouchableOpacity
                                            onPress={() => setIsOn(!isOn)}
                                            style={{ marginRight: '5%' }}
                                        >
                                            {isOn ?
                                                (<FontAwesome name="toggle-on" size={40} color={Colors.orange} />)
                                                :
                                                (<FontAwesome name="toggle-off" size={40} color={Colors.orange} />)
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity>
                                        <Btn text={Strings.ST68} width={328} height={41} route={''} />
                                    </TouchableOpacity>
                                {/* </KeyboardAvoidingView> */}
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 74,
        borderRadius: 20,
        alignSelf: 'center',
        padding: 10
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    input: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.fadedgray,
        height: '30%',
        width: '98%',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        top: 0,
        left: 0,
        paddingLeft: 10,
    },
    button: {
        width: 100,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    bubble: {
        backgroundColor: Colors.orange,
        width: 44,
        height: 44,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        height: '50%',
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },


    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21
    },
    email: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        color: Colors.orange
    },
    tags: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21
    },
    placeholder: {
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: 18,
        // color: Colors.gray,
        color: 'red',
        paddingLeft: 10,
    }
})

export default CreatePost