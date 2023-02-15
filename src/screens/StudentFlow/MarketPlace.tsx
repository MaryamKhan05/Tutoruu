import React,{useState,useContext} from 'react'
import { SafeAreaView, TextInput, TouchableOpacity,Text, View,FlatList } from 'react-native'



import { Classes } from './DummyData';


import { FontAwesome } from '@expo/vector-icons';
import LanguageContext from '../../languages/languageContext';
import Languages from '../../languages';
import Colors from '../../../assets/Colors';
import Username from '../../components/UserName';
import Spacer from '../../components/Spacer';
import TutorCard from '../../components/TutorCard';

const sessions=[
    {
        id:0,
        type: 'online',
        status:'awaiting comfirmation',
        time: "2.30 P.M",
        day: 'Monday',
        title: 'Macro Economics 135'
    }
]
interface Props{
    navigation: any
}
const MarketPlace:React.FC<Props>=({navigation})=>{
    const contextState = useContext(LanguageContext);
    let Strings: any = {}
    if (contextState != null) {
  
      const  language = contextState.language
        if (language === 'en') {
            Strings = Languages[0].texts
  
        }
    }
 const[classes,setClasses]=useState(Classes)
 const[backgroundEnabled,setBackgroundEnabled]=useState(0)
    const[newClass,setNewClass]=useState('')
    return(
<SafeAreaView className='flex-1 justify-center bg-white'>
    <View  className='flex-1 '>
    <Username />
    <View style={{borderBottomWidth:2,margin:5,borderColor: Colors.gray}}></View>
    <Spacer/>
    <View className='flex-row w-fit justify-between items-center gap-x-4 h-12 m-4 my-1  p-3 rounded-full border border-gray-300'>

    <TextInput
    placeholder='Add Classes'
    value={newClass}
    onChangeText={(text)=>{setNewClass(text)}}
    />
    <TouchableOpacity
    onPress={()=>{alert(newClass)}}
    >
    
    <FontAwesome name="plus" size={24}  color={Colors.gray}  />
    </TouchableOpacity>
    </View>
    <View>
        <FlatList
        data={classes}
        horizontal
        renderItem={({item,index})=>{
            return(
                <TouchableOpacity
                onPress={()=>{setBackgroundEnabled(index)}}
                style={{backgroundColor: backgroundEnabled == index? Colors.lightorange: Colors.gray}}
                className='w-auto rounded-full py-2 px-4 m-3  items-center '>
                    <Text className='text-sm'>{item.name}</Text>
                </TouchableOpacity>
            )
        }}
        keyExtractor={(item:{id:{toString: ()=> any}})=>{return  item.id.toString()}}
        />
        
    </View>
    <View className='m-3 justify-center' >
        <Text className='text-xl font-medium text-center m-5 self-start'>{Strings.ST80}</Text>
        <FlatList
         style={{elevation:20,borderRadius:20,backgroundColor:Colors.white}}
        data={sessions}
        renderItem={({item})=>{
            return(
              
                <View
               
                className='  h-fit p-5 '>
<View className='flex-row gap-10 justify-between'>
                    <Text
                    style={{color:Colors.orange,backgroundColor:Colors.lightorange}}
                    className='text-sm font-bold text-justify p-2 w-auto rounded-full' >{item.status}</Text>
                    <Text className='text-sm font-bold text-justify  w-auto' >{item.time}</Text>
    </View>
                    <Text className='text-sm font-bold text-justify '>{item.type}</Text>
                    <Text className='text-sm font-bold text-justify '>{item.day}</Text>
                    <Text className='text-sm font-bold text-justify '>{item.title}</Text>
                </View>
                  
            )
        }}
        keyExtractor={item=>{return item.id.toString()}}
        
        />
        <TouchableOpacity className='self-center items-center m-3'>
        <Text 
        style={{color: Colors.orange}}
        className='text-sm font-bold'>{Strings.ST81}</Text>
        </TouchableOpacity>
    </View>
    <View>
        <TutorCard
        image='https://www.bootdey.com/img/Content/avatar/avatar1.png'
        data={classes}
        name='Hamza'
        sessions='4'
        text='hamzaq is skjsk'
        key={'hamza'}
        />
    </View>

    </View>
</SafeAreaView>
    )

}
export default MarketPlace;