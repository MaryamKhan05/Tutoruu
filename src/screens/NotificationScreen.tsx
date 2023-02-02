import React, { useContext } from "react";
import { Text, View, Image, SafeAreaView, ScrollView, SectionList, StyleSheet } from "react-native";
import Header from "../components/Header";
import Colors from '../../assets/Colors';
import Languages from '../languages';
import LanguageContext from '../languages/languageContext';
const sections = [
    {
        title: 'Today',
        data: [
            {
                key: 'item1',
                msg: 'Victoria Hanson mentioned you in a comment',
                time: '1 hrs ago',
                avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
            },
        ],
    },
    {
        title: 'Yesterday',
        data: [
            {
                key: 'item2',
                msg: 'Victoria Hanson mentioned you in a comment',
                time: '1 hrs ago',
                avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
            },
        ],
    },
    {
        title: 'Last Week',
        data: [
            {
                key: 'item3',
                msg: 'Victoria Hanson mentioned you in a comment',
                time: '1 hrs ago',
                avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
            },
        ],
    },
];

const renderItem = ({ item }: { item: { key: string } }) => (
    <View style={item.key === 'item1' ? styles.card1 : styles.card2}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={item.key === 'item1' ? styles.msg1 : styles.msg2}>{item.msg}</Text>
        <Text style={styles.time}>{item.time}</Text>
    </View>
);

const renderSectionHeader = ({ section }: { section: { title: string } }) => (
    <View >
        <Text style={styles.title}>{section.title}</Text>
    </View>
);


const Notification: React.FC = () => {
    const contextState = useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Header headerTitle={Strings.ST24} />
                <View style={styles.innerContainer}>
                    <SectionList
                        sections={sections}
                        renderItem={renderItem}
                        renderSectionHeader={renderSectionHeader}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    innerContainer: {
        width: '99%',
        height: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 10
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 24,
        color: Colors.black,
        margin: 10
    },
    time: {
        fontSize: 10,
        fontWeight: '300',
        lineHeight: 15,
        color: Colors.black,
        fontStyle: 'normal',
        alignSelf: 'center',
        margin: 10
    },
    card1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.lightorange,
        paddingVertical: 10,
        paddingHorizontal: 3
    },
    card2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 3
    },
    msg1: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        fontStyle: 'normal',
        alignSelf: 'center',
        color: Colors.orange
    },
    msg2: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        fontStyle: 'normal',
        alignSelf: 'center',
        color: Colors.black
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 5,
        marginLeft: 10,
        alignSelf: 'center',
    },
})

export default Notification