import React, { useContext,useState } from "react";
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
    const size= data.length -2;
    const label='+'+ size.toString()
   
    const contextState = useContext(LanguageContext);
    const[fullList,setFullList]=useState(false)
    const[moreLabel,setMoreLabel]=useState(label)
    let imgUri= require('../../assets/dp.jpg')
    if(image==='dp'){
imgUri= require('../../assets/dp.jpg')
    }
    let Strings: any = {}
    if (contextState != null) {

      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts

        }
    }

const showFullListData=()=>{
    setFullList(!fullList) 
                    if(fullList===true){

                        setMoreLabel('+'+size.toString())
                    }
                    else{
                        setMoreLabel('-'+size.toString())
                    }
}

    return (
        <View 
        className="w-auto rounded-2xl py-2 px-4 m-2 "
        style={{elevation:20,shadowRadius:10, backgroundColor:Colors.white}}>
           
            <View className="flex-row justify-between">
<View 

className="flex-row w-fit">
{fullList ? 

(<View style={{width:175}}>

<FlatList
showsHorizontalScrollIndicator={false}
data={data}
horizontal
renderItem={({item,index})=>{
    return(
        <TouchableOpacity
        
        style={{backgroundColor: Colors.lightorange}}
        className='w-auto rounded-full py-2 px-2 m-0.5 my-4  items-center '>
            <Text
            style={{color: Colors.orange,textTransform: "uppercase"}}
            className='text-sm '>{item.name}</Text>
        </TouchableOpacity>
    )
}}
keyExtractor={(item:{id:{toString: ()=> any}})=>{return  item.id.toString()}}
/>
</View>
)
:
 (
<FlatList

data={data.slice(0,2)}
horizontal
renderItem={({item,index})=>{
    return(
        <TouchableOpacity
        
        style={{backgroundColor: Colors.lightorange}}
        className='w-auto rounded-full py-2 px-2 m-0.5 my-4  items-center '>
            <Text
            style={{color: Colors.orange,textTransform: "uppercase"}}
            className='text-sm '>{item.name}</Text>
        </TouchableOpacity>
    )
}}
keyExtractor={(item:{id:{toString: ()=> any}})=>{return  item.id.toString()}}
/>
 ) 
        }
        <TouchableOpacity
                onPress={()=>{showFullListData()}}
                style={{backgroundColor: Colors.lightorange,}}
                className=' rounded-full self-center py-2 px-4    m-0.5  items-center '>
                    <Text
                    style={{color: Colors.orange,textTransform: "capitalize"}}
                    className='text-sm self-center '>{moreLabel}</Text>
                </TouchableOpacity>

</View>
<View style={{alignItems:'flex-end'}}>
<Image
            source={require('../../assets/tutorCardPic.png')}
            style={{width:100,height:60,bottom:40,alignItems:'flex-end',alignSelf:'flex-end'}}
            resizeMode='contain'
            />
</View>

            </View>
        
        <View className="flex-row">
            <Image
            source={imgUri}
            className='rounded-full h-10 w-10 self-start '
            />
            <View className="justify-center">
            <Text className="text-xl font-bold mx-2 ">{name}</Text>
            <Text className="text-sm  mx-2">from {sessions} sessions</Text>
            </View>

        </View>
            <View className="justify-center">
            <Text className="text-base font-bold ">Bio</Text>
            <Text  className="text-base ">{text}</Text>
            </View>
            
          <TouchableOpacity
          style={{backgroundColor: Colors.orange}}
          className="h-12 w-auto px-10 rounded-full m-2 self-center justify-center"
          >
            <Text className="text-white text-lg font-bold">View Profile</Text>
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