import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 0,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default () => (
  <View style={styles.container} />
);
