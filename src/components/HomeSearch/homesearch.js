import React from 'react';
import { View, Text } from 'react-native';
import Antdesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Homesearch = (props) => {
    return (
        <View>
            {/* Input box */}
            <View>
                <Text>
                    Điểm đến?
                    </Text> 
                <View>
                    <Antdesign name = {"clockcircle"} size = {16}/>
                    <Text>Bây giờ</Text>
                    <MaterialIcons name = {"keyboard-arrow-down"} size = {16}/>
                </View>
            </View>
            {/* Previous destination */}
            {/* Home */}
        </View>
    );
};

export default Homesearch;
