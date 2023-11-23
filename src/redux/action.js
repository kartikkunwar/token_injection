import * as types from "./actiontype"
import { axiosInstance } from "../service/axiosinstance"
import axios from "axios"

export const getProduct=(token)=>(dispatch)=>{
    dispatch({type:types.GET_REQUEST_PRODUCT})
    return axiosInstance.get("https://fakestoreapi.com/products")
    .then((res)=>{
        return dispatch({type:types.GET_SUCCESS_PRODCUT,payload:res.data})
    })
    .catch((err)=>{
        return dispatch({type:types.GET_FAIL_PRODUCT})
    })
}

export const getLoginToken=(login)=>(dispatch)=>{
    dispatch({type:types.GET_REQUEST_TOKEN})
    return axios.post("https://api.volks-verein.com/api/v1/Auth/Login",login)
    .then((res)=>{
        return dispatch({type:types.GET_SUCCESS_TOKEN,payload:res.data.data.accessToken})
    })
    .catch(err=>{
        return dispatch({type:types.GET_FAIL_TOKEN})
    })
}

export const getSingleProduct=(id,token)=>(dispatch)=>{
    console.log(token)
    return axiosInstance.get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
        return dispatch({type:types.GET_SUCCESS_SINGLE,payload:res.data})
    })
}


