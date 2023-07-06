import React, { FC } from "react"
import { PhotosItemType } from "../../../types/store/reducers"
import { PhotoCard } from "../PhotoCard/PhotoCard"
import { Load } from "../Load/Load"
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {FlatList} from 'react-native'
import { RootStackParamList } from "../../../types";

export const List: FC<PropsType> = (props) => {
    return (
        <>
            {
                props.list.map(elem => {
                    return (
                        <PhotoCard key={elem.id}
                            id={elem.id}
                            url={elem.urls.thumb}
                            description={elem.description}
                            username={elem.user.name}
                            urlbig={elem.urls.regular}
                            navigation={props.navigation}
                        />
                    )
                })
            }
            {
                props.isLoad ? <Load /> : null
            }

        </>
    )
}

type PropsType = {
    list: PhotosItemType[],
    isLoad: boolean,
    navigation:ProfileScreenNavigationProp
}

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;