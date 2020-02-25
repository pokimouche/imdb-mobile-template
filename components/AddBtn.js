import React from "react";
import { Text, TouchableHighlight } from "react-native";

const AddBtn = props => {
  return (
    <TouchableHighlight
      underlayColor="#0D62AF"
      style={{
        backgroundColor: "#4377B9",
        height: 36,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",

        marginTop: 14
      }}
      onPress={() => {
        alert("pressed");
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {props.data.btnAdd}
      </Text>
    </TouchableHighlight>
  );
};

export default AddBtn;
