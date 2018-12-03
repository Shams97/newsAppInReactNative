import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from "react-native"

export default class Header extends Component {
  render() {

    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>

        <Image style={{ height: 60, flexDirection: "row", backgroundColor: "red" }}
          resizeMode="cover"
          source={require("../assets/snack-icon.png")} />

        <Text style={styles.title}>News Application </Text>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  HeaderContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4286f4"

  },
  image: { height: 40, width: 95 },
  title: { marginLeft: 20 }
});
