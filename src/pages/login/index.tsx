import React, { useContext, useState } from "react";
import WidthContainer from "../../components/widthContainer";
import FormContainer from "../../components/formContainer";
import SimpleForm from "../../widgets/simpleForm";
import { ITextInput } from "../../interfaces/ITextInput";
import styles from "./login.module.scss";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { apiBaseUrl } from "../../services/service.config";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("")

  //   @ts-ignore
  const onSubmit = async (data) => {
    const response = await fetch(`${apiBaseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      auth?.login(responseData.token, responseData.email);
      navigate("/disciplinas");
    }

    setError("Usuário ou senha incorreta")
  };
  const fields: ITextInput[] = [
    {
      label: "Login",
      fieldName: "email",
      registerOptions: { required: true },
    },
    {
      type: "password",
      label: "Senha",
      fieldName: "password",
      registerOptions: { required: true },
    },
  ];
  return (
    <WidthContainer>
      <FormContainer message="Olá! Seja bem vindo novamente!">
      {error && (
  <p className="error-message">
    <img
      src="/public/images/error.svg"
      alt=""
      className="error-icon"
      aria-hidden="true"
    />
    Usuário ou senha incorretos
  </p>
)}
        <SimpleForm onSubmit={onSubmit} fields={fields} submitText="Entrar">
        </SimpleForm>
      </FormContainer>
    </WidthContainer>
  );
};

export default Login;
