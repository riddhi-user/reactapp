import React, { useEffect, useState } from "react";

// OPEN USER UPDATE POPUP
// function User() {
//     const [user, setUser] = useState([]);
//     const [updateName, setupdateName] = useState([]);
//     const [updateEmail, setupdateEmail] = useState([]);
//     const [updatePhone, setupdatePhone] = useState([]);
//     const [userid, setuserid] = useState("");
//     const [update_modal_show, setUpdate_modal_show] = useState(false);

//     useEffect(() => {
//         getallUser()
//     }, []);

//     function getallUser() {
//         fetch("http://localhost:8001/tests/getAllTeam").then((result) => {
//             result.json().then((resp) => {
//                 setUser(resp.data);
//             });
//         });
//     }

//     function getUser(id) {
//         let data = { userid: id };
//         fetch("http://localhost:8001/tests/getSingleTeam", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {
//                 setupdateName(resp.data.name);
//                 setupdateEmail(resp.data.email);
//                 setupdatePhone(resp.data.phone);
//             });
//         });
//     }

//     function updateUser(id) {
//         let data = { userid: id, name: updateName, email: updateEmail, phone: updatePhone };
//         fetch("http://localhost:8001/tests/updateTeam", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {
//                 if (resp.success === true) {
//                     alert(resp.message);
//                 } else {
//                     alert(resp.message);
//                 }
//                 setUpdate_modal_show(false);
//                 getallUser()
//             });
//         });
//     }

//     const onUpdateSelect = (id) => {
//         setuserid(id);
//         setUpdate_modal_show(true);
//         getUser(id);
//     };

//     return (
//         <div className="App">
//             <div>
//                 <table border="1" style={{ borderCollapse: "collapse", margin: "50px 50px 70px 100px" }}>
//                     <tr>
//                         <td>Name</td>
//                         <td>Email</td>
//                         <td>Phone</td>
//                     </tr>
//                     {user.map((item) => (
//                         <tr>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                             <td>
//                                 <button type="button" onClick={() => onUpdateSelect(item._id)}>
//                                     UPDATE
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </table>
//             </div>

//             {update_modal_show && (
//                 <Modal dialogClassName="modal-dialog modal-dialog-centered modal-cust-main-cmn delted-modal" show={update_modal_show} onHide={() => setUpdate_modal_show(false)}>
//                     <Modal.Header closeButton className="border-0"></Modal.Header>
//                     <Modal.Body>
//                         <div className="text-center dltd-text-info">
//                             <span className="modal-title d-block mb-3">UPDATE DATA</span>
//                             <div className="row">
//                                 <table>
//                                     <tr>
//                                         <td>
//                                             name: <input type="text" value={updateName} onChange={(e) => setupdateName(e.target.value)} />
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             email: <input type="text" value={updateEmail} onChange={(e) => setupdateEmail(e.target.value)} />
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             phone: <input type="text" value={updatePhone} onChange={(e) => setupdatePhone(e.target.value)} />
//                                         </td>
//                                     </tr>
//                                 </table>
//                                 <div className="col-6 mt-3">
//                                     <button type="button" className="btn-comn-class w-100" onClick={() => updateUser(userid)}>
//                                         update
//                                     </button>
//                                 </div>
//                                 <div className="col-6 mt-3">
//                                     <button type="button" className="btn-comn-class btn-red-bg w-100" onClick={() => setUpdate_modal_show(false)}>
//                                         cancel
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </Modal.Body>
//                 </Modal>
//             )}
//         </div>
//     );
// }

//-------------------------------------------------------------------------------------------------------

// OPEN DELETE POPUP
// function User() {
//     const [user, setUser] = useState([]);
//     const [userid, setuserid] = useState("")
//     const [delete_modal_show, setdelete_modal_show] = useState(false);

//     useEffect(() => {
//         fetch("http://localhost:8001/tests/getAllTeam").then((result) => {
//             result.json().then((resp) => {
//                 setUser(resp.data);
//             });
//         });
//     }, []);

//     function deleteUser(id) {
//         let data = { userid: id };
//         fetch("http://localhost:8001/tests/deleteTeam", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {
//                 setdelete_modal_show(false);
//                 window.location.reload();
//             });
//         });
//     }

//     const onDeleteSelect = (id) => {
// 		setuserid(id);
// 		setdelete_modal_show(true);
// 	};

//     return (
//         <div className="App">
//             <div>
//                 <table border="1" style={{ borderCollapse: "collapse", margin: "50px 50px 70px 100px" }}>
//                     <tr>
//                         <td>Name</td>
//                         <td>Email</td>
//                         <td>Phone</td>
//                     </tr>
//                     {user.map((item) => (
//                         <tr>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                             <td>
//                                 <button type="button" onClick={() => onDeleteSelect(item._id)}>
//                                     delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </table>
//             </div>

//             {delete_modal_show && (
//                 <Modal dialogClassName="modal-dialog modal-dialog-centered modal-cust-main-cmn delted-modal" show={delete_modal_show} onHide={() => setdelete_modal_show(false)}>
//                     <Modal.Header closeButton className="border-0"></Modal.Header>
//                     <Modal.Body>
//                         <div className="text-center dltd-text-info">
//                             <svg width="62" height="78" viewBox="0 0 62 78" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M40.186 32.37L30.9993 41.5567L21.7694 32.37L15.6593 38.48L24.8894 47.6667L15.7027 56.8533L21.8127 62.9633L30.9993 53.7767L40.186 62.9633L46.296 56.8533L37.1093 47.6667L46.296 38.48L40.186 32.37ZM46.166 4.33333L41.8327 0H20.166L15.8327 4.33333H0.666016V13H61.3327V4.33333H46.166ZM4.99935 69.3333C4.99935 74.1 8.89935 78 13.666 78H48.3327C53.0993 78 56.9994 74.1 56.9994 69.3333V17.3333H4.99935V69.3333ZM13.666 26H48.3327V69.3333H13.666V26Z" fill="#EB5757" />
//                             </svg>
//                             <span className="modal-title d-block">Are You Sure?</span>
//                             <p>Do you really want to delete this List?</p>
//                             <div className="row">
//                                 <div className="col-6">
//                                     <button type="button" className="btn-comn-class w-100" onClick={() => deleteUser(userid)}>
//                                         Yes
//                                     </button>
//                                 </div>
//                                 <div className="col-6">
//                                     <button type="button" className="btn-comn-class btn-red-bg w-100" onClick={() => setdelete_modal_show(false)}>
//                                         No
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </Modal.Body>
//                 </Modal>
//             )}
//         </div>
//     );
// }

//=---------------------------------------------------------------------------------

// CREATE GET UPDATE AND DELETE USER DATA USING FUNCTION COMPONENT
// function User() {
//     const [user, setUser] = useState([]);
//     const [singleUser, setSingleUser] = useState({});
//     const [name, setName] = useState();
//     const [email, setEmail] = useState();
//     const [phone, setPhone] = useState();
//     const [updateName, setupdateName] = useState();
//     const [updateEmail, setupdateEmail] = useState();
//     const [updatePhone, setupdatePhone] = useState();
//     const [user_id, setUser_id] = useState();

//     function saveuser() {
//         let data = { name: name, email: email, phone: phone };
//         console.log(data, "==========");
//         fetch("http://localhost:8001/tests/test", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {});
//         });
//     }

//     useEffect(() => {
//         fetch("http://localhost:8001/tests/getAllTeam").then((result) => {
//             result.json().then((resp) => {
//                 setUser(resp.data);
//             });
//         });
//     }, []);

//     function getsingleuser(id) {
//         let data = { userid: id };
//         fetch("http://localhost:8001/tests/getSingleTeam", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {
//                 setSingleUser(resp.data);
//                 setUser_id(resp.data._id);
//                 setupdateName(resp.data.name);
//                 setupdateEmail(resp.data.email);
//                 setupdatePhone(resp.data.phone);
//             });
//         });
//     }

//     function deleteUser(id) {
//         let data = { userid: id };
//         fetch("http://localhost:8001/tests/deleteTeam", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {
//                 window.location.reload();
//             });
//         });
//     }

//     const updateUser = (user_id) => {
//         let data = { userid: user_id, name: updateName, email: updateEmail, phone: updatePhone };
//         fetch("http://localhost:8001/tests/updateTeam", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {});
//         });
//     };

//     return (
//         <div className="App">
//             <h1>Post Api Call</h1>
//             {/* create data */}
//             <form>
//                 name:{" "}
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => {
//                         setName(e.target.value);
//                     }}
//                     name="name"
//                 />
//                 <br />
//                 email:{" "}
//                 <input
//                     type="text"
//                     value={email}
//                     onChange={(e) => {
//                         setEmail(e.target.value);
//                     }}
//                     name="email"
//                 />
//                 <br />
//                 phone:{" "}
//                 <input
//                     type="text"
//                     value={phone}
//                     onChange={(e) => {
//                         setPhone(e.target.value);
//                     }}
//                     name="phone"
//                 />
//                 <br />
//                 <button type="button" onClick={saveuser}>
//                     save new user
//                 </button>
//             </form>

//             {/* get data and delete data*/}
//             <div style={{ display: "flex" }}>
//                 {/* get all data */}
//                 <table border="1" style={{ borderCollapse: "collapse", margin: "50px 50px 70px 100px" }}>
//                     <tr>
//                         <td>Name</td>
//                         <td>Email</td>
//                         <td>Phone</td>
//                     </tr>
//                     {user.map((item) => (
//                         <tr>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                             <td>
//                                 <button type="button" onClick={() => getsingleuser(item._id)}>
//                                     getsingleuser
//                                 </button>
//                             </td>
//                             {/* delete data */}
//                             <td>
//                                 <button type="button" onClick={() => deleteUser(item._id)}>
//                                     deleteUser
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </table>{" "}
//                 {/* get single user */}
//                 <table border="1" style={{ borderCollapse: "collapse", margin: "50px 0px 70px 700px", height: "70px", width: "350px" }}>
//                     <tr>
//                         <td>Name</td>
//                         <td>Email</td>
//                         <td>Phone</td>
//                     </tr>
//                     <tr>
//                         <td>{singleUser.name ? singleUser.name : "riddhi"}</td>
//                         <td>{singleUser.email ? singleUser.email : "riddhi@yopmail.com"}</td>
//                         <td>{singleUser.phone ? singleUser.phone : "8238360549"}</td>
//                     </tr>
//                 </table>
//             </div>

//             {/* update data */}
//             <table style={{ borderCollapse: "collapse", border: "1px solid black", marginLeft: "600px" }}>
//                 <tr>
//                     <td>Name</td>
//                     <td>Email</td>
//                     <td>Phone</td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <input
//                             type="text"
//                             value={updateName}
//                             name="name"
//                             onChange={(e) => {
//                                 setupdateName(e.target.value);
//                             }}
//                         />
//                     </td>
//                     <td>
//                         <input
//                             type="text"
//                             value={updateEmail}
//                             name="email"
//                             onChange={(e) => {
//                                 setupdateEmail(e.target.value);
//                             }}
//                         />
//                     </td>
//                     <td>
//                         <input
//                             type="text"
//                             value={updatePhone}
//                             name="phone"
//                             onChange={(e) => {
//                                 setupdatePhone(e.target.value);
//                             }}
//                         />
//                     </td>
//                     <td>
//                         <button type="button" onClick={() => updateUser(user_id)}>
//                             update
//                         </button>
//                     </td>
//                 </tr>
//             </table>
//         </div>
//     );
// }

//----------------------------------------------------------------------------

// GET ALL COUNTRY NAME
// class User extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             allcountry: null,
//         };
//     }

//     componentDidMount() {
//         fetch("http://localhost:8001/tests/countries").then((resp) => {
//             resp.json().then((result) => {
//                 this.setState({ allcountry: result.data });
//             });
//         });
//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1>fetch api data</h1>
//                 <select>
//                     <option value="">Select Country</option>
//                     {this.state.allcountry &&
//                         this.state.allcountry.map((item, i) => {
//                             return (
//                                 <option key={i} value={item.isoCode}>
//                                     {item.name + " "}
//                                 </option>
//                             );
//                         })}
//                 </select>
//             </div>
//         );
//     }
// }

//------------------------------------------------------------

// CREATE USER DATA USING CLASS COMPONENT
// class User extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "",
//             email: "",
//             phone: "",
//         };
//     }
//     submit() {
//         let url = "http://localhost:8001/tests/test";
//         let data = this.state;
//         fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {});
//         });
//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1>Post Api Example</h1>
//                 <input
//                     type="text"
//                     value={this.state.name}
//                     name="name"
//                     onChange={(data) => {
//                         this.setState({ name: data.target.value });
//                     }}
//                 />{" "}
//                 <br />
//                 <input
//                     type="text"
//                     value={this.state.email}
//                     name="email"
//                     onChange={(data) => {
//                         this.setState({ email: data.target.value });
//                     }}
//                 />{" "}
//                 <br />
//                 <input
//                     type="text"
//                     value={this.state.phone}
//                     name="phone"
//                     onChange={(data) => {
//                         this.setState({ phone: data.target.value });
//                     }}
//                 />{" "}
//                 <br />
//                 <button
//                     onClick={() => {
//                         this.submit();
//                     }}
//                 >
//                     submit
//                 </button>
//             </div>
//         );
//     }
// }

// ------------------------------------------------------------

// GET USER DATA USING CLASS COMPONENT
// class User extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             user: null,
//         };
//     }

//     componentDidMount() {
//         fetch("http://localhost:8001/tests/getAllTeam").then((resp) => {
//             resp.json().then((result) => {
//                 this.setState({ user: result.data });
//             });
//         });
//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1>fetch api data</h1>
//                 <select>
//                     <option value="">Select Name</option>
//                     {this.state.user &&
//                         this.state.user.map((item, i) => {
//                             return (
//                                 <option key={i} value={item._id}>
//                                     {item.name}
//                                 </option>
//                             );
//                         })}
//                 </select>
//             </div>
//         );
//     }
// }

//------------------------------------------------------------------------------------------------------

// CREATE USER DATA USING FUNCTION COMPONENT

// function User() {
//     const [name, setName] = useState([]);
//     const [email, setEmail] = useState([]);
//     const [phone, setPhone] = useState([]);

//     function saveuser() {
//         let data = { name, email, phone };
//         fetch("http://localhost:8001/tests/test", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {});
//         });
//     }

//     return (
//         <div className="App">
//             <h1>Post Api Call</h1>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => {
//                     setName(e.target.value);
//                 }}
//                 name="name"
//             />
//             <br />
//             <input
//                 type="text"
//                 value={email}
//                 onChange={(e) => {
//                     setEmail(e.target.value);
//                 }}
//                 name="email"
//             />
//             <br />
//             <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => {
//                     setPhone(e.target.value);
//                 }}
//                 name="phone"
//             />
//             <br />
//             <button type="button" onClick={saveuser}>
//                 save new user
//             </button>
//         </div>
//     );
// }

//----------------------------------------------------------------------------------------------------------------

// GET USER DATA USING FUNCTION COMPONENT
// function User() {
//     const [user, setUser] = useState([]);
//     useEffect(() => {
//         fetch("http://localhost:8001/tests/getAllTeam").then((result) => {
//             result.json().then((resp) => {
//                 setUser(resp.data);
//             });
//         });
//     }, []);

//     const getdetails = (id) => {
//         console.log(id);
//     };

//     return (
//         <div className="App">
//             <h1>Get Api Call</h1>
//             {
//                 <table border="1">
//                     <tr>
//                         <td>Name</td>
//                         <td>Email</td>
//                         <td>Phone</td>
//                     </tr>
//                     {user.map((item) => (
//                         <tr onClick={() => getdetails(item._id)}>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                         </tr>
//                     ))}
//                 </table>
//             }
//         </div>
//     );
// }

// ------------------------------------------------------------------------------------

// CRUD api call with open popup
// function User() {

//     const [addname, setAddName] = useState([])
//     const [addemail, setAddEmail] = useState([])
//     const [addphone, setAddPhone] = useState([])
//     const [user, setUser] = useState([]);
//     const [updateName, setupdateName] = useState([]);
//     const [updateEmail, setupdateEmail] = useState([]);
//     const [updatePhone, setupdatePhone] = useState([]);
//     const [userid, setuserid] = useState("");
//     const [update_modal_show, setUpdate_modal_show] = useState(false);
//     const [delete_modal_show, setDelete_modal_show] = useState(false);
//     const [details_show, setdetails_show] = useState(false);
//     const [add_user, setadd_user] = useState(false);

//     useEffect(() => {
//         getallUser();
//     }, []);

//     function getallUser() {
//         fetch("http://localhost:8001/tests/getAllTeam").then((result) => {
//             result.json().then((resp) => {
//                 setUser(resp.data);
//             });
//         });
//     }

//     function saveuser() {
//         let data = { name:addname, email:addemail, phone:addphone };
//         fetch("http://localhost:8001/tests/test", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {
//                 setadd_user(false)
//                 getallUser()
//             });
//         });
//     }

//     function getUser(id) {
//         let data = { userid: id };
//         fetch("http://localhost:8001/tests/getSingleTeam", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {
//                 setupdateName(resp.data.name);
//                 setupdateEmail(resp.data.email);
//                 setupdatePhone(resp.data.phone);
//             });
//         });
//     }

//     function updateUser(id) {
//         let data = { userid: id, name: updateName, email: updateEmail, phone: updatePhone };
//         fetch("http://localhost:8001/tests/updateTeam", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {
//                 if (resp.success === true) {
//                     alert(resp.message);
//                 } else {
//                     alert(resp.message);
//                 }
//                 setUpdate_modal_show(false);
//                 getallUser();
//             });
//         });
//     }

//     function deleteUser(id) {
//         let data = { userid: id };
//         fetch("http://localhost:8001/tests/deleteTeam", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             result.json().then((resp) => {
//                 setDelete_modal_show(false);
//                 getallUser();
//             });
//         });
//     }

//     const onUpdateSelect = (id) => {
//         setuserid(id);
//         setUpdate_modal_show(true);
//         getUser(id);
//     };

//     const onDeleteSelect = (id) => {
//         setuserid(id);
//         setDelete_modal_show(true);
//     };

//     const onViewDetails = (id) => {
//         setuserid(id);
//         setdetails_show(true);
//         getUser(id);
//     };

//     const addUser = () => {
//         setadd_user(true);
//     };

//     return (
//         <div className="App">
//             <div style={{ margin: "50px 0px 0px 100px" }}>
//                 <button type="button" className="btn btn-primary" onClick={() => addUser()}>
//                     ADD
//                 </button>
//             </div>
//             <div>
//                 <table border="1" style={{ margin: "10px 50px 70px 100px" }}>
//                     <tr>
//                         <td>Name</td>
//                         <td>Email</td>
//                         <td>Phone</td>
//                     </tr>
//                     {user.map((item) => (
//                         <tr>
//                             <td className="pe-5">{item.name}</td>
//                             <td className="pe-5">{item.email}</td>
//                             <td className="pe-5">{item.phone}</td>

//                             <td className="pe-3">
//                                 <button type="button" className="btn btn-info" onClick={() => onViewDetails(item._id)}>
//                                     view details
//                                 </button>
//                             </td>
//                             <td className="pe-3">
//                                 <button type="button" className="btn btn-success" onClick={() => onUpdateSelect(item._id)}>
//                                     UPDATE
//                                 </button>
//                             </td>
//                             <td>
//                                 <button type="button" className="btn btn-danger" onClick={() => onDeleteSelect(item._id)}>
//                                     DELETE
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </table>
//             </div>

//             {add_user && (
//                 <Modal dialogClassName="modal-dialog modal-dialog-centered modal-cust-main-cmn delted-modal" show={add_user} onHide={() => setadd_user(false)}>
//                     <Modal.Header closeButton className="border-0"></Modal.Header>
//                     <Modal.Body>
//                         <div className="text-center dltd-text-info">
//                             <span className="modal-title d-block mb-3">ADD DATA</span>
//                             <div className="row">
//                                 <table>
//                                     <tr>
//                                         <td>
//                                             name: <input type="text" onChange={(e) => setAddName(e.target.value)} />
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             email: <input type="text" onChange={(e) => setAddEmail(e.target.value)} />
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             phone: <input type="text" onChange={(e) => setAddPhone(e.target.value)} />
//                                         </td>
//                                     </tr>
//                                 </table>
//                                 <div className="col-6 mt-3">
//                                     <button type="button" className="btn btn-primary w-100" onClick={saveuser}>
//                                         ADD
//                                     </button>
//                                 </div>
//                                 <div className="col-6 mt-3">
//                                     <button type="button" className="btn btn-secondary w-100" onClick={() => setadd_user(false)}>
//                                         cancel
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </Modal.Body>
//                 </Modal>
//             )}

//             {details_show && (
//                 <Modal dialogClassName="modal-dialog modal-dialog-centered modal-cust-main-cmn delted-modal" show={details_show} onHide={() => setdetails_show(false)}>
//                     <Modal.Header closeButton className="border-0"></Modal.Header>
//                     <Modal.Body>
//                         <div className="text-center dltd-text-info">
//                             <span className="modal-title d-block mb-3">USER DETAILS</span>
//                             <div className="row">
//                                 <table>
//                                     <tr>
//                                         <td>name:</td>
//                                         <td>{updateName}</td>
//                                     </tr>
//                                     <tr>
//                                         <td>email:</td>
//                                         <td>{updateEmail}</td>
//                                     </tr>
//                                     <tr>
//                                         <td>phone:</td>
//                                         <td>{updatePhone}</td>
//                                     </tr>
//                                 </table>
//                                 <div className="mt-3">
//                                     <button type="button" className="btn btn-secondary " onClick={() => setdetails_show(false)}>
//                                         cancel
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </Modal.Body>
//                 </Modal>
//             )}

//             {update_modal_show && (
//                 <Modal dialogClassName="modal-dialog modal-dialog-centered modal-cust-main-cmn delted-modal" show={update_modal_show} onHide={() => setUpdate_modal_show(false)}>
//                     <Modal.Header closeButton className="border-0"></Modal.Header>
//                     <Modal.Body>
//                         <div className="text-center dltd-text-info">
//                             <span className="modal-title d-block mb-3">UPDATE DATA</span>
//                             <div className="row">
//                                 <table>
//                                     <tr>
//                                         <td>
//                                             name: <input type="text" value={updateName} onChange={(e) => setupdateName(e.target.value)} />
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             email: <input type="text" value={updateEmail} onChange={(e) => setupdateEmail(e.target.value)} />
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             phone: <input type="text" value={updatePhone} onChange={(e) => setupdatePhone(e.target.value)} />
//                                         </td>
//                                     </tr>
//                                 </table>
//                                 <div className="col-6 mt-3">
//                                     <button type="button" className="btn btn-primary w-100" onClick={() => updateUser(userid)}>
//                                         update
//                                     </button>
//                                 </div>
//                                 <div className="col-6 mt-3">
//                                     <button type="button" className="btn btn-secondary w-100" onClick={() => setUpdate_modal_show(false)}>
//                                         cancel
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </Modal.Body>
//                 </Modal>
//             )}

//             {delete_modal_show && (
//                 <Modal dialogClassName="modal-dialog modal-dialog-centered modal-cust-main-cmn delted-modal" show={delete_modal_show} onHide={() => setDelete_modal_show(false)}>
//                     <Modal.Header closeButton className="border-0"></Modal.Header>
//                     <Modal.Body>
//                         <div className="text-center dltd-text-info">
//                             <svg width="62" height="78" viewBox="0 0 62 78" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M40.186 32.37L30.9993 41.5567L21.7694 32.37L15.6593 38.48L24.8894 47.6667L15.7027 56.8533L21.8127 62.9633L30.9993 53.7767L40.186 62.9633L46.296 56.8533L37.1093 47.6667L46.296 38.48L40.186 32.37ZM46.166 4.33333L41.8327 0H20.166L15.8327 4.33333H0.666016V13H61.3327V4.33333H46.166ZM4.99935 69.3333C4.99935 74.1 8.89935 78 13.666 78H48.3327C53.0993 78 56.9994 74.1 56.9994 69.3333V17.3333H4.99935V69.3333ZM13.666 26H48.3327V69.3333H13.666V26Z" fill="#EB5757" />
//                             </svg>
//                             <span className="modal-title d-block">Are You Sure?</span>
//                             <p>Do you really want to delete this List?</p>
//                             <div className="row">
//                                 <div className="col-6">
//                                     <button type="button" className="btn btn-primary w-100" onClick={() => deleteUser(userid)}>
//                                         Yes
//                                     </button>
//                                 </div>
//                                 <div className="col-6">
//                                     <button type="button" className="btn btn-danger w-100" onClick={() => setDelete_modal_show(false)}>
//                                         No
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </Modal.Body>
//                 </Modal>
//             )}
//         </div>
//     );
// }
