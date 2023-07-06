import { redusers } from "../store/store"

export type Nullable<T>=T | null
export type AppStateType=ReturnType<typeof redusers>
export type RootStackParamList = {
    List:undefined
    ListItem:undefined
}