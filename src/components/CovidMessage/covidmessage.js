import React from "react";
import { View,Text } from "react-native";
import my_style from "./style";
const CovidMessage  = (props) => {
    return(
        <View style = {my_style.container}>
            <Text  style = {my_style.title}> Chỉ ra ngoài trong trường hợp cần thiết</Text>
            <Text style = {my_style.text }> Khai báo y tế bắt buột đối với hành khách, 
            quý khách phải đảm bảo các qui định phòng chống dịch bệnh theo nhưng chỉ thị
            của Bộ y tế. Chỉ có tế đưa quý khách đén những vùng xanh không có dịch bệnh</Text>
            <Text style = {my_style.learnMore}> Tìm hiều thêm ? </Text>
        </View>
    );
};
export default CovidMessage;