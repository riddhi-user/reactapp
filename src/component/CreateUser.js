import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PostApi } from "../APIService";
import { API_Path, phoneRegExp, errorContainer, formAttr } from "../Const";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import loader from "../images/loader.gif.gif";

function CreateUser() {
    const runforms = useRef();
    const Navigate = useNavigate();
    const [isloader, setIsloader] = useState(false);

    const saveuser = (formData, resetForm) => {
        setIsloader(true);
        const UserPromise = new Promise((resolve, reject) => resolve(PostApi(API_Path.createTeam, formData)));
        UserPromise.then((res) => {
            setIsloader(false);
            if (res.status === 200) {
                toast.success(res.data.message);
                resetForm(formData);
                Navigate("/get-user");
            } else {
                toast.error(res.data.message);
            }
        });
    };

    const handleLogout = () => {
        localStorage.removeItem("user-token");
        localStorage.removeItem("user_id");
        Navigate("/");
    };

    return (
        <div>
            <Formik
                innerRef={runforms}
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("This field is required."),
                    email: Yup.string().email("enter valid email address.").required("Email is required."),
                    phone: Yup.string().matches(phoneRegExp, "Mobile Number is not valid").required("This field is required."),
                })}
                onSubmit={(formData, { resetForm }) => saveuser(formData, resetForm)}
            >
                {(runform) => (
                    <form onSubmit={runform.handleSubmit}>
                        <div className="text-center mt-5">
                            <h4 className="mb-3">Create User</h4>
                            name: <input className="mb-2" type="text" {...formAttr(runform, "name")} name="name" />
                            {errorContainer(runform, "name")}
                            <br />
                            email: <input className="mb-2" type="email" {...formAttr(runform, "email")} name="email" />
                            {errorContainer(runform, "email")}
                            <br />
                            phone: <input className="mb-2" type="phone" {...formAttr(runform, "phone")} name="phone" />
                            {errorContainer(runform, "phone")}
                            <br />
                            {isloader ? (
                                <img className="" src={loader} alt="Loader" />
                            ) : (
                                <button type="submit" className="btn btn-primary mt-3">
                                    save user
                                </button>
                            )}
                        </div>
                    </form>
                )}
            </Formik>
            <div className="text-center pt-3">
                <button type="submit" className="border-0 bg-transparent" onClick={handleLogout}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5558 0H2.44421C1.79597 0 1.17427 0.257515 0.715894 0.715894C0.257515 1.17427 0 1.79597 0 2.44421L0 7.33368H2.44421V2.44421H19.5558V19.5558H2.44421V14.6674H0V19.5558C0 20.204 0.257515 20.8257 0.715894 21.2841C1.17427 21.7425 1.79597 22 2.44421 22H19.5558C20.204 22 20.8257 21.7425 21.2841 21.2841C21.7425 20.8257 22 20.204 22 19.5558V2.44421C22 1.79597 21.7425 1.17427 21.2841 0.715894C20.8257 0.257515 20.204 0 19.5558 0V0Z" fill="#1081E8" />
                        <path d="M8.65974 15.3823L10.3892 17.1118L16.5003 11.0007L10.3892 4.88965L8.65974 6.61911L11.8187 9.77911H0V12.2233H11.8187L8.65974 15.3823Z" fill="#1081E8" />
                    </svg>
                    <bdi className="ms-3">Log Out</bdi>
                </button>
            </div>
        </div>
    );
}

export default CreateUser;
