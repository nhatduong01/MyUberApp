import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import Antdesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import styles from './styles';
const Homesearch = (props) => {
    return (
        <View >
            {/* Input box */}
            <View  style = {styles.inputBox}>
                <Text style = {styles.inputText}>
                    Điểm đến?
                    </Text> 
                <View style = {styles.timeContainer}>
                    <Antdesign name = {"clockcircle"} size = {16}/>
                    <Text>Bây giờ</Text>
                    <MaterialIcons name = {"keyboard-arrow-down"} size = {16}/>
                </View>
            </View>
            {/* Previous destination */}
            <View style = {styles.row}>
                <View style = {styles.iconContainer}>
                <Antdesign name = {"clockcircle"} size = {20} color ={'#ffffff'}/>
                </View>
                <Text style = {styles.destination}>Đại học Bách khoa</Text>
            </View>
            {/* Home */}
            <View style = {styles.row}>
                <View style = {styles.iconContainer}>
                    <Entypo name = {"home"} size = {20}/>
                </View>
                <Text style = {styles.destination}> Nhà </Text>
            </View>
        </View>
    );
};

export default Homesearch;
