import * as React from "react";
import {LargestPrimeFactorFunc} from "../../components/3-LargestPrimeFactor/LargestPrimeFactor";
import {InputNumber} from "../../components/Inputs/InputNumber";


export const LargestPrimeFactor = () => (
    <>
        {LargestPrimeFactorFunc(4367)}
    </>
);
