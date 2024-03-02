import React from 'react';
import '../App.css'
import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        // navbar and setting routing destination 

        <div>
            <nav className="navbar bg-primary text-white opacity-75 ">

                <div className="container-fluid ">

                    <ul className="navbar nav" >
                        <li className="nav-item"><h2 className=" mx-5">ABC mart</h2></li>
                        <li className="nav-item  " > <Link className="nav-link active  mx-5 text-white border border-2 rounded-pill item" to="/">Home</Link></li>

                        <li className="nav-item" >    <Link className="nav-link active  mx-5 text-white border  border-2 rounded-pill item" to="/fruit">Fruit</Link></li>
                        <li className="nav-item " ><Link className="nav-link active  mx-5 text-white border  border-2 rounded-pill item" to="/vegetable">Vegetable</Link></li>
                        <li className="nav-item " ><Link className="nav-link active  mx-5 text-white border  border-2 rounded-pill item " to="/nuts">Nuts</Link></li></ul>

                </div>
            </nav>
        </div>

    );
};

export default Navigation;