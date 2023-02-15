import React, { useContext } from "react";
import { View, Text, StyleSheet ,TouchableOpacity,FlatList,Image} from 'react-native';
import Colors from "../../assets/Colors";
import Btn from "./Button";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
import { Classes } from "../screens/StudentFlow/DummyData";
import UserImage from "./userImage";

interface Props {
    text: string;
    name: string;
    sessions: string
    data: any
    image: string
}

const TutorCard: React.FC<Props> = ({ text, name ,data,image,sessions}) => {
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
        className="w-auto rounded-2xl py-2 px-4 m-3  "
        style={{elevation:20,backgroundColor:Colors.white}}>

<FlatList
        data={data}
        horizontal
        renderItem={({item,index})=>{
            return(
                <TouchableOpacity
                
                style={{backgroundColor: Colors.lightorange}}
                className='w-auto rounded-full py-2 px-4 m-3  items-center '>
                    <Text
                    style={{color: Colors.orange}}
                    className='text-sm'>{item.name}</Text>
                </TouchableOpacity>
            )
        }}
        keyExtractor={(item:{id:{toString: ()=> any}})=>{return  item.id.toString()}}
        />
        <View className="flex-row">
            <Image
            source={{uri: image}}
            className='rounded-full h-14 w-14 self-start '
            />
            <View className="justify-center">
            <Text className="text-xl font-bold mx-3">{name}</Text>
            <Text className="text-sm  mx-3">from {sessions} sessions</Text>
            </View>

        </View>
            <View className="justify-center">
            <Text className="text-base font-bold ">Bio</Text>
            <Text  className="text-base ">{text}</Text>
            </View>
            
          <TouchableOpacity>
            
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      
        elevation: 10,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        borderRadius: 20,
        // alignItems: 'center',
        justifyContent: 'center',
        
        padding: 15,
        // paddingTop:20
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        // backgroundColor:'red'
    },
    heading: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        // backgroundColor:'red'
    }
})

export default TutorCard