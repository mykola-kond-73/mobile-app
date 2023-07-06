import { AppStateType } from '../../types'
import { ErrorObjType } from '../../types/store/reducers'

const defaultResponce:ErrorObjType={
    code:null,
    message:null
}

const getGetPhotosListError=(state:AppStateType)=>state.errors.getPhotosListError || defaultResponce

export {
    getGetPhotosListError
}