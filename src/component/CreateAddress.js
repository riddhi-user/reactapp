// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { PostApi, GetApi } from "../APIService";
// import { API_Path, errorContainer, formAttr } from "../Const";
// import { toast } from "react-toastify";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import loader from "../images/loader.gif.gif";
// import Select from "react-select";

// function CreateAddress() {
//     const location = useLocation();
//     const runforms = useRef();
//     const Navigate = useNavigate();
//     const [isloader, setIsloader] = useState(false);
//     const [country, setCountry] = useState([]);
//     const [countryname, setCountryname] = useState("");
//     const [getaddress, setAddress] = useState("");
//     // const [selectedOption, setSelectedOption] = useState([]);

//     useEffect(() => {
//         if (location.state?.addressid) {
//             getcountry();
//             GetAddress(location.state?.addressid);
//         } else {
//             getcountry();
//         }
//     }, [location.state?.addressid]);

//     const saveaddress = (formData, resetForm) => {
//         setIsloader(true);
//         const UserPromise = new Promise((resolve, reject) => resolve(PostApi(API_Path.add_address, formData)));
//         UserPromise.then((res) => {
//             setIsloader(false);
//             if (res.status === 200) {
//                 toast.success(res.data.message);
//                 resetForm(formData);
//                 Navigate("/getaddress", { state: { address_id: res.data.data._id } });
//             } else {
//                 toast.error(res.data.message);
//             }
//         });
//     };

//     const GetAddress = (id) => {
//         let formData = { address_id: id };
//         const getaddress = new Promise((resolve, reject) => resolve(PostApi(API_Path.getAddressById, formData)));
//         getaddress.then((res) => {
//             if (res.status === 200) {
//                 setAddress(res.data.data);
//                 toast.success(res.data.message);
//             } else {
//                 toast.error(res.data.message);
//             }
//         });
//     };

//     const getcountry = () => {
//         const country = new Promise((resolve, reject) => resolve(GetApi(API_Path.get_country)));
//         country.then((res) => {
//             if (res.status === 200) {
//                 setCountry(res.data.data);
//             }
//         });
//     };

//     const handleCountry = (e) => {
//         runforms.current.setFieldValue("country", e.value);
//         setCountryname(e.value);
//         // runforms.current.setFieldValue("country", e.target.value);
//         // setCountryname(e.target.value);
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("user-token");
//         localStorage.removeItem("user_id");
//         Navigate("/");
//     };

//     let w = country.find((a) => a.value === getaddress.country);
//     console.log(w, "country.find((a) => a.value === getaddress.country");

//     return (
//         <div>
//             {location.state?.addressid ? (
//                 <Formik
//                     enableReinitialize
//                     innerRef={runforms}
//                     initialValues={{
//                         address: getaddress ? getaddress.address : "",
//                         country: getaddress ? getaddress.country : "",
//                         state: getaddress ? getaddress.state : "",
//                         city: getaddress ? getaddress.city : "",
//                         zip: getaddress ? getaddress.zip : "",
//                     }}
//                     validationSchema={Yup.object({
//                         address: Yup.string().required("address is required."),
//                         country: Yup.string().required("country is required."),
//                         state: Yup.string().required("state is required."),
//                         city: Yup.string().required("city is required."),
//                         zip: Yup.string().required("zip is required."),
//                     })}
//                     onSubmit={(formData, { resetForm }) => saveaddress(formData, resetForm)}
//                 >
//                     {(runform) => (
//                         <form onSubmit={runform.handleSubmit}>
//                             <div className="text-center mt-5">
//                                 <h4 className="mb-3">Create Address</h4>
//                                 address: <input className="mb-2" type="text" {...formAttr(runform, "address")} name="address" />
//                                 {errorContainer(runform, "address")}
//                                 <br />
//                                 <div>
//                                     country: <Select defaultValue={w?.value} name="country" options={country} onChange={(value) => handleCountry(value)} classNamePrefix="select" />
//                                     {/* country:{" "}
//                                     <select onChange={handleCountry} name="country">
//                                         <option>{getaddress.country}</option>
//                                         {country.length > 0 &&
//                                             country.map((item, i) => {
//                                                 return (
//                                                     <option key={i} value={item}>
//                                                         {item}
//                                                     </option>
//                                                 );
//                                             })}
//                                     </select> */}
//                                 </div>
//                                 {errorContainer(runform, "state")}
//                                 <br />
//                                 state: <input className="mb-2" type="text" {...formAttr(runform, "state")} name="state" />
//                                 {errorContainer(runform, "state")}
//                                 <br />
//                                 city: <input className="mb-2" type="text" {...formAttr(runform, "city")} name="city" />
//                                 {errorContainer(runform, "city")}
//                                 <br />
//                                 zip: <input className="mb-2" type="text" {...formAttr(runform, "zip")} name="zip" />
//                                 {errorContainer(runform, "zip")}
//                                 <br />
//                                 {isloader ? (
//                                     <img className="" src={loader} alt="Loader" />
//                                 ) : (
//                                     <button type="submit" className="btn btn-primary mt-3">
//                                         save address
//                                     </button>
//                                 )}
//                                 {/* <button type="submit" className="btn btn-primary mt-3">
//                                     {isloader ? "loding" : "save"}
//                                 </button> */}
//                             </div>
//                         </form>
//                     )}
//                 </Formik>
//             ) : (
//                 <Formik
//                     innerRef={runforms}
//                     initialValues={{
//                         address: "",
//                         country: "",
//                         state: "",
//                         city: "",
//                         zip: "",
//                     }}
//                     validationSchema={Yup.object({
//                         address: Yup.string().required("address is required."),
//                         country: Yup.string().required("country is required."),
//                         state: Yup.string().required("state is required."),
//                         city: Yup.string().required("city is required."),
//                         zip: Yup.string().required("zip is required."),
//                     })}
//                     onSubmit={(formData, { resetForm }) => saveaddress(formData, resetForm)}
//                 >
//                     {(runform) => (
//                         <form onSubmit={runform.handleSubmit}>
//                             <div className="text-center mt-5">
//                                 <h4 className="mb-3">Create Address</h4>
//                                 address: <input className="mb-2" type="text" {...formAttr(runform, "address")} name="address" />
//                                 {errorContainer(runform, "address")}
//                                 <br />
//                                 <div>
//                                     country: <Select defaultValue={countryname} name="country" options={country} onChange={(value) => handleCountry(value)} classNamePrefix="select" />
//                                     {/* country:{" "}
//                                     <select onChange={handleCountry} value={countryname} name="country">
//                                         <option>select contry</option>
//                                         {country.length > 0 &&
//                                             country.map((item, i) => {
//                                                 return (
//                                                     <option key={i} value={item}>
//                                                         {item}
//                                                     </option>
//                                                 );
//                                             })}
//                                     </select> */}
//                                 </div>
//                                 {errorContainer(runform, "state")}
//                                 <br />
//                                 state: <input className="mb-2" type="state" {...formAttr(runform, "state")} name="state" />
//                                 {errorContainer(runform, "state")}
//                                 <br />
//                                 city: <input className="mb-2" type="city" {...formAttr(runform, "city")} name="city" />
//                                 {errorContainer(runform, "city")}
//                                 <br />
//                                 zip: <input className="mb-2" type="zip" {...formAttr(runform, "zip")} name="zip" />
//                                 {errorContainer(runform, "zip")}
//                                 <br />
//                                 {isloader ? (
//                                     <img className="" src={loader} alt="Loader" />
//                                 ) : (
//                                     <button type="submit" className="btn btn-primary mt-3">
//                                         save addressss
//                                     </button>
//                                 )}
//                             </div>
//                         </form>
//                     )}
//                 </Formik>
//             )}

//             <div className="text-center pt-3">
//                 <button type="submit" className="border-0 bg-transparent" onClick={handleLogout}>
//                     <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M19.5558 0H2.44421C1.79597 0 1.17427 0.257515 0.715894 0.715894C0.257515 1.17427 0 1.79597 0 2.44421L0 7.33368H2.44421V2.44421H19.5558V19.5558H2.44421V14.6674H0V19.5558C0 20.204 0.257515 20.8257 0.715894 21.2841C1.17427 21.7425 1.79597 22 2.44421 22H19.5558C20.204 22 20.8257 21.7425 21.2841 21.2841C21.7425 20.8257 22 20.204 22 19.5558V2.44421C22 1.79597 21.7425 1.17427 21.2841 0.715894C20.8257 0.257515 20.204 0 19.5558 0V0Z" fill="#1081E8" />
//                         <path d="M8.65974 15.3823L10.3892 17.1118L16.5003 11.0007L10.3892 4.88965L8.65974 6.61911L11.8187 9.77911H0V12.2233H11.8187L8.65974 15.3823Z" fill="#1081E8" />
//                     </svg>
//                     <bdi className="ms-3">Log Out</bdi>
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default CreateAddress;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PostApi, GetApi } from "../APIService";
import { API_Path, errorContainer, formAttr } from "../Const";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import loader from "../images/loader.gif.gif";
import Select from "react-select";

function CreateAddress() {
    const location = useLocation();
    const runforms = useRef();
    const Navigate = useNavigate();
    const [isloader, setIsloader] = useState(false);
    const [country, setCountry] = useState([]);
    const [countryname, setCountryname] = useState("");
    const [getaddress, setAddress] = useState("");
    const [defaultCountryName, setDefaultCountryName] = useState("");
    // const [selectedOption, setSelectedOption] = useState([]);

    useEffect(() => {
        if (location.state?.addressid) {
            getcountry();
            GetAddress(location.state?.addressid);
        } else {
            getcountry();
        }
    }, [location.state?.addressid]);

    const saveaddress = (formData, resetForm) => {
        setIsloader(true);
        const UserPromise = new Promise((resolve, reject) => resolve(PostApi(API_Path.add_address, formData)));
        UserPromise.then((res) => {
            setIsloader(false);
            if (res.status === 200) {
                toast.success(res.data.message);
                resetForm(formData);
                Navigate("/getaddress", { state: { address_id: res.data.data._id } });
            } else {
                toast.error(res.data.message);
            }
        });
    };

    const GetAddress = (id) => {
        let formData = { address_id: id };
        const getaddress = new Promise((resolve, reject) => resolve(PostApi(API_Path.getAddressById, formData)));
        getaddress.then((res) => {
            if (res.status === 200) {
                setAddress(res.data.data);
                setDefaultCountryName(country.find((a) => a.value === res.data.data.country));
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        });
    };

    const getcountry = () => {
        const country = new Promise((resolve, reject) => resolve(GetApi(API_Path.get_country)));
        country.then((res) => {
            if (res.status === 200) {
                setCountry(res.data.data);
            }
        });
    };

    const handleCountry = (e) => {
        runforms.current.setFieldValue("country", e.value);
        setCountryname(e.value);
        // runforms.current.setFieldValue("country", e.target.value);
        // setCountryname(e.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem("user-token");
        localStorage.removeItem("user_id");
        Navigate("/");
    };

    let w = country.find((a) => a.value === getaddress.country);

    return (
        <div>
            {location.state?.addressid ? (
                <Formik
                    enableReinitialize
                    innerRef={runforms}
                    initialValues={{
                        address: getaddress ? getaddress.address : "",
                        country: getaddress ? getaddress.country : "",
                        state: getaddress ? getaddress.state : "",
                        city: getaddress ? getaddress.city : "",
                        zip: getaddress ? getaddress.zip : "",
                    }}
                    validationSchema={Yup.object({
                        address: Yup.string().required("address is required."),
                        country: Yup.string().required("country is required."),
                        state: Yup.string().required("state is required."),
                        city: Yup.string().required("city is required."),
                        zip: Yup.string().required("zip is required."),
                    })}
                    onSubmit={(formData, { resetForm }) => saveaddress(formData, resetForm)}
                >
                    {(runform) => (
                        <form onSubmit={runform.handleSubmit}>
                            <div className="text-center mt-5">
                                <h4 className="mb-3">Create Address</h4>
                                address: <input className="mb-2" type="text" {...formAttr(runform, "address")} name="address" />
                                {errorContainer(runform, "address")}
                                <br />
                                <div>
                                    <Select
                                        name="country"
                                        value={country.filter(function (option) {
                                            return option.value === getaddress.country;
                                        })}
                                        options={country}
                                        placeholder="Select country"
                                        onChange={(item) => setAddress({ ...getaddress, country: item.value })}
                                    />
                                    {/* country: <Select defaultValue={defaultCountryName ? defaultCountryName.name : ""} name="country" options={country} onChange={(value) => handleCountry(value)} classNamePrefix="select" /> */}
                                    {/* country:{" "}
                                    <select onChange={handleCountry} name="country">
                                        <option>{getaddress.country}</option>
                                        {country.length > 0 &&
                                            country.map((item, i) => {
                                                return (
                                                    <option key={i} value={item}>
                                                        {item}
                                                    </option>
                                                );
                                            })}
                                    </select> */}
                                </div>
                                {errorContainer(runform, "state")}
                                <br />
                                state: <input className="mb-2" type="text" {...formAttr(runform, "state")} name="state" />
                                {errorContainer(runform, "state")}
                                <br />
                                city: <input className="mb-2" type="text" {...formAttr(runform, "city")} name="city" />
                                {errorContainer(runform, "city")}
                                <br />
                                zip: <input className="mb-2" type="text" {...formAttr(runform, "zip")} name="zip" />
                                {errorContainer(runform, "zip")}
                                <br />
                                {isloader ? (
                                    <img className="" src={loader} alt="Loader" />
                                ) : (
                                    <button type="submit" className="btn btn-primary mt-3">
                                        save address
                                    </button>
                                )}
                                {/* <button type="submit" className="btn btn-primary mt-3">
                                    {isloader ? "loding" : "save"}
                                </button> */}
                            </div>
                        </form>
                    )}
                </Formik>
            ) : (
                <Formik
                    innerRef={runforms}
                    initialValues={{
                        address: "",
                        country: "",
                        state: "",
                        city: "",
                        zip: "",
                    }}
                    validationSchema={Yup.object({
                        address: Yup.string().required("address is required."),
                        country: Yup.string().required("country is required."),
                        state: Yup.string().required("state is required."),
                        city: Yup.string().required("city is required."),
                        zip: Yup.string().required("zip is required."),
                    })}
                    onSubmit={(formData, { resetForm }) => saveaddress(formData, resetForm)}
                >
                    {(runform) => (
                        <form onSubmit={runform.handleSubmit}>
                            <div className="text-center mt-5">
                                <h4 className="mb-3">Create Address</h4>
                                address: <input className="mb-2" type="text" {...formAttr(runform, "address")} name="address" />
                                {errorContainer(runform, "address")}
                                <br />
                                <div>
                                    country: country: <Select defaultValue={countryname} name="country" options={country} onChange={(value) => handleCountry(value)} classNamePrefix="select" />
                                    {/* country:{" "}
                                    <select onChange={handleCountry} value={countryname} name="country">
                                        <option>select contry</option>
                                        {country.length > 0 &&
                                            country.map((item, i) => {
                                                return (
                                                    <option key={i} value={item}>
                                                        {item}
                                                    </option>
                                                );
                                            })}
                                    </select> */}
                                </div>
                                {errorContainer(runform, "state")}
                                <br />
                                state: <input className="mb-2" type="state" {...formAttr(runform, "state")} name="state" />
                                {errorContainer(runform, "state")}
                                <br />
                                city: <input className="mb-2" type="city" {...formAttr(runform, "city")} name="city" />
                                {errorContainer(runform, "city")}
                                <br />
                                zip: <input className="mb-2" type="zip" {...formAttr(runform, "zip")} name="zip" />
                                {errorContainer(runform, "zip")}
                                <br />
                                {isloader ? (
                                    <img className="" src={loader} alt="Loader" />
                                ) : (
                                    <button type="submit" className="btn btn-primary mt-3">
                                        save addressss
                                    </button>
                                )}
                            </div>
                        </form>
                    )}
                </Formik>
            )}

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

export default CreateAddress;
