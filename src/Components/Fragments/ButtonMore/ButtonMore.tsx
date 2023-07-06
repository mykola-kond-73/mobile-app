import React, { FC } from "react"
import { useDispatch,useSelector } from "react-redux"
import { setPage } from "../../../store/reducers"
import { getPhotosPage } from "../../../store/selectors"
import { Button, StyleSheet, View } from "react-native"

export const ButtonMore: FC = () => {
    const page = useSelector(getPhotosPage)
    const dispatch = useDispatch()
    const getMorePhotos = () => {
        dispatch(setPage(page + 1))
    }
    return (
        <View>
            <Button title="Apply More" onPress={getMorePhotos} />
        </View>
    )
}