import React, { useContext } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import Colors from "../../assets/Colors";
import Feather from "react-native-vector-icons/Feather"
import Header from "../components/Header";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
import Spacer from "../components/Spacer";
import Divider from "../components/Divider";
import Heading from "../components/Heading";
import Btn from "../components/Button";
import Field from "../components/InputField";
import User from "../components/UserProfile";
const Edit: React.FC = ({ followers }) => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={Strings.ST33} />
            <User/>
            <Divider />
            <Spacer/>
            <View style={styles.innerContainer}>
                <View style={{ justifyContent: 'center', alignSelf: 'center', width: '95%' }}>
                    <Heading title={Strings.ST26} />
                    <Field height={80} borderRadius={20} width={'100%'} />
                </View>
                <Spacer />
                <View style={styles.grid}>
                    <View style={styles.row1} >
                        <View style={styles.box1}>
                            <Heading title={Strings.ST34} />
                            <Field borderRadius={50} />
                        </View>
                        <View style={styles.box2}>
                            <Heading title={Strings.ST35} />
                            <Field borderRadius={50} />
                        </View>
                    </View>
                    <Spacer />
                    <View style={styles.row2}>
                        <View style={styles.box3}>
                            <Heading title={Strings.ST36} />
                            <Field borderRadius={50} />
                        </View>
                        <View style={styles.box4}>
                            <Heading title={Strings.ST37} />
                            <Field borderRadius={50} />
                        </View>
                    </View>
                </View>
            </View>
            <Btn text={Strings.ST38} width={'85%'} height={'6%'} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1
    },
    innerContainer: {
        flex: 1,
        width: '95%',
        // backgroundColor:'red',
        alignSelf: 'center'
    },
    imageContainer: {
        // backgroundColor: 'yellow',
        width: '25%',
        height: '100%',
        // justifyContent: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        // marginLeft: 10,
        marginRight: 5
    },
    userNameContainer: {
        // backgroundColor: 'orange',
        width: '50%',
        height: '100%',
        // justifyContent: 'center'
    },
    userName: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        color: Colors.black,
        textTransform: 'capitalize'
    },
    iconContainer: {
        // backgroundColor: 'green',
        width: '20%',
        height: '100%',
        marginTop: '10%'
    },
    icon: {
        alignSelf: 'flex-end',
        marginRight: 10
    },
    column: {
        flexDirection: 'column',
        margin: 10,
        // backgroundColor:'red'

    },
    row: {
        flexDirection: 'row',
        // backgroundColor:'red',
        margin: 10
        // justifyContent: 'space-between'
    },
    grid: {
        height: '20%',
        width: '95%',
        // backgroundColor: 'red',
        alignSelf: 'center'
    },
    row1: {
        // backgroundColor: 'yellow',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row2: {
        // backgroundColor: 'yellow',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box1: {
        // backgroundColor: 'green',
        width: '50%'
    },
    box2: {
        // backgroundColor: 'orange' ,
        width: '40%'
    },
    box3: {
        // backgroundColor:'pink',
        width: '50%'
    },
    box4: {
        // backgroundColor:'red',
        width: '40%'
    }
})

export default Edit