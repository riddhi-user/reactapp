var api_base_url = "http://localhost:8001";
export const ApiBaseUrl = api_base_url;

export const API_Path = {
    createTeam: ApiBaseUrl + "/team/createTeamMember",
    getAllTeam: ApiBaseUrl + "/team/getAllTeam",
    getSingleTeam: ApiBaseUrl + "/team/getSingleTeam",
    updateTeam: ApiBaseUrl + "/team/updateTeam",
    deleteTeam: ApiBaseUrl + "/team/deleteTeam",
    createProduct: ApiBaseUrl + "/team/createProduct",
    getallProduct: ApiBaseUrl + "/team/getallProduct",
    signup: ApiBaseUrl + "/user/signup",
    signupOtpVerify: ApiBaseUrl + "/user/signupOtpVerify",
    userLogin: ApiBaseUrl + "/user/userLogin",
    signupResetToken: ApiBaseUrl + "/user/signupResetToken",
    setPassword: ApiBaseUrl + "/user/setPassword",
    get_country: ApiBaseUrl + "/team/countries",
    add_address: ApiBaseUrl + "/user/add_address",
    get_address: ApiBaseUrl + "/user/get_address",
    getAddressById: ApiBaseUrl + "/user/getAddressById",
};

export const phoneRegExp = /^[+]?[(]?[ 0-9]{3}[)]?[- s. ]?[0-9]{3}[-s. ]?[0-9]{4,6}$/;

export const errorContainer = (form, field) => {
    return form.touched[field] && form.errors[field] ? <span className="error-txt text-danger">{form.errors[field]}</span> : null;
};

export const formAttr = (form, field) => ({ onBlur: form.handleBlur, onChange: form.handleChange, value: form.values[field], name: field });
