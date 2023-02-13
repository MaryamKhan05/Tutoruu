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
}

const ForgetPassword: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const contextState = useContext(LanguageContext);
    let language = 'en'
    if (contextState != null) {

        language = contextState.language
    }
    const Strings = Languages[language].texts
    return (
        <SafeAreaView className='flex-1 justify-center'>

            <View className='flex-1 justify-evenly  bg-orange-500'>
                <StatusBar style='light' />
                <View className='self-center h-30'>
                    <Image
                        source={require('../../../assets/logo.jpg')}
                        resizeMode='contain'
                        className='bg-orange-500'
                    />
                </View>
                <View>
                    <View className='self-center justify-center m-5 items-center'>

                        <Text className='text-white text-2xl text-center font-bold self-center'>
                            {Strings.ST74}
                        </Text>
                        <Text className='text-white text-lg text-center font-bold self-center'>
                            {Strings.ST75}
                        </Text>
                    </View>
                    <View className='bg-white m-4 p-5 justify-center rounded-xl'>
                        <Input
                            value={email}
                            title='Email'
                            placeholder='Enter Your Email'
                            onChangeText={(text) => { setEmail(text) }}
                        />

                        <Button
                            color={Colors.orange}
                            title='Send Password Reset Link'
                            onPress={() => { navigation.navigate(RouteNames.UpdatePassword) }}
                        />


                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}
export default ForgetPassword;