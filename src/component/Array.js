import { useState } from "react";

// function Array() {
//     const [arr, setArr] = useState(["player1", "player2", "player3", "player2"]);
//     const [Checked, setChecked] = useState([]);

//     const removeItem = (value) => {
//         const updatedArr = arr.filter((obj) => value != obj);
//         setArr(updatedArr);
//     };

//     const handleCheckboxChange = (event, item) => {
//         if (event.target.checked) {
//             setChecked(item);
//         } else {
//             setChecked("");
//         }
//     };

//     return (
//         <div style={{ margin: "50px 0px 0px 100px" }}>
//             <table border="1">
//                 <tr className="border-bottom border-dark">
//                     <th>player</th>
//                 </tr>
//                 {arr.map((item, index) => (
//                     <tr className="border-bottom border-dark">
//                         <td>
//                             <input type="checkbox" checked={Checked === item} onChange={(e) => handleCheckboxChange(e, item)} />
//                         </td>
//                         <td className="p-5">{item}</td>
//                         <td>
//                             {Checked === item && (
//                                 <button type="button" className="btn btn-info" onClick={() => removeItem(item)}>
//                                     delete
//                                 </button>
//                             )}
//                         </td>
//                     </tr>
//                 ))}
//             </table>
//         </div>
//     );
// }

function Array() {
    const [arr, setArr] = useState(["player1", "player2", "player3", "player2"]);
    const [Checked, setChecked] = useState([]);

    const removeItem = (index) => {
        const newArr = [...arr];
        newArr.splice(index, 1);
        setArr(newArr);
        setChecked("");
    };

    const handleCheckboxChange = (event, index) => {
        if (event.target.checked) {
            setChecked(index);
        } else {
            setChecked("");
        }
    };

    return (
        <div style={{ margin: "50px 0px 0px 100px" }}>
            <table border="1">
                <tr className="border-bottom border-dark">
                    <th>player</th>
                </tr>
                {arr.map((item, index) => (
                    <tr className="border-bottom border-dark">
                        <td>
                            <input type="checkbox" checked={Checked === index} onChange={(e) => handleCheckboxChange(e, index)} />
                        </td>
                        <td className="p-5">{item}</td>
                        <td>
                            {Checked === index && (
                                <button type="button" className="btn btn-info" onClick={() => removeItem(index)}>
                                    delete
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Array;
