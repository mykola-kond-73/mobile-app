import React, { FC, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getPhotosIsLoadPhotosList, getPhotosList, getPhotosPage, getPhotosPageSize } from "../../../store/selectors"
import { sagaGetPhotosList } from "../../../store/sagas"
import { PhotosList } from "./PhotosList"
import { ScrollView, View } from "react-native"
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../../types"

export const PhotosListContainer: FC<PropsType> = ({ navigation }) => {

    const photosList = useSelector(getPhotosList)
    const pageSize = useSelector(getPhotosPageSize)
    const page = useSelector(getPhotosPage)
    const isLoadPhotosList = useSelector(getPhotosIsLoadPhotosList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sagaGetPhotosList(page, pageSize))
    }, [page, dispatch])

    return (
        <ScrollView>
            <PhotosList list={photosList} isLoad={isLoadPhotosList} navigation={navigation}/>
        </ScrollView>
    )
}

type PropsType={
    navigation:ProfileScreenNavigationProp
}
type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>