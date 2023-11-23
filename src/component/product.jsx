import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../redux/action";
import { Link } from "react-router-dom";



export const Product = () => {
    const dispatch = useDispatch();
    const productList = useSelector((store) => store.product)
    const token = useSelector(store => store.token)


    useEffect(() => {
        dispatch(getProduct(token))
    }, [dispatch, token])

    return (
        <div>
            <h1>Product Page</h1>
            <div className="main">
                {
                    productList && productList.map((el) => {
                        return (
                            <div key={el.id}>
                                <Link to={`/product/${el.id}`}>
                                    <img src={el.image} alt={el.id} style={{ width: "100%", height: "70%" }} />
                                    <h3 style={{ width: "100%", height: "20%" }}>{el.title}</h3></Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}