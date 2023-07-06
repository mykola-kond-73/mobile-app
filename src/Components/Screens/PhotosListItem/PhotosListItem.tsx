import React, { FC } from "react"
import { Nullable } from "../../../types"
import { StyleSheet, View,Image,Text } from "react-native"

export const PhotosListItem: FC<PropsType> = React.memo(({ url }) => {
    return (
        <View>
            <Image source={{uri:url!}} style={styles.image} />
            <Text>Hello</Text>
        </View>
    )
})

const styles=StyleSheet.create({
    image:{
        width: '100%',
        height:'100%'
    }
})

type PropsType = {
    url: Nullable<string>
}