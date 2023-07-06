import { Nullable } from "../../types"

export enum PhotosConstantsEnum {
    SET_PHOTOS = 'SET_PHOTOS',
    SET_PHOTO = 'SET_PHOTO',
    SET_PAGE = 'SET_PAGE',
    SET_PAGE_SIZE = 'SET_PAGE_SIZE',
    SET_IS_LOAD_PHOTOS_LIST = 'SET_IS_LOAD_PHOTOS_LIST',
    SET_IS_LOAD_PHOTOS_LIST_ITEM = 'SET_IS_LOAD_PHOTOS_LIST_ITEM'
}

type currentUserCollectionsType={
    id: number,
    title: string,
    published_at: string,
    last_collected_at: string,
    updated_at: string,
    "cover_photo": null,
    "user": null
}

export type PhotosItemType = {
    id: string,
    created_at: string,
    updated_at: string,
    width: number,
    height: number,
    color: "#60544D",
    blur_hash: string,
    likes: number,
    liked_by_user: false,
    description: string,
    user: {
        id: string,
        username: string,
        name: string,
        portfolio_url: string,
        bio: string,
        location: string,
        total_likes: number,
        total_photos: number,
        total_collections: number,
        instagram_username: string,
        twitter_username: string,
        profile_image: {
            small: string,
            medium: string,
            large: string
        },
        links: {
            self: string,
            html: string,
            photos: string,
            likes: string,
            portfolio: string
        }
    },
    current_user_collections: currentUserCollectionsType[],
    urls: {
        raw: string,
        full: string,
        regular: string,
        small: string,
        thumb: string
    },
    links: {
        self: string,
        html: string
        download: string,
        download_location: string
    }
}

export type PhotosInitialStateType = {
    page: number
    pageSize: number
    photosList: PhotosItemType[]
    photosListItem: Nullable<string>
    isLoadPhotosList: boolean
}

type PhotosSetPhotosType = {
    type: PhotosConstantsEnum.SET_PHOTOS
    payload: PhotosItemType[]
}

type PhotosSetPhotoType = {
    type: PhotosConstantsEnum.SET_PHOTO
    payload: string
}

type PhotosSetPageType = {
    type: PhotosConstantsEnum.SET_PAGE
    payload: number
}

type PhotosSetPageSizeType = {
    type: PhotosConstantsEnum.SET_PAGE_SIZE
    payload: number
}

type PhotosSetIsLoadPhotosListType = {
    type: PhotosConstantsEnum.SET_IS_LOAD_PHOTOS_LIST
    payload: boolean
}

export type PhotosActionsType = PhotosSetPhotosType | PhotosSetPhotoType | PhotosSetPageType | PhotosSetPageSizeType | PhotosSetIsLoadPhotosListType