import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const RatingBlock = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 16,
        backgroundColor: "#191919",
        padding: 14
      }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <Ionicons name="ios-star" color="#DFAC19" size={26} />
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text
            style={{
              color: "#FFF",
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            {props.rate.averageRate}
          </Text>
          <Text
            style={{
              color: "#FFF"
            }}
          >
            /10
          </Text>
        </View>
        <Text
          style={{
            color: "#5A5A5A"
          }}
        >
          {props.rate.rateNumber}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Ionicons name="ios-star-outline" color="#FFF" size={26} />
        <Text
          style={{
            color: "#FFF",
            fontWeight: "bold"
          }}
        >
          RATE THIS
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#53C03E",

            width: 22,
            height: 22,

            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#FFF"
            }}
          >
            {props.rate.metaScore}
          </Text>
        </View>
        <Text
          style={{
            color: "#FFF"
          }}
        >
          Metascore
        </Text>
        <Text
          style={{
            color: "#5A5A5A",
            fontSize: 12
          }}
        >
          {props.rate.criticReviewNumber} critic reviews
        </Text>
      </View>
    </View>
  );
};

export default RatingBlock;
