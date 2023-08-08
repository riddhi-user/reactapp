import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostApi } from "../APIService";
import { API_Path, errorContainer, formAttr } from "../Const";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";

function Login() {
    const runforms = useRef();
    const Navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user-token")) {
            Navigate("/create-user");
        }
    }, []);

    const handleuser = (formData, resetForm) => {
        const handleuserpromise = new Promise((resolve, reject) => resolve(PostApi(API_Path.userLogin, formData)));
        handleuserpromise.then((res) => {
            if (res.status == 200) {
                toast.success(res.data.message);
                localStorage.setItem("user-token", "Bearer " + res.data.data.token);
                localStorage.setItem("user_id", res.data.data.user_id);
                resetForm(formData);
                Navigate("/create-user");
            } else {
                toast.error(res.data.message);
            }
        });
    };

    return (
        <div>
            <Formik
                innerRef={runforms}
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email("enter valid email address.").required("this field is required."),
                    password: Yup.string().required("this field is required."),
                })}
                onSubmit={(formData, { resetForm }) => handleuser(formData, resetForm)}
            >
                {(runform) => (
                    <div className="text-center mt-5">
                        <form onSubmit={runform.handleSubmit}>
                            <label className="me-3">email:</label>
                            <input className="mb-2" type="email" name="email" {...formAttr(runform, "email")} />
                            {errorContainer(runform, "email")}
                            <br />
                            <label className="me-2">password:</label>
                            <input className="mb-3" type="password" name="password" {...formAttr(runform, "password")} />
                            {errorContainer(runform, "password")}
                            <br />
                            <button type="submit" className="btn me-2 btn-primary">
                                login
                            </button>
                        </form>
                    </div>
                )}
            </Formik>
            <div className="text-center pt-3">
                <p className="mb-0 btm-login-link">
                    {/* Don’t have an account? <a href="/Reset-Signup">Sign Up</a> */}
                    Don’t have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
