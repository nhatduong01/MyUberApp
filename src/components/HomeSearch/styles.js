import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
{
    inputBox : {
        backgroundColor : '#cacfcc',
        margin : 10,
        padding : 10,
        flexDirection: "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    inputText :
    {
        fontSize : 18,
        fontWeight : '600',
        color : '#3c3d3c'
    },
    timeContainer :
    {
        flexDirection : "row",
        width : 120,
        justifyContent : "space-between",
        padding : 10,
        backgroundColor : '#fff',
        borderRadius : 50
    },
    row :
    {
        flexDirection : "row",
        padding : 10,
        alignItems : "center",
        borderBottomWidth : 1,
        borderBottomColor : '#c7c9c8'
    },
    iconContainer : 
    {
        backgroundColor : '#888a89',
        padding : 10,
        borderRadius : 25
    },
    destination :
    {
        marginLeft : 10,
        fontWeight : "600",
        fontSize : 17
    }
}
);
export default styles;