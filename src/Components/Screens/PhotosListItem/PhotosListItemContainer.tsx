import React,{FC} from "react"
import { useSelector,useDispatch } from "react-redux"
import { PhotosListItem } from "./PhotosListItem"
import { getPhotosListItem } from "../../../store/selectors"

export const PhotosListItemContainer:FC=()=>{
    const photosListItem=useSelector(getPhotosListItem)

    return(
        <PhotosListItem url={photosListItem}/>
    )
}