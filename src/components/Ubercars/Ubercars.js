import React from 'react'
import { View, Text, Image } from 'react-native'
import CarStyles from './CarsStyles'
import Ionicons from "react-native-vector-icons/Ionicons"
const Ubercars = (props) => {
    const getImage = () =>
    {
        if (type.type  === "UberX")
            return require ("../../assets/UberX.png");
        if (type.type  === "Comfort")
            return require ("../../assets/Comfort.png");
        if (type.type  === "UberXL")
            return require ("../../assets/UberXL.png");
    }
    const {type} = props;
    return (
        <View style = {CarStyles.container}>
            <Image style = {CarStyles.image} source = { getImage()}/>
            <View style  = {CarStyles.middleContainer}>
                <Text style = {CarStyles.type}>
                    {type.type} {' '}
                    <Ionicons name = {"person"} size = {12} />
                    3
                </Text>
                <Text style = {CarStyles.time}>
                    7:07pm drop off
                </Text>
            </View>
            <View style = {CarStyles.rightContainer}>
                <Ionicons name = {"pricetag"} size = {18} color = {"#5c94ed"}/>
                <Text style = {CarStyles.price}>
                    est. ${type.price}
                </Text>
            </View>
        </View>
    )
}

export default Ubercars
