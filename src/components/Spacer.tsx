import React from "react";
import { View, StyleSheet } from 'react-native';

interface Props {
  children?: React.ReactNode;
}

const Spacer: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.spacer}>{children}</View>
  )
}

const styles = StyleSheet.create({
  spacer: {
    marginBottom: 15,
  },
})

export default Spacer