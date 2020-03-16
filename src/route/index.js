import 'react-native-gesture-handler';
import React, {Component} from "react"
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home'
import ListStyles from '../pages/beerstyle';
import DetailStyle from '../pages/beerstyle/detail'
const Stack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{title:'', headerShown:false}}/>
                <Stack.Screen name="ListStyles" component={ListStyles} options={({ route }) => ({ title: route.params.title })}/>
                <Stack.Screen name="DetailStyle" component={DetailStyle} options={({ route }) => ({ title: route.params.title })}/>
            </Stack.Navigator>
            </NavigationContainer>
    );
    
}