import React from 'react';
import { useState } from 'react';

const Todo = () => {
    const [input, setInput] = useState("")
    const [item, setItem] = useState([])
    const [toggle, setToggle] = useState(false)

    const add = () => {
        if (!input) {

        }
        else {
            setItem([...item, input])
            setInput("")
        }

    }

    const deleteItem = (id) => {
        const updatedItems = item.filter((ele, ind) => {
            return ind != id
        })

        setItem(updatedItems)
    }

    const edit = () => {

        // alert("Cannot Edit Updating Soon!")
    }


    return (
        <div>

            <h2>Todo App</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="inputBox" placeholder='Enter a Task'></input>
                <i class="fa-light fa-plus fa-2x" onClick={add} style={{ border: "none", marginBottom: "5px", marginLeft: "10px" }}></i>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="itemList">


                    {
                        item.map((ele, ind) => {
                            return (
                                <div className="itemWrap" key={ind}>
                                    <h4>{ele}</h4>
                                    <div>
                                        <i class="fa-solid fa-pen-to-square" onClick={edit}></i>
                                        <button className="dltbtn" onClick={() => deleteItem(ind)}><i class="fa-solid fa-trash" style={{ color: "black" }} ></i></button>

                                    </div>


                                </div>
                            )
                        })
                    }



                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Todo;