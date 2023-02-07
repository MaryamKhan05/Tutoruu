import React, { useState } from "react";
import { 
    Text, 
    View, 
    FlatList, 
    StyleSheet, 
    Image, 
    TouchableOpacity, 
    SafeAreaView 
} from 'react-native'
import Colors from "../../assets/Colors";
import Auc from "../components/Auc";
import Header from "../components/Header";
import Spacer from "../components/Spacer";


const Screen1: React.FC = () => {
    return (
        <FlatList
        showsVerticalScrollIndicator={false}
        data={messageData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} />
    )
}
const Screen2: React.FC = () => {
    return (
        <Text>screen 2 </Text>
    )
}
const messageData = [
    {
        id: 1,
        sender: 'John',
        avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
        image: 'https://www.bootdey.com/image/580x580/00BFFF/000000',
    },
    {
        id: 2,
        sender: 'Jane',
        avatar: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
        image: 'https://www.bootdey.com/image/580x580/FF00FF/000000',
    },
    {
        id: 3,
        sender: 'John',
        avatar: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        image: 'https://www.bootdey.com/image/580x580/008000/000000',
    },
]
const renderItem = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image style={styles.avatar} source={{ uri: item.avatar }} />
                <Text style={styles.sender}>{item.sender}</Text>
                <View style={{ marginLeft: '45%' }}>
                    <Auc width={93} height={30} text="Following" />
                </View>
            </View>
        </View>
    )
}
const Followers: React.FC = () => {
    const [selectedData, setSelectedData] = useState(Screen1);
    const [focused, setFocused] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle="Ragnar-Lothbrok" />
            <Spacer/>
            <View style={{ flexDirection: 'row', backgroundColor: Colors.white }}>
                <TouchableOpacity style={focused? styles.InActiveButton:styles.ActiveButton
 } onPress={() => {
                    setSelectedData(Screen1);
                    setFocused(false);
                }}>
                    <Text style={{ color: focused ?  Colors.black:Colors.orange  }} >Screen1 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={!focused? styles.InActiveButton: styles.ActiveButton} onPress={() => {
                    setSelectedData(Screen2);
                    setFocused(true);
                }}>
                    <Text style={{ color: !focused ? Colors.black : Colors.orange }}>Screen2 </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
                <Spacer />
                <View style={{}}>{selectedData}</View>
            </View>  
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        // backgroundColor:'yellow'   
    },
    innerContainer: {
        // flex: 1,
        width: '100%',
        alignSelf: 'center',
        // backgroundColor:'red',
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        // backgroundColor:'red'
        // justifyContent:'space-between'
    },
    card: {
        // padding: 20,
        // borderRadius: 10,
        margin: 5,
        // backgroundColor: 'red'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 10
    },
    sender: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 18
    },
    ActiveButton: {
        padding: 12,
        // margin: 10,
        justifyContent:'center',
        alignItems:'center',
        width:200,
        backgroundColor:Colors.lightorange,
    },
    InActiveButton: {
        padding: 12,
        // margin: 10,
        justifyContent:'center',
        alignItems:'center',
        width:200,
        backgroundColor:Colors.background,
        shadowColor:Colors.gray,
        shadowOpacity:0.5,
        shadowOffset: { width: 2, height: 5 },
        elevation: 3,
    },
})


export default Followers