import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  }
});

export default ({ item, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
    <Image source={{ uri: item.imageUri }} style={styles.image}/>
    <Text>{item.title}</Text>
  </TouchableOpacity>
);
