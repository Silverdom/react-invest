import { calculateInvestmentResults, formatter } from "../util/investment";

const InvestCalculatorResult = ({ investmentDetails }) => {
    console.log(investmentDetails);
    let processArgument = {
        initialInvestment: parseInt(investmentDetails.initial),
        annualInvestment: parseInt(investmentDetails.annual),
        expectedReturn: parseInt(investmentDetails.return),
        duration: parseInt(investmentDetails.duration)
    };
    const processedInvestmentResult = calculateInvestmentResults(processArgument);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    processedInvestmentResult.map((yearlyResult, index) => (
                        <tr key={index}>
                            <td>{yearlyResult.year}</td>
                            <td>{formatter.format(yearlyResult.valueEndOfYear)}</td>
                            <td>{formatter.format(yearlyResult.interest)}</td>
                            <td>{formatter.format(yearlyResult.valueEndOfYear - yearlyResult.annualInvestment * yearlyResult.year)}</td>
                            <td>{formatter.format(yearlyResult.annualInvestment)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
};

export default InvestCalculatorResult;