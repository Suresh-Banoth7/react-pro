import { useState } from "react";

import { validateEmail } from "../Utils/utils";

const Signup = () => {


    // use state variables

    var [name, setName] = useState(" ")
    var [email, setEmail] = useState(" ")
    var [pword, setPword] = useState(" ")
    var [mobile, setMobile] = useState(" ")

    // error variables

    var [nameEr, setNameEr] = useState(" ")
    var [emailEr, setEmailEr] = useState(" ")
    var [pwordEr, setPwordEr] = useState(" ")
    var [mobileEr, setMobileEr] = useState(" ")


    const handleName = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPword(e.target.value)
    }

    const handleMobile = (e) => {
        setMobile(e.target.value)
    }

    const handleBtn = () => {

        var isError = false;

        if (name.length > 3) {
            setNameEr(" ")
        } else {
            setNameEr(" min 3 charactes are required")
            isError = true
        }

        if (validateEmail(email)) {
            setEmailEr(" ")
        } else {
            setEmailEr("Invalid Email")
            isError = true
        }

        if (pword.length >= 8) {
            setPwordEr(" ")
        } else {
            setPwordEr("min 8 characters required")
            isError = true
        }

        if (mobile.length == 10) {
            setMobileEr(" ")
        } else {
            setMobileEr("Min 10 numbers")
            isError = true
        }

        if (!isError) {
            console.log("call api")
        }else{
            console.log("Api call failed")
        }
    }





    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-4">

                </div>
                <div className="col-4">
                    <div className="card  shadow ">

                        <div className="card-title"><h3 className="text-center mt-3">Create Account</h3></div>

                        <div className="card-body">

                            <div className="mt-3">
                                <label className="form-label "><strong>Name</strong></label>
                                <input type="text" className="form-control" onChange={e => handleName(e)} placeholder="Name" />
                                <div className="text-danger">
                                    {nameEr}
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="form-label "><strong>Email</strong></label>
                                <input type="email" className="form-control" onChange={e => handleEmail(e)} placeholder="Email" />
                                <div className="text-danger">
                                    {emailEr}
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="form-label "><strong>Password</strong></label>
                                <input type="password" className="form-control" onChange={e => handlePassword(e)} placeholder="Password" />
                                <div className="text-danger">
                                    {pwordEr}
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="form-label "><strong>Mobile</strong></label>
                                <input type="text" className="form-control" onChange={e => handleMobile(e)} placeholder="Mobile" />
                                <div className="text-danger">
                                    {mobileEr}
                                </div>
                            </div>
                            <div className="mt-3 d-grid gap-2">
                                <button className="btn btn-warning" onClick={e => handleBtn()}>Create Account</button>
                            </div>

                            <div className="mt-3">
                                <span>Already have an account &nbsp; <a href="/login">Login</a></span><br />
                                <span><a href="/">Home</a></span>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-4">

                </div>

            </div>

        </div>
    )
}

export default Signup;