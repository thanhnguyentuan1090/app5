import { useState } from "react";

const Hobbies = () => {
    const [hobbies, setHobbies] = useState([
        { id: 1, hobby: "?" },
        { id: 2, hobby: "!" },
    ]);
    const handleOnClick = (event) => {
        console.log(event);
    };

    const handleDelete = (id) => {
        const updateHobbies = hobbies.filter((item) => {
            return item.id = /= id;
        });
        setHobbies(updateHobbies);
    };
    return (
        <div>
            <h1>Rate your hobbies </h1>
            <ul>
                {hobbies.map((item, idx) => {
                    return (
                        <li>
                            <span>

                            </span>
                            <select>
                                <option>Like</option>
                                <option>love</option>
                            </select>
                            <span>
                                {item.hobbie}
                            </span>
                            <button
                                onCliick={( => {
                                    handleDelete(item.id);
                                })}>
                            </button>
                        </li>

                    )
                })}
            </ul>
        </div>

    )
}