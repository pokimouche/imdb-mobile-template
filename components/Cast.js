import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
const Cast = props => {
  return (
    <View style={{ backgroundColor: "#191919" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
          marginTop: 32
        }}
      >
        <Text style={{ fontSize: 20, color: "#FFFFFF" }}>Top Billed Cast</Text>
        <Text style={{ fontSize: 12, color: "#13A0FF" }}>SEE ALL</Text>
      </View>
      <ScrollView
        horizontal={true}
        style={{ backgroundColor: "green" }}
        contentContainerStyle={{
          backgroundColor: "#191919",
          flexDirection: "row"
        }}
      >
        {props.data.topBilledCast.map((element, index) => {
          return (
            <View
              key={index}
              style={{ marginRight: 6, backgroundColor: "#1F1F1F" }}
            >
              <Image
                style={[styles.castThumbnail]}
                source={element.thumbnail}
                resizeMode="stretch"
              />
              <View style={{ padding: 14, width: 155 }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 14,
                    color: "#FFFFFF",
                    marginBottom: 4
                  }}
                >
                  {element.name}
                </Text>
                <Text style={{ fontSize: 14, color: "#AEAEAE" }}>
                  {element.role}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  castThumbnail: {
    height: 230,
    width: 155
  }
});

export default Cast;
