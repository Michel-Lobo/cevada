import { StyleSheet } from "react-native";

const core = new StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    bgColor:{
        backgroundColor:"#FFEEB0"
    },
    title:{
        color:"#EC2045",
        fontSize:20,
    },
    subTitle:{
        color:"#F16146"
    },
    text:{
        color:"#2a2a2a"
    },
    label:{
        color:"#494712",
    }
});

export default core;