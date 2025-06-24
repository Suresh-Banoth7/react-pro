import { useState } from "react"
import axios from "axios"
import { validateEmail } from "../Utils/utils"

const Forgotpassword = () => {
    const [email, setEmail] = useState("")
    const [emailEr, setEmailEr] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setSuccessMsg("")
        setErrorMsg("")
    }

    const handleBtn = async () => {
        let isError = false

        if (validateEmail(email)) {
            setEmailEr("")
        } else {
            setEmailEr("Invalid Email")
            isError = true
        }

        if (!isError) {
            try {
                const response = await axios.post("http://localhost:8080/api/auth/forgot-password", {
                    email: email
                })
                setSuccessMsg(response.data) // Expected: "Password reset link sent to your email"
                setErrorMsg("")
            } catch (error) {
                setErrorMsg(error.response?.data || "Something went wrong")
                setSuccessMsg("")
            }
        }
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="card shadow">
                        <div className="card-title">
                            <h3 className="text-center mt-3">Forgot Password</h3>
                        </div>
                        <div className="card-body">
                            <div className="mt-3">
                                <label className="form-label"><strong>Email</strong></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={handleEmail}
                                    placeholder="Email"
                                />
                                <div className="text-danger">{emailEr}</div>
                            </div>

                            <div className="mt-3 d-grid gap-2">
                                <button className="btn btn-warning" onClick={handleBtn}>Reset</button>
                            </div>

                            {successMsg && (
                                <div className="alert alert-success mt-3">
                                    {successMsg}
                                </div>
                            )}
                            {errorMsg && (
                                <div className="alert alert-danger mt-3">
                                    {errorMsg}
                                </div>
                            )}

                            <div className="mt-3">
                                <span>New User Register here &nbsp; <a href="/signup">Signup</a></span><br />
                                <span>Already have an account &nbsp; <a href="/login">Login</a></span><br />
                                <span><a href="/">Home</a></span><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default Forgotpassword
