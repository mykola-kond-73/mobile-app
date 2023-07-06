import React,{FC} from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { PhotosListContainer, PhotosListItemContainer } from "../Screens";
import { RootStackParamList } from "../../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator:FC=()=>{
    return(
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name='List' component={PhotosListContainer} options={{title:'Photos List'}}/>
            <Stack.Screen name='ListItem' component={PhotosListItemContainer} options={{title:'Photo'}}/>
        </Stack.Navigator>
    )
}