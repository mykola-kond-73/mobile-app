import { Nullable } from "../../types"
import { ErrorActionType, ErrorConstantsEnum, ErrorInitialStateType } from "../../types/store/reducers"

const initialState:ErrorInitialStateType={
    getPhotosListError:{
        code:null,
        message:null
    }
}

export const errorReducer=(state:ErrorInitialStateType=initialState,action:ErrorActionType)=>{
    switch(action.type){
        case ErrorConstantsEnum.SET_PHOTOS_LIST_ERROR:
            return{
                ...state,
                getPhotosListError:action.payload
            }
        default:
            return state
    }
}

const setGetPhotosListError=(code:Nullable<number>=null,message:Nullable<string>=null)=>({type:ErrorConstantsEnum.SET_PHOTOS_LIST_ERROR,payload:{code,message}})

export{
    setGetPhotosListError
}