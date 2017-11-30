import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
  }
});

export default ({ onChangeText }) => (
  <View style={styles.container}>
    <TextInput onChangeText={onChangeText} style={styles.input}/>
  </View>
);
