import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer disabled={!!disabled} onClick={onClick} children={title} />;
};

export default Button;
