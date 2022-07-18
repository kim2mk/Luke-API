import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";


const Form = () => {
    let [option, setOption] = useState("");
    let [id, setId] = useState("");
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        navigate(`/${option}/${id}`)
    }


    return (
        <div>
            <form onSubmit={submitForm} className="d-flex align-items-center justify-content-center gap-3 m-3">
                <div>
                    <label>Search for:</label>
                    <select onChange={(e)=>setOption(e.target.value)}>
                        <option value=""></option>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="films">films</option>
                        <option value="species">species</option>
                        <option value="vehicles">vehicles</option>
                        <option value="starships">starships</option>
                    </select>
                </div>
                <div>
                    <label>ID:</label>
                    <input onChange={(e)=>setId(e.target.value)} type="number"/>
                </div>
                <input type="submit" value="Search" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default Form;