import React from "react";
import WidthContainer from "../../components/widthContainer";
import FormContainer from "../../components/formContainer";
import SimpleForm from "../../widgets/simpleForm";
import { ITextInput } from "../../interfaces/ITextInput";
import styles from './login.module.scss';

const Login = () => {
  //   @ts-ignore
  const onSubmit = (data) => {
    console.log(data);
  };
  const fields: ITextInput[] = [
    {
      label: "Login",
      fieldName: "login",
      registerOptions: { required: true }
    },
    {
      type: "password",
      label: "Senha",
      fieldName: "password",
      registerOptions: { required: true }
    },
  ];
  return (
    <WidthContainer>
      <FormContainer message="Olá! Seja bem vindo novamente!">
        <SimpleForm
          onSubmit={onSubmit}
          fields={fields}
          submitText="Entrar"
        >
            <a className={styles['forget-password-link']} href="/forget-password">Esqueci minha senha</a>
        </SimpleForm>
      </FormContainer>
    </WidthContainer>
  );
};

export default Login;
