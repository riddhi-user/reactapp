import React, { useState, useEffect } from "react";
import { GetApi } from "../APIService";
import { API_Path } from "../Const";

function Product() {
    const [product, setProduct] = useState([]);
    const [SingleProduct, setSingleProduct] = useState([]);

    useEffect(() => {
        getallproduct();
    }, []);

    const getallproduct = () => {
        const productPrimise = new Promise((resolve, reject) => resolve(GetApi(API_Path.getallProduct)));
        productPrimise.then((res) => {
            setProduct(res.data.data.product);
        });
    };

    const handlesingleProduct = (id, price) => {
        let temp_arr = [...SingleProduct];
        const Product = temp_arr.find((product) => product._id === id);
        if (Product) {
            Product.quantity += 1;
            Product.price = price * Product.quantity;
        } else {
            const productToAdd = product.find((product) => product._id === id);
            if (productToAdd) {
                temp_arr.push({ ...productToAdd, quantity: 1 });
            }
        }
        setSingleProduct(temp_arr);
    };

    return (
        <div>
            <div className="mt-5 main">
                <table border="1" style={{ margin: "10px 50px 70px 100px" }}>
                    <tr className="border-bottom border-dark">
                        <th className="pe-5">productName</th>
                        <th className="pe-5">price</th>
                        <th className="pe-5">image</th>
                    </tr>
                    {product.map((item) => (
                        <tr className="border-bottom">
                            <td>{item.productName}</td>
                            <td>{item.price}</td>
                            <td>
                                <div className="h-auto" style={{ height: "55px", width: "55px" }}>
                                    <img src={item.image} alt="Profile" className="img-fluid" style={{ height: "50px", width: "50px" }} />
                                </div>
                            </td>

                            <td className="pe-3 pt-2">
                                <button type="submit" className="btn btn-info" onClick={() => handlesingleProduct(item._id, item.price)}>
                                    add to cart
                                </button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className="mt-5 main">
                <table border="1" style={{ margin: "10px 50px 70px 100px" }}>
                    <tr className="border-bottom border-dark">
                        <th className="pe-5">productName</th>
                        <th className="pe-5">price</th>
                        <th className="pe-5">quantity</th>
                        <th className="pe-5">image</th>
                    </tr>
                    {SingleProduct.map((item) => {
                        return (
                            <tr className="border-bottom">
                                <td>{item?.productName}</td>
                                <td>{item?.price}</td>
                                <td>{item?.quantity}</td>
                                <td>
                                    <div className="h-auto" style={{ height: "55px", width: "55px" }}>
                                        <img src={item?.image} className="img-fluid" style={{ height: "50px", width: "50px" }} />
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
}

export default Product;
