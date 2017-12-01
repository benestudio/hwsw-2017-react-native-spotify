import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    margin: 40,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default () => (
  <Text style={styles.text}>No results found...</Text>
);
