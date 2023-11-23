import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLoginToken } from "../redux/action"
import { useNavigate } from "react-router-dom"

const init={
    username:"",
    password:""
}
export const Login=()=>{
    const [log,setLog]=useState(init)
    const dispatch=useDispatch();
    const logged=useSelector(store=>store.logged)
    const navigate=useNavigate()

    const handlechange=(e)=>{
        setLog({...log,[e.target.name]:e.target.value})
    }

    const checkdata=()=>{
        dispatch(getLoginToken(log))
    }

    useEffect(()=>{
        if(logged){
            navigate("/product")
        }
    },[logged,navigate])

    return(
        <div className="signup">
            <h1>Login</h1>
            <div className="form">
                <div>
                    <label >Username:</label>
                    <input placeholder="enter username here" name="username" type="text" value={log.username} onChange={handlechange} />
                </div>
                <div>
                    <label >Password:</label>
                    <input placeholder="enter password here" name="password" type="text" value={log.password} onChange={handlechange} />
                </div>
                <button onClick={checkdata}>Submit</button>
            </div>
        </div>
    )
}