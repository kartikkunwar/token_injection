import axios from "axios";
import { store } from "../redux/store";


export const axiosInstance=axios.create({
    baseURL:`https://fakestoreapi.com/products`
});

axiosInstance.interceptors.request.use((request)=>{
    const data=store.getState()
    const token=data.token
    request.headers.token=token
    return request
})

