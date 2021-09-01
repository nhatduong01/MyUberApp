import React from "react";
import { View, Dimensions, Text } from "react-native";
import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage/covidmessage";
import Homesearch from "../../components/HomeSearch/homesearch";
const HomeScreen = (props) => {
  return (
    <View>
            <View style = {{height : Dimensions.get('window').height - 380}}>
            <HomeMap/>
            </View>
        <CovidMessage/>
        <Homesearch/>
    </View>
  );
};

export default HomeScreen;