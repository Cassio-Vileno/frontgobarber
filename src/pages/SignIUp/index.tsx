/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-bind */
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationsErros';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background, AtimationContainer } from './styles';
import { useToast } from '../../hooks/Toast';

interface SignUpFormData {
  name: string
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast()
  const history = useHistory()

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      api.post('/users', data)

      history.push('/')

      addToast({
        type: 'success',
         title: ' Cadastro realizado',
         description: 'Você já pode fazer seu login no GoBarber!'
      })

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
      addToast({
        type: 'info',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer seu cadastro, tente novamente.',
      });
    }
  }, [addToast, history]);

  return (
    <Container>
      <Background />
      <Content>
        <AtimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" placeholder="Nome">
              <FiUser />
            </Input>

            <Input name="email" placeholder="E-mail">
              <FiMail />
            </Input>

            <Input name="password" type="password" placeholder="Senha">
              <FiLock />
            </Input>

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </AtimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
