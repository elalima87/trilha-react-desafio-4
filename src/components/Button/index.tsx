import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, type = "button", disabled, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} type={type} disabled={disabled}>{title}</ButtonContainer>;
};

export default Button;
