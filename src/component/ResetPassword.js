import { Formik } from "formik";
import React, { useRef, useEffect, useState } from "react";
import * as Yup from "yup";
import { API_Path, errorContainer, formAttr } from "../Const";
import { PostApi } from "../APIService";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

function ResetPassword() {
    const runforms = useRef();
    const location = useLocation();
    const Navigate = useNavigate();
    const [reset_token, setreset_token] = useState("");

    useEffect(() => {
        if (location?.search) {
            setreset_token(location.search.substring(1));
        } else {
            Navigate("/Reset-Signup");
        }
    }, [location?.search]);

    const handlepassword = (formData, resetForm) => {
        console.log(formData, "formData");
        const setpasswordPromise = new Promise((resolve, reject) => resolve(PostApi(API_Path.setPassword + `/${reset_token}`, formData)));
        setpasswordPromise.then((res) => {
            if (res.status == 200) {
                toast.success(res.data.message);
                resetForm(formData);
                Navigate("/");
            } else {
                toast.error(res.data.message);
            }
        });
    };
    return (
        <Formik
            innerRef={runforms}
            initialValues={{
                password: "",
                confirm_password: "",
            }}
            validationSchema={Yup.object({
                password: Yup.string().required("password is required."),
                confirm_password: Yup.string()
                    .required("confirm_password is required")
                    .oneOf([Yup.ref("password"), null], "Passwords and confirm password must match."),
            })}
            onSubmit={(formData, { resetForm }) => handlepassword(formData, resetForm)}
        >
            {(runform) => (
                <div className="text-center mt-5">
                    <form onSubmit={runform.handleSubmit}>
                        password: <input type="password" name="password" {...formAttr(runform, "password")} />
                        {errorContainer(runform, "password")}
                        <br />
                        confirm password: <input className="mt-3 mb-3" type="password" name="confirm_password" {...formAttr(runform, "confirm_password")} />
                        {errorContainer(runform, "confirm_password")}
                        <br />
                        <button className="btn btn-primary" type="submit">
                            set password
                        </button>
                    </form>
                </div>
            )}
        </Formik>
    );
}

export default ResetPassword;
