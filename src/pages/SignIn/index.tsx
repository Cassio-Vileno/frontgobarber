import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"

import logoImg from "../../assets/logo.svg"

import Button from "../../components/Button";
import Input from "../../components/Input";

import { Container, Content, Background } from "./styles";


const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu login</h1>

        <Input name="E-mail" placeholder="E-mail" >
          <FiMail/>
        </Input>
        <Input
          name="Senha"
          type="password"
          placeholder="Senha"
        >
          <FiLock/>
        </Input>

        <Button>Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="#">
        <FiLogIn/>
        Criar conta</a>
    </Content>
    <Background/>
  </Container>
)
export default SignIn;