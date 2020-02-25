import React from "react";
import { StyleSheet, Image, View } from "react-native";

const Header = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 14,
        backgroundColor: "#3C3C3C"
      }}
    >
      <Image
        style={[styles.logo]}
        source={require("../assets/logo.png")}
        resizeMode="stretch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: { width: 61, height: 30 }
});

export default Header;
