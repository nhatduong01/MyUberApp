import React from "react";

import { View, Text } from "react-native";

const HomeMap = (props) =>
{
    return(
        <View style = {{height : 400, backgroundColor : "#4e9636", 
        justifyContent: 'center', alignItems:'center'}}>
            <Text>
                I am a map
            </Text>
        </View>
    );
};
export default HomeMap;
