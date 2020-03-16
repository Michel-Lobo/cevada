import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, ImageBackground, FlatList } from 'react-native'
import Style from './style'
import api from '../../api/beer'

export default function index({ route, navigation }) {
    const categories = api.getAllCategory();
    console.log(categories)
    return (
        <ImageBackground source={require('../../assets/bgImage.png')} style={Style.backgroundImage}>
            <View style={Style.header}>
                <Text style={Style.textHeader}>Tabela de Cervejas</Text>
            </View>
            <View style={Style.subHeader}>
                <Text style={Style.textSubHeader}>Categorias de cervejas</Text>
            </View>

                <FlatList style={Style.container} data={categories}
                numColumns={2}
                 keyExtractor={(item) => item.categoryId.toString()}
                    renderItem={({ item }) => {
                        return (
                           
                            <TouchableOpacity style={Style.box} onPress={() => navigation.navigate('ListStyles', { categoryId: item.categoryId, title: item.category_name })}>
                                <Text style={Style.textbox}>{item.category_name}</Text>
                            </TouchableOpacity>
                        )
                    }} />
          
        </ImageBackground>
    )
}

