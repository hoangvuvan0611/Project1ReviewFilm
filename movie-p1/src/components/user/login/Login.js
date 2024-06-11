import React from "react";
import "./Login.css";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    
    const navg = (value) => {
        navigate(value);
    };

    return(
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Log In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder=""
                         />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder=""
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3 btn-submit">
                        <FontAwesomeIcon className="fa-house" icon={faHouse} onClick={() => navg("/home")} title="Go to home" />
                        <button type="submit" className="btn btn-primary ">
                            Submit
                        </button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>                    
                            <p className="forgot-password text-right mt-2">
                                Forgot <span>password?</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-right mt-2 sign-up" title="Register a new account!" onClick={() => navg("/signup")}>
                                SignUp
                            </p>
                        </div>
                    </div>

                </div>
            </form>
            <div className="circle1"></div>
            <div className="circle2"></div>
      </div>
    )
}

export default Login;