import React from "react";
import { View, Text, TextInput } from 'react-native';


interface Props {
    value: string
    title: string
    onChangeText: (text: string) => void
    placeholder: string
    secureTextEntry?: boolean

}


const Input: React.FC<Props> = (props) => {
    return (
        <View className=" justify-between p-2 py-2  ">
            <Text className="text-center text-sm text-black self-start">
                {props.title}
            </Text>
            <TextInput
         
            className="w-fit h-11 p-1.5 m-1  border border-gray-300 rounded-3xl"
            value={props.value}    
            secureTextEntry={props.secureTextEntry || false}
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
                
            />
        </View>
    )
}
export default Input;