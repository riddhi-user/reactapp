import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { PostApi } from "../APIService";
import { API_Path, phoneRegExp, errorContainer, formAttr } from "../Const";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import loader from "../images/loader.gif.gif";

function UserDetails() {
    const runforms = useRef();
    const Navigate = useNavigate();
    const location = useLocation();
    const { userid } = location.state || {};

    const [update_modal_show, setUpdate_modal_show] = useState(false);
    const [delete_modal_show, setDelete_modal_show] = useState(false);
    const [user, setUser] = useState("");
    const [isloader, setIsloader] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        const getUserPromise = new Promise((resolve, reject) => resolve(PostApi(API_Path.getSingleTeam, { userid: userid })));
        getUserPromise.then((res) => {
            if (res.status === 200) {
                setUser(res.data.data);
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        });
    };

    const updateUser = (formData, resetForm) => {
        setIsloader(true);
        const updateUserPromise = new Promise((resolve, reject) => resolve(PostApi(API_Path.updateTeam, formData)));
        updateUserPromise.then((res) => {
            setIsloader(false);
            if (res.status === 200) {
                setUpdate_modal_show(false);
                toast.success(res.data.message);
                getUser();
            } else {
                setUpdate_modal_show(false);
                toast.error(res.data.message);
            }
        });
    };

    const deleteUser = () => {
        const deleteUserPromise = new Promise((resolve, reject) => resolve(PostApi(API_Path.deleteTeam, { userid: userid })));
        deleteUserPromise.then((res) => {
            if (res.status === 200) {
                setDelete_modal_show(false);
                toast.success(res.data.message);
                Navigate("/get-user");
            } else {
                setDelete_modal_show(false);
                toast.error(res.data.message);
            }
        });
    };

    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <div>
                    <h4>USER DETAILS</h4>
                    <table className="mt-3 mb-3">
                        <tr>
                            <td>name:</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>email:</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>phone:</td>
                            <td>{user.phone}</td>
                        </tr>
                    </table>
                    <button type="button" className="btn me-2 btn-primary" onClick={() => Navigate("/get-user")}>
                        cancel
                    </button>
                    <button type="button" className="btn me-2 btn-success" onClick={() => setUpdate_modal_show(true)}>
                        update
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => setDelete_modal_show(true)}>
                        delete
                    </button>
                </div>
            </div>

            {update_modal_show && (
                <Modal dialogClassName="modal-dialog modal-dialog-centered modal-cust-main-cmn delted-modal" show={update_modal_show} onHide={() => setUpdate_modal_show(false)}>
                    <Modal.Header closeButton className="border-0"></Modal.Header>
                    <Modal.Body>
                        <Formik
                            innerRef={runforms}
                            initialValues={{
                                name: user.name ? user.name : "",
                                email: user.email ? user.email : "",
                                phone: user.phone ? user.phone : "",
                                userid: userid,
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string().required("This field is required."),
                                email: Yup.string().email("enter valid email address.").required("Email is required."),
                                phone: Yup.string().matches(phoneRegExp, "Mobile Number is not valid").required("This field is required."),
                            })}
                            onSubmit={(formData, { resetForm }) => updateUser(formData, resetForm({ values: formData }))}
                        >
                            {(runform) => (
                                <form onSubmit={runform.handleSubmit}>
                                    <div className="text-center dltd-text-info">
                                        <span className="modal-title d-block mb-3">UPDATE DATA</span>
                                        <div className="row">
                                            <table>
                                                <tr>
                                                    <td>
                                                        name: <input type="text" {...formAttr(runform, "name")} />
                                                        {errorContainer(runform, "name")}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        email: <input type="text" {...formAttr(runform, "email")} />
                                                        {errorContainer(runform, "email")}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        phone: <input type="text" {...formAttr(runform, "phone")} />
                                                        {errorContainer(runform, "phone")}
                                                    </td>
                                                </tr>
                                            </table>
                                            <div className="col-6 mt-3">
                                                {/* <button type="submit" className="btn btn-primary w-100">
                                                    update
                                                </button> */}
                                                {isloader ? (
                                                    <img className="" src={loader} alt="Loader" />
                                                ) : (
                                                    <button type="submit" className="btn btn-primary w-100">
                                                        update
                                                    </button>
                                                )}
                                            </div>
                                            <div className="col-6 mt-3">
                                                <button type="button" className="btn btn-secondary w-100" onClick={() => setUpdate_modal_show(false)}>
                                                    cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </Modal.Body>
                </Modal>
            )}

            {delete_modal_show && (
                <Modal dialogClassName="modal-dialog modal-dialog-centered modal-cust-main-cmn delted-modal" show={delete_modal_show} onHide={() => setDelete_modal_show(false)}>
                    <Modal.Header closeButton className="border-0"></Modal.Header>
                    <Modal.Body>
                        <div className="text-center dltd-text-info">
                            <svg width="62" height="78" viewBox="0 0 62 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.186 32.37L30.9993 41.5567L21.7694 32.37L15.6593 38.48L24.8894 47.6667L15.7027 56.8533L21.8127 62.9633L30.9993 53.7767L40.186 62.9633L46.296 56.8533L37.1093 47.6667L46.296 38.48L40.186 32.37ZM46.166 4.33333L41.8327 0H20.166L15.8327 4.33333H0.666016V13H61.3327V4.33333H46.166ZM4.99935 69.3333C4.99935 74.1 8.89935 78 13.666 78H48.3327C53.0993 78 56.9994 74.1 56.9994 69.3333V17.3333H4.99935V69.3333ZM13.666 26H48.3327V69.3333H13.666V26Z" fill="#EB5757" />
                            </svg>
                            <span className="modal-title d-block">Are You Sure?</span>
                            <p>Do you really want to delete this List?</p>
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" className="btn btn-primary w-100" onClick={deleteUser}>
                                        Yes
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button type="button" className="btn btn-danger w-100" onClick={() => setDelete_modal_show(false)}>
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
}

export default UserDetails;
