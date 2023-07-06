import axios from 'axios'
import { SERVER } from '../store/constants'

export const instance = axios.create({
    baseURL: SERVER
})