import Header from "./Header"
import { Footer } from "./Footer"
import { useNavigate } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authenticate } from "./reduxExample/login/LoginSlicer"

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const resultRef = useRef()
    const auth = useSelector((state) => state.loginReducer.auth)
    const msg = useSelector((state) => state.loginReducer.msg)
    function sendData(event) {
        event.preventDefault()
        dispatch(authenticate(data))
        // navigate("/product",{state:{name:"Ujwala"}})
    }
    // const [email,setEmail]=useState("rahul@hmail.com")
    // const [password,setPassword]=useState("")
    const [data, setData] = useState({ email: "", password: "" })


    useEffect(() => {
        if (auth) {
            navigate("/product")
        }
        else {
            resultRef.current.innerText = msg
        }
    }, [auth,msg])

    return (<>
        <Header />
        <div className="alert alert-primary" role="alert">
            <h1>Login</h1>
            <div style={{textAlign : "center"}}>
            <h5 style={{ color: "red" }} ref={resultRef}></h5>
            </div>
            <form className="w-25" id="login-form" onSubmit={sendData}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={data.email} type="email" className="form-control" id="email"
                        onChange={(event) => setData({ ...data, email: event.target.value })} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(event) => setData({ ...data, password: event.target.value })} className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            Email-id:{data.email}
            <br />
            Password:{data.password}
        </div>

        <Footer />
    </>)
}