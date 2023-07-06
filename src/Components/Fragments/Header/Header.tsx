import React, { FC } from "react"
import logo from '../../../media/logo-64.png'
import home from '../../../media/icon-home-32.png'
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"

export const Header: FC<any> = ({navigation}) => {
    return (
        <>
            <View>
                <Image source={logo} />
            </View>
            {/* <View style={styles.home}>
                <TouchableOpacity onPress={()=>navigation.navigate('List')}>
                    <Image source={home}/>
                </TouchableOpacity>
            </View> */}
        </>
    )
}

// const styles = StyleSheet.create({
//     home:{
//         paddingLeft: 50
//     }
// })