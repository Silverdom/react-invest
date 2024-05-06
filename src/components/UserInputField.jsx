const UserInputField = ({ id, title, onChangeHandler, investmentDetails }) => {
    return (
        <span>
            <label htmlFor={ id }>{ title }</label>
            <input 
                type="number" 
                min={ 0 } 
                id={ id } 
                value={ investmentDetails[id] } 
                onChange={ (e) => onChangeHandler(id, e.target.value) }     
            />
        </span>
    );
}

export default UserInputField;