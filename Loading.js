import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  activityIndicator: {
    margin: 40,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default () => (
  <ActivityIndicator color="green" size="large" style={styles.activityIndicator} />
);
