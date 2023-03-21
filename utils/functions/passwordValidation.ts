import { ConstantText } from "../const/constantTexts/ConstantText";

const passwordValidation = (password: string) => {
    return (password.length >= ConstantText.PASSWORD_MIN_LENGTH);
}

export default passwordValidation;