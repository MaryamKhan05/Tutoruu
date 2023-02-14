import React from "react";
import { TouchableOpacity, Text,Image,View } from 'react-native'

interface Props {
    title: string
    onPress: () => void
    image?: string,
    color: string
    titleColor?: string
textSize?: number

}



const Button: React.FC<Props> = (props) => {
    //const[path,setPath]=useState('../../assets/googlelogo.png')
   let path=require('../../assets/facebooklogo.png')
    if(props.image != undefined){
        if(props.image ==='facebooklogo'){
            path=require('../../assets/facebooklogo.png')
        }
        else if(props.image ==='googlelogo'){
            path=require('../../assets/googlelogo.png')
            
        }
        else if(props.image==='arrowright'){
            path=require('../../assets/arrowright.png')

        }

    }

    return (
        

        <TouchableOpacity
        style={{backgroundColor:props.color,elevation:5}}
            className="  p-3 my-1.5 rounded-full justify-center"
            onPress={props.onPress}
        >
         {
props.image == undefined || null? <Text
style={{color: props.titleColor?props.titleColor:'white' ,alignSelf:'center'}}
className="text-lg font-bold text-white">
    {props.title}
</Text> 
        :
        <View className="flex-row justify-between items-center">

            <Image 
          
          source={path}
            resizeMode='contain'
            className='rounded-full h-7 w-7 self-start'
            />
           <View className= "w-full items-start">

            <Text
            style={{color: props.titleColor?props.titleColor:'white',fontSize:props.textSize?props.textSize:18,textAlign:'center'}}
            className="  mx-1 font-bold text-white self-center">
                {props.title}
            </Text>
           </View>
          </View>
         }
         

                
        </TouchableOpacity>
        
    )
}
export default Button;