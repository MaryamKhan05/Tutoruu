import React from "react";
import { View, Text, TextInput } from 'react-native';
import Colors from "../../assets/Colors";


interface Props {
    value: string
    title: string
    onChangeText: (text: string) => void
    placeholder?: string
    secureTextEntry?: boolean

}


const Input: React.FC<Props> = (props) => {
    return (
        <View className="my-0.5 w-full  ">
            <Text className="text-center p-1 text-sm text-black font-bold self-start">
                {props.title}
            </Text>
            <TextInput
         
            className=" h-11  p-3 my-1 text-sm  border border-gray-300 rounded-3xl"
            value={props.value}    
            secureTextEntry={props.secureTextEntry || false}
                onChangeText={props.onChangeText}
                placeholder={'Doe...'}
                placeholderTextColor={Colors.black}
                
            />
        </View>
    )
}
export default Input;