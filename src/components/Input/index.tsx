import React, { InputHTMLAttributes } from "react";

import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ children, ...rest }) => (
  <Container>
    {children}
    <input {...rest}/>
  </Container>
)

export default Input;
