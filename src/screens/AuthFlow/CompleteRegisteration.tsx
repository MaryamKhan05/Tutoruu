import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import { AntDesign } from '@expo/vector-icons';
import RouteNames from '../RouteNames'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'

interface Props {
    navigation: any
    route: any
}

const CompleteRegisteration: React.FC<Props> = ({ navigation, route }) => {
    const { selectedUni, userName, phoneNo } = route.params;

    const [selectedUniveristy, setSelectedUniversity] = useState(selectedUni)
    const [UserName, setUserName] = useState(userName)
    const [PhoneNo, setPhoneNo] = useState(phoneNo)
    const contextState = useContext(LanguageContext);
    let language = 'en'
    if (contextState != null) {

        language = contextState.language
    }
    const Strings = Languages[language].texts
    return (
        <SafeAreaView className='flex-1 justify-center  bg-orange-400'>

            <View className='flex-1 justify-evenly'>
                <StatusBar style='light' />
                <View className='self-center h-30'>
                    <Image
                        source={require('../../../assets/logo.jpg')}
                        resizeMode='contain'
                        className=' bg-orange-400'
                    />
                </View>
                <View>

                    <Text className='text-white text-2xl text-center p-2 m-2 font-bold self-center'>
                        {Strings.ST82}
                    </Text>
                    <View className='bg-white m-4 p-5 justify-center rounded-xl'>
                        <View className='flex-row justify-evenly'>
                            <Input
                                value={UserName}
                                title='User Name'
                                placeholder='Enter Your User Name'
                                onChangeText={(text) => { setUserName(text) }}
                            />
                            <Input
                                value={selectedUniveristy}
                                title='University'
                                placeholder='Select Your University'
                                onChangeText={(text) => { setSelectedUniversity(text) }}

                            />

                        </View>
                        <Input
                            value={PhoneNo}
                            title='Phone'
                            placeholder=' Your Phone No'
                            onChangeText={(text) => { setPhoneNo(text) }}

                        />
                        <Button
                            color={Colors.orange}
                            title='Create Account'
                            onPress={() => { navigation.navigate(RouteNames.MagicLink) }}
                        />

                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}
export default CompleteRegisteration;
