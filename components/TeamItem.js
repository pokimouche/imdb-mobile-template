import React from "react";
import { View, Text } from "react-native";

const TeamItem = props => {
  return (
    <View style={{ paddingBottom: 20 }}>
      <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}>
        {props.job}
      </Text>
      <Text style={{ color: "#AEAEAE" }}>{props.name}</Text>
    </View>
  );
};

export default TeamItem;
