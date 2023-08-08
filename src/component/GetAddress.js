import React, { useState, useEffect } from "react";
import { PostApi } from "../APIService";
import { API_Path } from "../Const";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function GetAddress() {
    const location = useLocation();
    const Navigate = useNavigate();
    const { address_id } = location.state || {};
    const [address, setAddress] = useState([]);
    const [totalAddress, setTotalAddress] = useState("");
    const [option, set_option] = useState({ limit: 10, page: 1 });

    useEffect(() => {
        getaddress(option);
    }, []);

    const totalPages = Math.ceil(totalAddress / option.limit);

    const handlePrevPage = () => {
        if (option.page > 1) {
            set_option({ ...option, page: option.page - 1 });
            getaddress({ ...option, page: option.page - 1 });
        }
    };

    const handleNextPage = () => {
        if (option.page < totalPages) {
            set_option({ ...option, page: option.page + 1 });
            getaddress({ ...option, page: option.page + 1 });
        }
    };

    const handlePageClick = (pageNumber) => {
        set_option({ ...option, page: pageNumber });
        getaddress({ ...option, page: pageNumber });
    };

    const pageItems = [];
    for (let page = 1; page <= totalPages; page++) {
        pageItems.push(
            <li key={page} onClick={() => handlePageClick(page)}>
                {page}
            </li>
        );
    }

    const getaddress = (option) => {
        const getaddress = new Promise((resolve, reject) => resolve(PostApi(API_Path.get_address, { options: option })));
        getaddress.then((res) => {
            if (res.status === 200) {
                setAddress(res.data.data.address);
                setTotalAddress(res.data.data.totaladdress);
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        });
    };

    return (
        <div className="mt-5 ms-5">
            <table>
                <tr className="border-bottom">
                    <th>address</th>
                    <th>country</th>
                    <th>state</th>
                    <th>city</th>
                    <th>zip</th>
                </tr>

                {address.length > 0 &&
                    address.map((item) => (
                        <tr className="border-bottom">
                            <td className="pe-3">{item.address}</td>
                            <td className="pe-3">{item.country}</td>
                            <td className="pe-3">{item.state}</td>
                            <td className="pe-3">{item.city}</td>
                            <td className="pe-3">{item.zip}</td>
                        </tr>
                    ))}
                <button type="button" className="btn btn-primary mt-3" onClick={() => Navigate("/address", { state: { addressid: address_id } })}>
                    back
                </button>
                {address.length > 0 && (
                    <div className="col-12 d-flex justify-content-center">
                        <div class="custom-pagi-info pagi-custom-rtd-main">
                            <div class="justify-content-center d-sm-flex align-items-center mt-3 mt-sm-0">
                                <ul className="pagination-custom-info mt-3 mt-sm-0 d-flex align-items-center">
                                    <button onClick={handlePrevPage}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                                            <polyline points="15 18 9 12 15 6"></polyline>
                                        </svg>
                                    </button>
                                    {pageItems}
                                    <button onClick={handleNextPage}>
                                        <span aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="#eb5a95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </span>
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </table>
        </div>
    );
}

export default GetAddress;
