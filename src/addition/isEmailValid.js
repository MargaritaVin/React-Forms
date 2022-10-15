const EMAIL_REGEXP = /\S+@\S+\.\S+/;
const isEmailValid = (value) => {
    return EMAIL_REGEXP.test(value);
};

export default isEmailValid;