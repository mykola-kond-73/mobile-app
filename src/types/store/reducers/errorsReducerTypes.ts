import { Nullable } from "../../types"

export enum ErrorConstantsEnum{
    SET_PHOTOS_LIST_ERROR='SET_PHOTOS_LIST_ERROR'
}

export type ErrorObjType = {
    message: Nullable<string>,
    code: Nullable<number|string>
}

export type ErrorInitialStateType={
    getPhotosListError:ErrorObjType
}

type setGetPhotosListErrorType={
    type:ErrorConstantsEnum.SET_PHOTOS_LIST_ERROR
    payload:ErrorObjType
}

export type ErrorActionType=setGetPhotosListErrorType