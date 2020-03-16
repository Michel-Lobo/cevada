import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../styles/colors'
const dim = Math.round(Dimensions.get('window').width);
const Style = new StyleSheet.create({

    container: {
        flexGrow: 1,
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'space-between',

    },
    backgroundImage: {
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    box: {
        width: (dim - 20),
        borderRadius: 5,
        margin: 10,
        padding: 10,
        alignContent: 'flex-start',
        backgroundColor: colors.primary,
        opacity: 0.8,
    },
    textItem: {
        fontSize: 22,
        color: colors.white,
        fontWeight: 'bold',
    },
    subTextItem: {
        fontSize: 12,
        color: colors.black,
        fontWeight: 'bold',
    },
    header: {
        marginTop: 30,
        marginBottom: 100,
    },
    subHeader: {
        width: dim - 40,
        paddingBottom: 5,
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
    },
    textSubHeader: {
        fontSize: 20
    },
    textHeader: {
        fontSize: 31,
        fontWeight: 'bold',
        color: "#804040"
    },
    boxDescription: {
        width: (dim - 20),
        margin: 10,
        padding: 10,
        alignContent: 'flex-start',
        backgroundColor: colors.white,
        opacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
    },
    textDescription: {
        color: "#030F0A",
        fontSize: 18
    },
    nameBeer: {
        color: colors.black,
        fontSize: 24
    },
    boxTitle: {
        marginTop: 30,
        marginBottom: 20,
        alignContent: 'center',
    },
    boxImage: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.white,
    },
moreInfo:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    alignContent:'center',
    flexWrap:'wrap'
},
info:{
    width: (dim - 45)/2,
        margin: 10,
        padding: 10,
        backgroundColor: colors.warning,
},
textInfo:{
    fontSize:18,
    fontWeight:'bold',
},
labelInfo:{
    fontSize:12,
},
headerList:{
  borderRadius:5,
    backgroundColor: colors.white,
    opacity: 0.8,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    alignItems:"center",
    margin:10,
    padding: 10,
    backgroundColor: colors.light
},
headerListText:{
   fontSize:18,
   fontWeight:'bold'
},
imageBeer:{
    alignContent:'center',
    alignSelf:'stretch',
    
}


});

export default Style;