import React from "react";
import Logo from "../images/logo-main.svg";

export default function Loader() {
    return (
        <div>
            <div className="loading">
                <img src={Logo} className="img-fluid" alt="Text A Buy" />
            </div>
        </div>
    );
}
