import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Pages
import {MultiplesOf3And5} from "../../pages/MultiplesOf3And5/MultiplesOf3And5";
import {LargestPrimeFactor} from "../../pages/LargestPrimeFactor/MultiplesOf3And5";


const Routes = () => {
    return (
        <Switch>
            <>
                <Route path="/1-MultiplesOf3And5" component={MultiplesOf3And5}/>
                <Route path="/3-LargestPrimeFactor" component={LargestPrimeFactor}/>
            </>
        </Switch>
    );
};

export default Routes;
