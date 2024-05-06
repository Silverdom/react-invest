import { useState } from "react";
import InvestCalculatorInput from "./InvestCalculatorInput";
import InvestCalculatorResult from "./InvestCalculatorResult";

const initialInvestmentDetails = {
    initial: 0,
    annual: 0,
    return: 0,
    duration: 0,
}


const InvestCalculator = () => {
    const [investmentDetails, setInvestmentDetails] = useState(initialInvestmentDetails);

    const onChangeHandler = (field, value) => {
        setInvestmentDetails((oldInvestmentDetails) => {
            return { ...oldInvestmentDetails, [field]: value };
        })
    }

    return (
        <>
            <InvestCalculatorInput onChangeHandler={ onChangeHandler } investmentDetails={ investmentDetails } />
            <InvestCalculatorResult investmentDetails={ investmentDetails } />
        </>
    );
}

export default InvestCalculator;