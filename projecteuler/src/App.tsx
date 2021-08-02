import React from 'react';
import {Link, Route} from "react-router-dom";
import './App.css';
import Routes from "./components/Routes/Routes";
import solved from "./SolvedProblemsList";

const App = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <aside className="col-3 bg-light">
                    <h5>Basic</h5>
                    <ul>
                        {solved.map((solved, index) => (
                            <li><Link to={solved.route}>{solved.problem}: {solved.title}</Link></li>
                        ))}
                    </ul>
                </aside>
                <Routes/>
            </div>
        </div>
    );
};

export default App;
