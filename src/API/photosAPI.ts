import { PAGE, PAGE_SIZE, TOKEN } from '../store/constants'
import { ResponceAxiosType } from './../types/API/APITypes'
import {instance} from './API'

export const photosAPI={
    getPhotosList(page:number=PAGE,size:number=PAGE_SIZE){
        return instance.get<ResponceAxiosType>(`/photos?page=${page}&per_page=${size}&client_id=${TOKEN}`).then(data=>data.data)
    }
}