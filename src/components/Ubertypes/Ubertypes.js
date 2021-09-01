import React from 'react'
import { View, Text, Pressable } from 'react-native'
import Ubercars from '../Ubercars/Ubercars'
import UberStyles from './Uberstyles'
import types from '../../assets/types'
const Ubertypes = () => {
    const comfirm = () =>
    {
        console.warn("Comfirmed")
    }
    return (
        <View>
            {types.map (Type => <Ubercars type = {Type}/>)}
            <Pressable onPress = {comfirm } style = {{
                width : '100%', backgroundColor : "black",
                padding : 10,
                margin : 10,
                alignItems : 'center'
            }}>
                <Text style = {{color : 'white', fontWeight : 'bold'}}>
                    Xác Nhận Đặt 
                </Text>
            </Pressable>
        </View>
    )
}

export default Ubertypes
