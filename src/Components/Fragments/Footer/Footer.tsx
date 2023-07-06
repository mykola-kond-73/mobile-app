import React, { FC } from "react"
import { StyleSheet, Text, View } from "react-native";

export const Footer: FC = () => {
    return (
        <>
            <View style={styles.padingTop}>
                <Text>
                    Контактна інформація:
                </Text>
                <View style={styles.contactInfo}>
                    <Text>
                        Україна м.Київ вулиця Кубанської України 45
                    </Text>
                    <Text style={styles.a}>
                        телефон: +(380) 99 000 0000
                    </Text>
                    <Text style={styles.a}>
                        e-mail: fff@gmail.com
                    </Text>
                </View>
            </View>

            <View style={styles.padingTop}>
                <Text>c 2021 jjjjjjjjjjj</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    a: {
        paddingBottom: 10
    },

    contactInfo: {
        // display: flex,
        // flex-direction: column
    },
    padingTop:{
        paddingTop: 20

    }
})