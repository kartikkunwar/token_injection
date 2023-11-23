import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useParams } from "react-router-dom"
import { getSingleProduct } from "../redux/action"


export const SingleProduct=()=>{
    const params=useParams()
    const dispatch=useDispatch();
    const token = useSelector(store => store.token)
    const product=useSelector(store=>store.singleproduct)
    useEffect(()=>{
        let id=params.id
        dispatch(getSingleProduct(id,token))
    },[params,dispatch,token])
    return(
        <>
        <h1>Single Product</h1>
        <div className="single">
            <img src={product.image} alt="img" />
            <h1>{product.title}</h1>
        </div>
        </>
    )
}