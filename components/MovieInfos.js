import React from "react";
import { Text } from "react-native";
const MovieInfo = props => {
  console.log(props.data);
  return (
    <Text
      style={{ color: "#838383" }}
    >{`${props.data.movieYear} ${props.data.peggy} ${props.data.duration} ${props.data.kind}`}</Text>
  );
};

export default MovieInfo;
