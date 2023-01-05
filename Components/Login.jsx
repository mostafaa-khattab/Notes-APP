import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        "email": "",
        "password": ""
    })

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    // const [message, setMessage] = useState("")



    function getUserData({ target }) {
        setUser({ ...user, [target.name]: target.value })
    }


    async function login(e) {
        e.preventDefault()
        setError("")

        setIsLoading(true)

        let { data } = await axios.post("https://route-movies-api.vercel.app/signin", user)

        console.log(data);
        if (data.message == "success") {
            // setMessage("success")
            localStorage.setItem("token",data.token)
            navigate("/home")
        } else {
            setError(data.message)
        }
        setIsLoading(false)

    }

    return (
        <>
            <div className="container my-5 py-5">
                <div className="col-md-5 m-auto text-center">
                    <form onSubmit={login}>
                        <div className="form-group">
                            <input onChange={getUserData} autoComplete='true' placeholder="Enter email" type="email" name="email" className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <input onChange={getUserData} autoComplete='true' placeholder="Enter you password" type="password" name="password" className=" form-control" />
                        </div>
                        <button type="submit" className={'btn btn-info w-100 ' + (isLoading ? "disabled" : "")}>{isLoading ? <i className="fa fa-spinner fa-spin" aria-hidden="true"></i> : "Login"}</button>

                        {error && <div className="alert alert-danger mt-2">
                            {error}
                        </div>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
