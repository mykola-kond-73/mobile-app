import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { setPhoto } from "../../../store/reducers"
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { RootStackParamList } from "../../../types";

export const PhotoCard: FC<PropsType> = (props) => {
    const dispatch = useDispatch()

    const addPhotoListItem = () => {
        dispatch(setPhoto(props.urlbig))
        props.navigation.navigate('ListItem')
    }
    return (
        <View style={styles.article}>
            <View style={styles.navLinkBlock}>
                <TouchableHighlight onPress={addPhotoListItem}>
                    <Image style={styles.image} source={{ uri: props.url }} />
                </TouchableHighlight>
            </View>
            <View style={styles.info}>
                {props.description && <Text style={styles.describeHeader}>Describe</Text>}
                <Text style={styles.text}>{props.description}</Text>
                <Text style={styles.describeHeader}>Author:</Text>
                <Text style={[styles.username,styles.text]}>{props.username}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    article: {
        marginVertical: 20,
        marginHorizontal: 25,
        width: 330,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,

        alignItems: 'center'
    },

    navLinkBlock: {
        marginTop: 3
    },

    info: {
        paddingVertical: 0,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'

    },

    image: {
        width: 300,
        height: 300,
        borderRadius: 12
    },

    describeHeader: {
        fontSize: 22,
        fontWeight: '900',
        marginTop: 8
    },

    username:{
        marginBottom:8
    },

    text:{
        fontSize:16,
        fontWeight:'600'
    }
})

type PropsType = {
    id: string
    url: string,
    description: string,
    username: string
    urlbig: string
    navigation: ProfileScreenNavigationProp
}

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;