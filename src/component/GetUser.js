import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostApi } from "../APIService";
import { API_Path } from "../Const";
import { toast } from "react-toastify";

function GetUser() {
    const Navigate = useNavigate();
    const [allUser, setAllUser] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getallUser();
    }, []);

    const getallUser = (search) => {
        let user_id = localStorage.getItem("user_id");
        var data;
        if (search) {
            data = { userid: user_id, search: search };
        } else {
            data = { userid: user_id };
        }
        const getUserPromise = new Promise((resolve, reject) => resolve(PostApi(API_Path.getAllTeam, data)));
        getUserPromise.then((res) => {
            if (res.status === 200) {
                setAllUser(res.data.data);
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        });
    };

    const funsearch = (search) => {
        getallUser(search);
    };

    const reset = () => {
        setSearch("");
        getallUser();
    };

    return (
        <div className="mt-5">
            <div className="ms-5 ps-5">
                {/* <input type="text" placeholder="search.." onChange={(e) => getallUser(e.target.value)} /> */}
                <input type="text" placeholder="search.." value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className="me-3" type="button" onClick={() => funsearch(search)}>
                    search
                </button>
                <button type="button" onClick={() => reset(search)}>
                    reset
                </button>
            </div>
            <table border="1" style={{ margin: "10px 50px 70px 100px" }}>
                <tr className="border-bottom border-dark">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                {allUser.map((item) => (
                    <tr className="border-bottom">
                        <td className="pe-5">{item.name}</td>
                        <td className="pe-5">{item.email}</td>
                        <td className="pe-5">{item.phone}</td>

                        <td className="pe-3 pt-2">
                            <button type="button" className="btn btn-info" onClick={() => Navigate("/user-details", { state: { userid: item._id } })}>
                                view details
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default GetUser;
