import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";
import GetUser from "./component/GetUser";
import User from "./component/User";
import CreateUser from "./component/CreateUser";
import UserDetails from "./component/UserDetails";
import Product from "./component/Product";
import Signup from "./component/Signup";
import Login from "./component/Login";
import SignupOtp from "./component/SignupOtp";
import ResetPassword from "./component/ResetPassword";
import ResetSignup from "./component/ResetSignup";
import Array from "./component/Array";
import State_City from "./component/State_City";
import CreateAddress from "./component/CreateAddress";
import GetAddress from "./component/GetAddress";
import Counter from "./component/Counter";

function ProtectedRout() {
    let token = localStorage.getItem("user-token");
    return token ? <Outlet /> : <Navigate to={"/login"} />;
}

export default function RoutesMain() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/signup" exact element={<Signup />} />
                <Route path="/signupOtpVerify" exact element={<SignupOtp />} />
                <Route path="/Reset-Signup" exact element={<ResetSignup />} />
                <Route path="/reset-password" exact element={<ResetPassword />} />
                <Route path="/array" exact element={<Array />} />
                <Route path="/state_city" exact element={<State_City />} />
                <Route path="/context" exact element={<Counter />} />

                <Route element={<ProtectedRout />}>
                    <Route path="/create-user" exact element={<CreateUser />} />
                    <Route path="/get-user" exact element={<GetUser />} />
                    <Route path="/user-details" exact element={<UserDetails />} />
                    <Route path="/product" exact element={<Product />} />
                    <Route path="/user" exact element={<User />} />
                    <Route path="/address" exact element={<CreateAddress />} />
                    <Route path="/getaddress" exact element={<GetAddress />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
