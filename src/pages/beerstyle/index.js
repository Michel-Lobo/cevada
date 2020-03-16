import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import style from './style';
import api from '../../api/beer'
export default function ListStyles({ route, navigation }) {
    const { categoryId } = route.params;
    const renderHeader = ()=>{
        return (
            <View style={style.headerList}>
                <Text style={style.headerListText} >Estilos</Text>
            </View>
        )
    }

    return (
        <ImageBackground source={require('../../assets/bgImage.png')} style={style.backgroundImage}>
           
            <FlatList data={api.getStyles(categoryId)} keyExtractor={(item) => item.id.toString()} 
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={style.box} 
                    onPress={()=> navigation.navigate('DetailStyle', {styleId:item.id, title: item.name})}>
                        <Text style={style.textItem}>{item.name}</Text>
                        <Text style={style.subTextItem}>Amargor(IBU): {item.ibu}</Text>
                   </TouchableOpacity>
                )
            }}
            ListHeaderComponent={renderHeader} />
        </ImageBackground>
    )

}
