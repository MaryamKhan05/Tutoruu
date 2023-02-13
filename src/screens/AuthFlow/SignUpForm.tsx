import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import RouteNames from '../RouteNames'
import Button from '../../components/Buttonnn'
import Colors from '../../../assets/Colors'
import { Picker } from '@react-native-picker/picker';

interface Props {
    navigation: any
}

const SignUpForm: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [selectedUni, setSelectedUni] = useState('');
const[dropDownTextColor,setDropDownTextColor]=useState(false)
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
                <View 
                
             //   className='self-center h-20 bg-gray-400 items-center'
                >
                    <Image
                        source={require('../../../assets/logo.jpg')}
                        resizeMode='contain'
                        className='bg-orange-500 self-center m-1'
                    />
                </View>
                <View>

                    <Text className='text-white text-2xl font-bold self-center'>
                        {Strings.ST72}
                    </Text>
                    <View className='bg-white p-2 mx-5 my-2 justify-center rounded-xl'>
                        <Input
                            value={name}
                            title='Name'
                            placeholder='Enter Your Name'
                            onChangeText={(text) => { setName(text) }}
                        />
                        <Input
                            value={email}
                            title='Email'
                            placeholder='Enter Your Email'
                            onChangeText={(text) => { setEmail(text) }}
                        />
                        <View className='flex-row justify-evenly'>
<View  style={{flex:1}}>

                            <Input
                                value={userName}
                                title='User Name'
                                placeholder='Enter A UserName'
                                onChangeText={(text) => { setUserName(text) }}
                            />
</View>
                            <View 
                            style={{justifyContent:'center'}}
                            className=" flex-1">
                                <Text
                                    className="text-center mx-3  text-sm text-black self-start"
                                >University</Text>
                                <View
                               
                                    className=" border border-gray-300 h-11 rounded-3xl"
                                  style={{justifyContent:'center',marginVertical:5,marginHorizontal:10}}
                                >
                                    <Picker
                            placeholder='Select Your Uni'
                           style={{color: dropDownTextColor? 'black':'gray'}}
                           
                                        selectedValue={selectedUni}
                                        onValueChange={(itemValue, itemIndex) =>
                                           { setDropDownTextColor(true)
                                            setSelectedUni(itemValue)}
                                        }>
                                        <Picker.Item label="Java" value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                    </Picker>
                                </View
                                >
                            </View>

                        </View>

                        <Input
                            value={phoneNo}
                            title='Phone'
                            placeholder='Enter Your Phone No'
                            onChangeText={(text) => { setPhoneNo(text) }}

                        />
                        <Input
                            value={password}
                            title='Password'
                            placeholder='Enter A Password'
                            onChangeText={(text) => { setPassword(text) }}

                        />
                        <Input
                            value={confirmPassword}
                            title='Confirm Password'
                            placeholder='Confirm Your Passowrd'
                            onChangeText={(text) => { setConfirmPassword(text) }}

                        />
                        <Button
                            color={Colors.orange}
                            title='Create Account'
                            image='https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-forward-icon-png-image_925823.jpg'
                            onPress={() => {
                                navigation.navigate(RouteNames.CompleteRegisteration, {
                                    selectedUni,
                                    phoneNo,
                                    userName,
                                })
                            }}
                        />

                    </View>
                    <View className='flex-row justify-center items-center'>
                        <Text className='text-white text-lg  self-center'>
                            {Strings.ST73}
                        </Text>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(RouteNames.LoginScreen) }}
                        >
                            <Text className='text-white text-lg border-b-2 border-white font-bold self-center'>
                                Login
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default SignUpForm;