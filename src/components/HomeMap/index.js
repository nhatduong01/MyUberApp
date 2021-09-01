import React from "react";

import { View, Text, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const HomeMap = (props) =>
{
    return(
                    <MapView
            style = {{height : '100%', width : '100%'}}
            provider = {PROVIDER_GOOGLE}
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
            >
                <Marker
                coordinate={{ latitude : 37.78825 , longitude : -122.4324 }}
                >
                    <Image source = {require  ('../../assets/Comfort.png')}
                    style = {{height : 30 , width : 30, resizeMode : "contain"}}/>
                    </Marker>
                </MapView>

    );
};
export default HomeMap;
