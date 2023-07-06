import React,{FC} from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Load:FC=()=>{
    return(
        <View>
            <Text style={styles.text}>
                Load ...
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    text:{
        fontSize:24,
        fontWeight:'900',
        marginBottom:8
    }
})