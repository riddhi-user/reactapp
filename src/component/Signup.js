import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PostApi } from "../APIService";
import { API_Path, phoneRegExp, errorContainer, formAttr } from "../Const";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";

function Signup() {
    const runforms = useRef();
    const Navigate = useNavigate();

    const handleuser = (formData, resetForm) => {
        const handleuserpromise = new Promise((resolve, reject) => resolve(PostApi(API_Path.signup, formData)));
        handleuserpromise.then((res) => {
            if (res.status == 200) {
                toast.success(res.data.message);
                resetForm(formData);
                Navigate("/signupOtpVerify", { state: { id: res.data.data.userid } });
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
                    fname: "",
                    lname: "",
                    email: "",
                    phone: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    fname: Yup.string().required("this field is required."),
                    lname: Yup.string().required("this field is required."),
                    email: Yup.string().email("enter valid email address.").required("this field is required."),
                    phone: Yup.string().matches(phoneRegExp, "Mobile Number is not valid").required("this field is required."),
                    password: Yup.string().required("this field is required."),
                })}
                onSubmit={(formData, { resetForm }) => handleuser(formData, resetForm)}
            >
                {(runform) => (
                    <div className="text-center mt-5">
                        <form onSubmit={runform.handleSubmit}>
                            <label className="me-3">fname:</label>
                            <input className="mb-2" type="text" name="fname" {...formAttr(runform, "fname")} />
                            {errorContainer(runform, "fname")}
                            <br />
                            <label className="me-3">lname:</label>
                            <input className="mb-2" type="text" name="lname" {...formAttr(runform, "lname")} />
                            {errorContainer(runform, "lname")}
                            <br />
                            <label className="me-3">phone:</label>
                            <input className="mb-2" type="phone" name="phone" {...formAttr(runform, "phone")} />
                            {errorContainer(runform, "phone")}
                            <br />
                            <label className="me-3">email:</label>
                            <input className="mb-2" type="email" name="email" {...formAttr(runform, "email")} />
                            {errorContainer(runform, "email")}
                            <br />
                            <label className="me-2">password:</label>
                            <input className="mb-3" type="password" name="password" {...formAttr(runform, "password")} />
                            {errorContainer(runform, "password")}
                            <br />
                            <button type="submit" className="btn me-2 btn-primary">
                                Signup
                            </button>
                        </form>
                    </div>
                )}
            </Formik>
            <div className="text-center pt-3">
                <p className="mb-0 btm-login-link">
                    Already have an account? <a href="/login">Sign In</a>
                </p>
            </div>
        </div>
    );
}

export default Signup;
