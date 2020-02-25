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
import colors from "./colors";
import MainTitle from "./components/MainTitle";
import Header from "./components/Header";
import Body from "./components/Body";

// Text = <p>
// View = <div>
// Button = <button>

// Pas de className dans React Native
// Dans React Native, tout est en `display: flex` et en `flex-direction: column` par défaut

//console.log({ name: "farid", phones: ["0603....."] });

export default function App() {
  const data = {
    movieTitle: "Interstellar",
    btnAdd: "+ ADD TO WATCHLIST",
    movieResume:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival",
    movieYear: 2014,
    peggy: "PG-13",
    duration: "2h 49min",
    kind: "Adventure, Drama, Sci-Fi",
    rate: {
      averageRate: 8.6,
      rateNumber: "1.1M",
      metaScore: 72,
      criticReviewNumber: 46
    },
    topBilledCast: [
      {
        name: "Ellen-Burstyn",
        role: "Igor",
        thumbnail: require(`./assets/cast/Ellen-Burstyn.jpg`)
      },
      {
        name: "John Lithgow",
        role: "Igor",
        thumbnail: require(`./assets/cast/John-Lithgow.jpg`)
      },
      {
        name: "Mackenzie Foy",
        role: "Igor",
        thumbnail: require(`./assets/cast/Mackenzie-Foy.jpg`)
      },
      {
        name: "Matthew-McConaughey",
        role: "Igor",
        thumbnail: require(`./assets/cast/Matthew-McConaughey.jpg`)
      },
      {
        name: "Ellen-Burstyn",
        role: "Igor",
        thumbnail: require(`./assets/cast/Ellen-Burstyn.jpg`)
      },
      {
        name: "Ellen-Burstyn",
        role: "Igor",
        thumbnail: require(`./assets/cast/Ellen-Burstyn.jpg`)
      }
    ],

    team: [
      { job: "Director", name: "Christopher Nolan" },
      {
        job: "Writers",
        name: "Jonathan Nolan(written by) and Christopher Nolan (writte by)"
      }
    ]
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ backgroundColor: "green" }}
        contentContainerStyle={{ flex: 1, backgroundColor: "#1F1F1F" }}
      >
        <Header></Header>
        <Body data={data}></Body>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 50,
    width: 50
  }
});
