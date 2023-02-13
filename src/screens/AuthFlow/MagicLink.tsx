import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'
import { Fontisto } from '@expo/vector-icons';
import RouteNames from '../RouteNames'


interface Props {
    navigation: any
}

const MagicLink: React.FC<Props> = ({ navigation }) => {
    const contextState = useContext(LanguageContext);
    let language = 'en'
    if (contextState != null) {

        language = contextState.language
    }
    const Strings = Languages[language].texts
    return (
        <SafeAreaView className='flex-1 justify-center '>

            <View className='flex-1 justify-evenly bg-orange-400'>
                <StatusBar style='light' />
                <View className='self-center h-30'>
                    <Image
                        source={require('../../../assets/logo.jpg')}
                        resizeMode='contain'
                        className='bg-orange-500'
                    />
                </View>
                <View>
                    <View className='justify-center items-center'>

                        <Fontisto name="email" size={60} color="white" />
                    </View>
                    <View className='self-center justify-center m-5 items-center'>

                        <Text className='text-white text-2xl text-center font-bold self-center'>
                            {Strings.ST78}
                        </Text>
                        <Text className='text-white text-lg text-center font-bold self-center'>
                            {Strings.ST79}
                        </Text>
                    </View>


                </View>

            </View>
        </SafeAreaView>
    )
}
export default MagicLink;