import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Pages
import {MultiplesOf3And5} from "../../pages/MultiplesOf3And5/MultiplesOf3And5";


const Routes = () => {
    return (
        <Switch>
            <>
                <Route path="/MultiplesOf3And5" component={MultiplesOf3And5}/>
            </>
        </Switch>
    );
};

export default Routes;
