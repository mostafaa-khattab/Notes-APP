import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





function Register() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": ""
    })

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    // const [message, setMessage] = useState("")



    function getUserData({ target }) {
        setUser({ ...user, [target.name]: target.value })
    }


    async function register(e) {
        e.preventDefault()
        setError("")

        setIsLoading(true)
        console.log(user);

        let { data } = await axios.post("https://route-movies-api.vercel.app/signup", user)

        if (data.message == "success") {
            // setMessage("success")
            navigate("/login")
        } else {
            setError(data.message)
        }
        setIsLoading(false)

        console.log(data);
    }



    return (
        <>
            <div className="container my-5 py-5">
                <div className="col-md-5 m-auto text-center">
                    <form onSubmit={register}>
                        <div className="form-group">
                            <input onChange={getUserData} autoComplete='true' placeholder="Enter your name" name="first_name" type="text" className=" form-control" />
                        </div>
                        <div className="form-group my-2 ">
                            <input onChange={getUserData} autoComplete='true' placeholder="Enter your name" name="last_name" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input onChange={getUserData} autoComplete='true' placeholder="Enter email" type="email" name="email" className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <input onChange={getUserData} autoComplete='true' placeholder="Enter you password" type="password" name="password" className=" form-control" />
                        </div>
                        <button type="submit" className={'btn btn-info w-100 ' + (isLoading ? "disabled" : "")}>{isLoading ? <i className="fa fa-spinner fa-spin" aria-hidden="true"></i> : "Register"}</button>

                        {error && <div className="alert alert-danger mt-2">
                            {error}
                        </div>}
                        {/* {message && <div className="alert alert-success mt-2">
                            {message}
                        </div>} */}

                        {/* 
                        {error != "" ? <div className="alert alert-danger mt-2">
                            {error}
                        </div>:""} */}


                    </form>
                </div>
            </div>
        </>
    )
}

/*

if("" == 10 && y == 5){

}

*/

export default Register
