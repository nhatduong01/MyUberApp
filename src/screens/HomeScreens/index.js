import React from "react";
import { View, Dimensions, Text } from "react-native";
import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage/covidmessage";
import Homesearch from "../../components/HomeSearch/homesearch";
const HomeScreen = (props) => {
  return (
    <View>
        <HomeMap/>
        <CovidMessage/>
        <Homesearch/>
    </View>
  );
};

export default HomeScreen;