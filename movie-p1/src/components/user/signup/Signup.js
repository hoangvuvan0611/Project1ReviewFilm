import React from "react";
import "../login/Login.css";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const navg = (path) => {
        navigate(path)
    }

    return(
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                         />
                    </div>
                    <div className="form-group mt-3">
                        <label>User Name</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                         />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3 btn-submit">
                        <FontAwesomeIcon title="Go to home" onClick={() => navg(`/home`)} className="fa-house" icon={faHouse} />
                        <button type="submit" className="btn btn-primary ">
                            Submit
                        </button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="text-right mt-2">
                                Already registed? <span className="login" onClick={() => navg(`/login`)}>Login</span>
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

export default SignUp;