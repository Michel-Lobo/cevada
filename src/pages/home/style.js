import {StyleSheet, Dimensions} from 'react-native'
import colors from '../../styles/colors'
const dim = Math.round(Dimensions.get('window').width);
const Style = new StyleSheet.create({
  
    container:{
        flexGrow: 1,
        flexWrap:'wrap',
        flexDirection:'row',
        
    },
    backgroundImage:{
        alignContent: 'center',
        alignItems:'center',
        width: '100%',
        height: '100%',
    },
    box:{
        flexDirection:'column',
        width:(dim - 45)/2,
        height:100,
        borderRadius:5,
        margin:10,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.success,
opacity: 0.8,
    },
    textbox:{
        color:colors.white,
        fontWeight:'bold',
    },
    header:{
        marginTop:30,
        marginBottom:50,
    },
    subHeader:{
        width:dim-40,
        paddingBottom:5,
        alignContent:'center',
        alignItems:'center',
        marginBottom:10,
        borderBottomWidth:1,
    },
    textSubHeader:{
        fontSize:20
    },
    textHeader:{
        fontSize: 31,
        fontWeight:'bold',
        color:"#804040"
        
    },
    


});

export default Style;