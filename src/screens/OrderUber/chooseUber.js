import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import RouteMap from '../../components/RouteMap/routeMap'
import Ubertypes from '../../components/Ubertypes/Ubertypes'
const SearchResult = () => {
    return (
        <View style = {{display : 'flex', justifyContent : 'space-between'}}>
            <View style = {{height : Dimensions.get('window').height - 350}}>
            <RouteMap/>
            </View>
            <View style ={{height : 350}}>
            <Ubertypes/>
            </View>
            
        </View>
    )
}

export default SearchResult
