import { Nullable } from "../../types"
import { PhotosActionsType, PhotosConstantsEnum, PhotosInitialStateType, PhotosItemType } from "../../types/store/reducers"
import { PAGE, PAGE_SIZE } from "../constants"

const initialState:PhotosInitialStateType = {
    page: PAGE,
    pageSize: PAGE_SIZE,
    photosList: [
        // {
        //     id: "a3vDd8hzuYs",
        //     //@ts-ignore
        //     urls: {
        //         "thumb": "https://images.unsplash.com/photo-1666919643134-d97687c1826c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wzNDQ1M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjg3OTYxNjY1fA\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
        //         "regular": "https://images.unsplash.com/photo-1666919643134-d97687c1826c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wzNDQ1M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjg3OTYxNjY1fA\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
        //     },
        //     description: "Genesis GV60 is charging at EV charging station",
        //     //@ts-ignore
        //     user: {
        //         "name": "Hyundai Motor Group",
        //     }
        // }
    ],
    photosListItem: null,

    isLoadPhotosList:false,
}

export const photosReducer = (state: PhotosInitialStateType = initialState, action: PhotosActionsType):PhotosInitialStateType => {
    switch (action.type) {
        case PhotosConstantsEnum.SET_PHOTOS:
            return {
                ...state,
                photosList: [...state.photosList, ...action.payload]
            }
        case PhotosConstantsEnum.SET_PHOTO:
            return {
                ...state,
                photosListItem: action.payload
            }
        case PhotosConstantsEnum.SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case PhotosConstantsEnum.SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.payload
            }
        case PhotosConstantsEnum.SET_IS_LOAD_PHOTOS_LIST:
            return {
                ...state,
                isLoadPhotosList: action.payload
            }
        default:
            return state
    }
}

const setPhotos = (photos: PhotosItemType[] = []) => ({ type: PhotosConstantsEnum.SET_PHOTOS, payload: photos })
const setPhoto = (url:string='') => ({ type: PhotosConstantsEnum.SET_PHOTO, payload: url })
const setPage = (page: number = PAGE) => ({ type: PhotosConstantsEnum.SET_PAGE, payload: page })
const setPageSize = (pageSize: number = PAGE_SIZE) => ({ type: PhotosConstantsEnum.SET_PAGE_SIZE, payload: pageSize })
const setIsLoadPhotosList=(is:boolean=false)=>({ type: PhotosConstantsEnum.SET_IS_LOAD_PHOTOS_LIST, payload: is })


export {
    setPhotos,
    setPhoto,
    setPage,
    setPageSize,
    setIsLoadPhotosList,
}