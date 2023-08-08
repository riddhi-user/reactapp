import React, { useState } from "react";

function State_City() {
    const array = [
        {
            name: "Gujarat",
            code: "gj",
            cities: ["ahemdabad", "surat"],
        },
        {
            name: "Mahrastra",
            code: "mh",
            cities: ["mumbai", "goa"],
        },
        {
            name: "Rajasthan",
            code: "rj",
            cities: ["jaipur", "Udaipur"],
        },
    ];

    const [statename, setStatename] = useState("");
    const [city, setCity] = useState("");

    const handleCity = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="text-center mt-5">
            <form>
                <select
                    onChange={(e) => {
                        setStatename(e.target.value);
                    }}
                >
                    <option>state</option>
                    {array.map((item) => (
                        <option>{item.name}</option>
                    ))}
                </select>

                {statename && (
                    <select value={city} onChange={handleCity}>
                        <option>city</option>
                        {array
                            .find((item) => item.name === statename)
                            .cities.map((item) => (
                                <option>{item}</option>
                            ))}
                    </select>
                )}
            </form>
        </div>
    );
}

export default State_City;
