import React from 'react'
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native'
import style from './style';
import images from '../../data/imagesRef'
import api from '../../api/beer'
export default function DetailStyle({route}) {
    const { styleId } = route.params;
    
        const data = api.getStyleById(styleId)

        console.log(data)
        return (
            <ImageBackground source={require('../../assets/bgImage.png')} style={style.backgroundImage}>
              <ScrollView contentContainerStyle={style.container}>
               <View style={style.boxTitle}>
                   <Text style={style.nameBeer}>{data.name}</Text>
               </View>
                <View style={style.boxImage}>
               <Image style={style.imageBeer} source={api.getImage(styleId)}/>
               </View>
               <View style={style.boxDescription}>
                   <Text style={style.textDescription}>{data.description}</Text>
                   <Text>Exemplos:{data.exemples}</Text>
               </View>
             
               <View style={style.moreInfo}>
               
               <View style={style.info}>
                <Text style={style.labelInfo}>Gravidade inicial</Text>
                   <Text style={style.textInfo}>{data.begin_gravity}</Text>
               </View>
               <View style={style.info}>
               <Text style={style.labelInfo}>Gravidade final</Text>
                   <Text style={style.textInfo}>{data.end_gravity}</Text>
               </View>
               <View style={style.info}>
               <Text style={style.labelInfo}>Amargor(IBU)</Text>
                   <Text style={style.textInfo}>{data.ibu}</Text>
               </View>
               <View style={style.info}>
               <Text style={style.labelInfo}>% Alcolico</Text>
                   <Text style={style.textInfo}>{data.abv}</Text>
               </View>
               <View style={style.info}>
               <Text style={style.labelInfo}>SRM</Text>
                   <Text style={style.textInfo}>{data.srm}</Text>
               </View>
               </View>
               </ScrollView>
            </ImageBackground>
        )
}
