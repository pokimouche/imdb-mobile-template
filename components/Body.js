import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import MainTitle from "./MainTitle";
import MovieInfo from "./MovieInfos";
import AddBtn from "./AddBtn";
import RatingBlock from "./RatingBlock";
import Cast from "./Cast";
import TeamItem from "./TeamItem";

const Body = props => {
  return (
    <View style={([styles.body], { backgroundColor: "#1F1F1F" })}>
      <View style={{ padding: 14, backgroundColor: "#191919" }}>
        <MainTitle title="Interstellar"></MainTitle>
        <MovieInfo data={props.data}></MovieInfo>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#191919",
          padding: 14
        }}
      >
        <Image
          style={[styles.movie_poster]}
          source={require("../assets/interstellar.jpg")}
          resizeMode="stretch"
        />
        <View style={{ flex: 1, marginLeft: 14 }}>
          <Text numberOfLines={5} style={{ color: "#FFF" }}>
            A team of explorers travel through a wormhole in space in an attempt
            to ensure humanity's survival
          </Text>
          <AddBtn data={props.data}></AddBtn>
        </View>
      </View>
      <RatingBlock rate={props.data.rate}></RatingBlock>
      <Cast data={props.data}></Cast>
      {props.data.team.map((element, index) => {
        return (
          <TeamItem
            key={index}
            job={element.job}
            name={element.name}
          ></TeamItem>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  movie_poster: { width: 110, height: 163 },
  body: { flex: 1 }
});

export default Body;
