import {all} from 'redux-saga/effects'
import { photosWatcher } from './photosSaga'

export function* rootWatcher(){
    yield all([photosWatcher()])
}