const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const emailValidation = (email: string) => {
    return emailRegex.test(email);
}

export default emailValidation;
