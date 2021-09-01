import React from "react";

import { View, Text, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
const RouteMap = (props) =>
{
    const GOOGLE_MAPS_APIKEY = "AIzaSyDIHl5v5j2I1SDV76lKVkGGhUNRWjsOovk";
    const origin  = 
    {
        latitude: 37.78825,
        longitude: -122.4324,
    };
    const destination =
    {
        latitude: 37.78025,
        longitude: -122.4024,
    }
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
                <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                />
                </MapView>

    );
};
export default RouteMap;
