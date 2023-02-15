import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'


import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import { AntDesign } from '@expo/vector-icons';
import RouteNames from '../RouteNames'

import Colors from '../../../assets/Colors'
import Button from '../../components/Buttonnn'
interface Props {
    navigation: any
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const contextState = useContext(LanguageContext);
  
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
    }
    return (


        <View
            style={{ backgroundColor: Colors.orange }}
            className=' justify-between flex-1'>
            <StatusBar style='light' />
            <SafeAreaView />

            <View className=' justify-center items-center p-10  h-20'>
                <Image
                    source={require('../../../assets/authlogo.png')}
                    resizeMode='contain'
                    className='w-40 h-40'
                />


            </View>
            <View >

                <Text

                    className='text-white p-2 text-2xl font-bold self-center'>
                    {Strings.ST69}
                </Text>
                <View className='bg-white m-4 p-3 justify-center rounded-xl'>
                    <Input
                        value={email}
                        title='Email'
                        placeholder='Enter Your Email'
                        onChangeText={(text) => { setEmail(text) }}
                    />
                    <Input
                        value={password}
                        title='Password'
                        placeholder='Enter Your Password'
                        onChangeText={(text) => { setPassword(text) }}
                        secureTextEntry
                    />
                    <Button
                        color={Colors.orange}
                        title='Login'
                        onPress={() => {navigation.navigate('MainStackStudent') }}
                    />
                    <View className='justify-center  justify-items-center flex-row gap-3'>

                        <TouchableOpacity>
                            <Image
                                source={require('./../../../assets/googlelogo.png')}
                                resizeMode='contain'
                                className='rounded-full h-10 w-10 m-2'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('./../../../assets/facebooklogo.png')}
                                resizeMode='contain'
                                className='rounded-full h-10 w-10 m-2'
                            />
                        </TouchableOpacity>
                    </View>

                </View>
                <View className='flex-row justify-center items-center'>
                    <Text className='text-white text-sm self-center'>
                        {Strings.ST70}
                    </Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate(RouteNames.SignUpHome) }}
                    >
                        <Text className='text-white text-sm border-b-2 border-white font-bold self-center'>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View className='py-10'>


                <TouchableOpacity
                    className='align-bottom  justify-center items-center  '
                    onPress={() => { navigation.navigate(RouteNames.ForgetPassword) }}
                >

                    <Text className='text-white text-sm  self-center'>
                        {Strings.ST71}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default LoginScreen;