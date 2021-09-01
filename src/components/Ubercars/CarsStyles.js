import { StyleSheet } from "react-native";

const CarStyles = StyleSheet.create(
    {
        middleContainer :
    {
        flex : 1,
        marginHorizontal : 10,
    },
    rightContainer:
    {
        width : 100,
        alignItems : "center",
        flexDirection : "row",
        justifyContent : "flex-end"
    },
    container :
    {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        padding : 20
    },
    image :
    {
        height : 50,
        width : 50,
        resizeMode : "contain"
    },
    time :
    {

    },
    price :
    {
        fontWeight : "bold",
        fontSize : 16,
        marginLeft : 3
    },
    type :
    {
        fontWeight : "bold",
        fontSize : 16,
        marginBottom : 1
    }
    }
);
export default CarStyles;