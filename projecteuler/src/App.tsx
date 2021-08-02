import React from 'react';
import {Link, Route} from "react-router-dom";
import './App.css';

const App = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <aside className="col-3 bg-light">
                    <h5>Basic</h5>
                    <ul>
                        <li><Link to="/">Hello World</Link></li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default App;
