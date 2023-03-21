import { ConstantText } from "../const/constantTexts/ConstantText";

const RegisterPasswordValidation = (password: string, rePassword: string): boolean => {
    return ((password === rePassword) && password.length >= ConstantText.PASSWORD_MIN_LENGTH);
}

export default RegisterPasswordValidation;