import React from "react";
import {Text, View, StyleSheet} from 'react-native';


const Spacer: React.FC =({children})=>{
    return(
      <View style={styles.spacer}>{children}</View>
    )
}

const styles = StyleSheet.create({
    spacer: {
        marginBottom: 15,
        // backgroundColor:'red',
        // width:100,
        // height:50
      },
})

export default Spacer