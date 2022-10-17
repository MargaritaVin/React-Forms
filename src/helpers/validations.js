const EMAIL_REGEXP = /\S+@\S+\.\S+/;
const isEmailValid = (value) => {
    return EMAIL_REGEXP.test(value);
};

const getInputValidations = (fieldName) => {
    if (fieldName === "firstName") {           
        return {
            required: "First name is required field!",
            minLength: {
                value: 3, 
                message: "Min length of first name is 3"
            }
        }
    } 
    if (fieldName === "lastName") {
        return {
            required: "Last name is required field!",
            minLength: {
                value: 3, 
                message: "Min length of last name is 3"
            }
        }
    }
}

module.exports = {
    isEmailValid,
    getInputValidations,
};