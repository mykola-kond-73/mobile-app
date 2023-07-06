import { put, call, takeEvery } from 'redux-saga/effects'
import { photosAPI } from '../../API'
import { setGetPhotosListError, setIsLoadPhotosList, setPhotos } from '../reducers'
import { PhotosSagasConstantsEnum } from '../../types/store/sagas'
import { PhotosItemType } from '../../types/store/reducers'
import { PAGE, PAGE_SIZE } from '../constants'

export const sagaGetPhotosList=(page:number=PAGE,pageSize=PAGE_SIZE)=>({
    type:PhotosSagasConstantsEnum.SAGA_GET_PHOTOS_LIST,
    payload:{
        page,
        pageSize
    }
})

export function* getPhotosList(action:ReturnType<typeof sagaGetPhotosList>){
    try{
        yield put(setIsLoadPhotosList(true))
        const responce:PhotosItemType[] = yield call(()=>photosAPI.getPhotosList(action.payload.page,action.payload.pageSize))
        yield put(setGetPhotosListError(null,null))
        
        yield put(setPhotos(responce))
    }catch(error:any){
        yield put(setGetPhotosListError(error.code, error.message))
    }finally{
        yield put(setIsLoadPhotosList(false))
    }
}

export function* photosWatcher(){
    yield takeEvery(PhotosSagasConstantsEnum.SAGA_GET_PHOTOS_LIST,getPhotosList)
}