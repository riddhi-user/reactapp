import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PostApi } from "../APIService";
import { API_Path } from "../Const";

function SignupOtp() {
    const location = useLocation();
    const Navigate = useNavigate();
    const { id } = location.state || {};

    const [otp, setOtp] = useState("");

    const handlesignupOtp = () => {
        let data = { id: id, signupOtp: otp };
        const newsignupotpPromise = new Promise((resolve, reject) => resolve(PostApi(API_Path.signupOtpVerify, data)));
        newsignupotpPromise.then((res) => {
            Navigate("/login");
        });
    };

    return (
        <div className="text-center mt-5">
            <form>
                <input className="mb-3" type="text" onChange={(e) => setOtp(e.target.value)} /> <br />
                <button className="btn btn-secondary" type="button" onClick={handlesignupOtp}>
                    verify
                </button>
            </form>
        </div>
    );
}

export default SignupOtp;
