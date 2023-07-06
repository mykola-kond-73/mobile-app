import React, { FC } from "react"
import { PhotosItemType } from "../../../types/store/reducers"
import { ButtonMore, List } from "../../Fragments"
import { StyleSheet, View } from "react-native"
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../../types";

export const PhotosList: FC<PropsType> = ({ list, isLoad, navigation }) => {
    return (
        <View style={styles.align}>
            <View style={styles.align}>
                <List list={list} isLoad={isLoad} navigation={navigation} />
            </View>
            <View>
                <ButtonMore />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    align: {
        backgroundColor: '#5CCCCC',
        alignItems: 'center',
    },
})

type PropsType = {
    list: PhotosItemType[],
    isLoad: boolean,
    navigation: ProfileScreenNavigationProp
}
type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;