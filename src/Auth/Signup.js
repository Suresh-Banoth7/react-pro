import { useState } from "react";
import { validateEmail } from "../Utils/utils";
import axios from "axios";

const Signup = () => {
  // use state variables
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [pword, setPword] = useState(" ");
  const [mobile, setMobile] = useState(" ");

  // error variables
  const [nameEr, setNameEr] = useState(" ");
  const [emailEr, setEmailEr] = useState(" ");
  const [pwordEr, setPwordEr] = useState(" ");
  const [mobileEr, setMobileEr] = useState(" ");

  // API response messages
  const [apiSuccessMsg, setApiSuccessMsg] = useState("");
  const [apiErrorMsg, setApiErrorMsg] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPword(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleBtn = async () => {
    // Clear previous API messages
    setApiSuccessMsg("");
    setApiErrorMsg("");

    let isError = false;

    if (name.trim().length >= 3) {
      setNameEr("");
    } else {
      setNameEr("Min 3 characters are required");
      isError = true;
    }

    if (validateEmail(email)) {
      setEmailEr("");
    } else {
      setEmailEr("Invalid Email");
      isError = true;
    }

    if (pword.length >= 8) {
      setPwordEr("");
    } else {
      setPwordEr("Min 8 characters required");
      isError = true;
    }

    if (mobile.length === 10 && /^\d+$/.test(mobile)) {
      setMobileEr("");
    } else {
      setMobileEr("Mobile number must be 10 digits");
      isError = true;
    }

    if (!isError) {
      const userData = {
        name: name.trim(),
        email: email.trim(),
        password: pword,
        mobile: mobile.trim(),
      };

      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/signup",
          userData
        );
        console.log(response)
        setApiSuccessMsg(response.data);
        setApiErrorMsg("");
        // Optionally, clear form fields here:
        // setName(" ");
        // setEmail(" ");
        // setPword(" ");
        // setMobile(" ");
      } catch (error) {
       
        const errMsg =
         
          error.response?.data 
          
          console.log(errMsg)
        setApiErrorMsg(errMsg);
        setApiSuccessMsg("");
      }
    } else {
      console.log("Validation failed, API call aborted.");
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card shadow">
            <div className="card-title">
              <h3 className="text-center mt-3">Create Account</h3>
            </div>

            <div className="card-body">
              <div className="mt-3">
                <label className="form-label">
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleName}
                  placeholder="Name"
                />
                <div className="text-danger">{nameEr}</div>
              </div>
              <div className="mt-3">
                <label className="form-label">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={handleEmail}
                  placeholder="Email"
                />
                <div className="text-danger">{emailEr}</div>
              </div>
              <div className="mt-3">
                <label className="form-label">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={handlePassword}
                  placeholder="Password"
                />
                <div className="text-danger">{pwordEr}</div>
              </div>
              <div className="mt-3">
                <label className="form-label">
                  <strong>Mobile</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleMobile}
                  placeholder="Mobile"
                />
                <div className="text-danger">{mobileEr}</div>
              </div>

              <div className="mt-3 d-grid gap-2">
                <button className="btn btn-warning" onClick={handleBtn}>
                  Create Account
                </button>
              </div>

              {/* API response messages */}
              {apiSuccessMsg && (
                <div className="alert alert-success mt-3" role="alert">
                  {apiSuccessMsg}
                </div>
              )}
              {apiErrorMsg && (
                <div className="alert alert-danger mt-3" role="alert">
                  {apiErrorMsg}
                </div>
              )}

              <div className="mt-3">
                <span>
                  Already have an account &nbsp; <a href="/login">Login</a>
                </span>
                <br />
                <span>
                  <a href="/">Home</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Signup;
