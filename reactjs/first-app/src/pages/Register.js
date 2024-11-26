import Header from "./Header"
import { Footer } from "./Footer"
import { useNavigate } from "react-router-dom"
import { register } from "./reduxExample/login/LoginSlicer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

export default function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const res = useSelector((state) => state.loginReducer.res)
    const [data, setData] = useState(
        { 
            name: "", 
            email: "", 
            password: "", 
            gender: "", 
            mobile: "" 
        }
    )
    function sendData(event) {
        event.preventDefault()
        dispatch(register(data))
    }

    useEffect(() => {
        if (res) {
            navigate("/login")
        }
    }, [res])


    return (<>
        <Header />

        <div className="alert alert-primary" role="alert">
            <h1>Register</h1>
            <form className="w-25" id="form" onSubmit={sendData}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text"
                        onChange={(event) => setData({ ...data, name: event.target.value })}
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile No.</label>
                    <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        aria-describedby="emailHelp"
                        onChange={(event) => setData({ ...data, mobile: event.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select className="form-select"
                        onChange={(event) => setData({ ...data, gender: event.target.value })}
                        id="gender"
                        aria-label="Default select example">
                        <option selected value="">select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email-id</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={(event) => setData({ ...data, email: event.target.value })}
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"
                        onChange={(event) => setData({ ...data, password: event.target.value })} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <Footer />
    </>)
}