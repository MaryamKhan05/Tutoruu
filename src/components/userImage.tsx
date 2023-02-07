import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native'


interface Props {
    width: number;
    height: number;
}
const UserImage: React.FC<Props> = ({ width, height }) => {
    return (
        <View style={styles.imageContainer}>
            <Image source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar3.png' }} style={[styles.image, { width, height }]} />
        </View>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        // backgroundColor: 'yellow',
        // width: '25%',
        // height: '100%',
        justifyContent: 'center'
    },
    image: {
        // width: 80,
        // height: 80,
        borderRadius: 40,
        // marginLeft: 10,
        marginRight: 5
    },
})
export default UserImage