import './browsepage.css';
import { Link } from 'react-router-dom';
import React, { Fragment, useState, useEffect } from "react";

export const BrowsePage = (props) => {
    const [data, setData] = useState([]);

    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/api/list_club").then((res) =>
            res.json().then((rows) => {
                setData(rows)
            })
        );
    }, []);

    return (
        <div className='browse-container'>
            <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className='title-container'>
                <Link to='/' className='title'>Clubify</Link>
            </div>
            <header className="App-header">
                {data.map((user, i) => (
                    <React.Fragment key={i}>
                        <div className='container'>
                            <p>{user[0]}</p>
                            <p>{user[1]}</p>
                            <p>{user[2]}</p>
                            <p>{user[3]}</p>
                            <p>{user[4]}</p>
                        </div>
 
                    </React.Fragment>
                ))}
            </header>
        </div>
    )
}