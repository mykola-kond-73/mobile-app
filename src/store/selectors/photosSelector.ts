import { AppStateType } from "../../types"
import { PAGE, PAGE_SIZE } from "../constants"

const getPhotosList=(state:AppStateType)=>state.photos.photosList || []
const getPhotosListItem=(state:AppStateType)=>state.photos.photosListItem || null
const getPhotosPage=(state:AppStateType)=>state.photos.page || PAGE
const getPhotosPageSize=(state:AppStateType)=>state.photos.pageSize || PAGE_SIZE
const getPhotosIsLoadPhotosList=(state:AppStateType)=>state.photos.isLoadPhotosList || false

export{
    getPhotosList,
    getPhotosListItem,
    getPhotosPage,
    getPhotosPageSize,
    getPhotosIsLoadPhotosList,
}