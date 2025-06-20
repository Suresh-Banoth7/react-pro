import { useState } from "react"
import { validateEmail } from "../Utils/utils"
const Forgotpassword = () => {


    // use state variables

    var [email, setEmail] = useState(" ")


    // error variables

    var [emailEr, setEmailEr] = useState(" ")



    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleBtn = () => {

        var isError = false;



        if (validateEmail(email)) {
            setEmailEr(" ")
        } else {
            setEmailEr("Invalid Email")
            isError = true
        }



        if (!isError) {
            console.log("call api")
        } else {
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

                        <div className="card-title"><h3 className="text-center mt-3">Forgot Password</h3></div>

                        <div className="card-body">


                            <div className="mt-3">
                                <label className="form-label "><strong>Email</strong></label>
                                <input type="email" className="form-control" onChange={e => handleEmail(e)} placeholder="Email" />
                                <div className="text-danger">
                                    {emailEr}
                                </div>
                            </div>


                            <div className="mt-3 d-grid gap-2">
                                <button className="btn btn-warning" onClick={e => handleBtn()}>Reset</button>
                            </div>

                            <div className="mt-3">
                                <span>New User Register here  &nbsp; <a href="/signup">Signup</a></span><br />
                                <span>Already have an account &nbsp; <a href="/login">Login</a></span><br />
                                <span><a href="/">Home</a></span><br />

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

export default Forgotpassword;