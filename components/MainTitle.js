import React from "react";
import { Text, View } from "react-native";

const MainTitle = props => {
  return (
    <View>
      <Text style={{ color: "#FFFFFF", fontSize: 28, marginBottom: 16 }}>
        {props.title}
      </Text>
    </View>
  );
};

export default MainTitle;
