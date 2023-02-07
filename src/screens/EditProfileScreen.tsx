import React, { useContext } from "react";
import { View, SafeAreaView, StyleSheet } from 'react-native'
import Colors from "../../assets/Colors";
import Header from "../components/Header";
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
import Spacer from "../components/Spacer";
import Divider from "../components/Divider";
import Heading from "../components/Heading";
import Btn from "../components/Button";
import Field from "../components/InputField";
import User from "../components/UserProfile";
import UserImage from "../components/userImage";



interface Props {
    followers: undefined;
  }

const Edit: React.FC<Props> = ({ followers }) => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={Strings.ST33} />
            <Spacer />
            <View style={styles.userProfileContainer}>
                <UserImage width={80} height={80}/>
                <User route={''} />
            </View>
            <Spacer />
            <Divider />
            <Spacer />
            <Spacer />
            <View style={styles.innerContainer}>
                <View style={{ justifyContent: 'center', alignSelf: 'center', width: '95%', }}>
                    <Heading title={Strings.ST26} />
                    <Field height={80} borderRadius={20} width={'98%'} />
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
        alignSelf: 'center'
    },
    imageContainer: {
        width: '25%',
        height: '100%',
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 5
    },
    userProfileContainer: {
        flexDirection: 'row',
        height: '10%',
        width: '95%',
        alignSelf: 'center',
        marginLeft: 15
    },
    userNameContainer: {
        width: '50%',
        height: '100%',
    },
    userName: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        color: Colors.black,
        textTransform: 'capitalize'
    },
    iconContainer: {
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

    },
    row: {
        flexDirection: 'row',
        margin: 10
    },
    grid: {
        height: '20%',
        width: '95%',
        alignSelf: 'center'
    },
    row1: {
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row2: {
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box1: {
        width: '50%'
    },
    box2: {
        width: '40%'
    },
    box3: {
        width: '50%'
    },
    box4: {
        width: '40%'
    }
})

export default Edit