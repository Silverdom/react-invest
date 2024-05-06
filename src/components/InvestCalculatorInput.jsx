import UserInputField from "./UserInputField";

const InvestCalculatorInput = ({ onChangeHandler, investmentDetails }) => {

    return (
        <div id="user-input">
            <span className="input-group">
                <UserInputField id="initial" title="INITIAL INVESTMENT" onChangeHandler={onChangeHandler} investmentDetails={investmentDetails}/>
                <UserInputField id="annual" title="ANNUAL INVESTMENT" onChangeHandler={onChangeHandler} investmentDetails={investmentDetails}/>
            </span>
            <span className="input-group">
                <UserInputField id="return" title="EXPECTED RETURN" onChangeHandler={onChangeHandler} investmentDetails={investmentDetails}/>
                <UserInputField id="duration" title="DURATION" onChangeHandler={onChangeHandler} investmentDetails={investmentDetails}/>
            </span>
        </div>
    );
};

export default InvestCalculatorInput;