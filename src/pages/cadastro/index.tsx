import React from "react";
import WidthContainer from "../../components/widthContainer";
import FormContainer from "../../components/formContainer";
import SimpleForm from "../../widgets/simpleForm";
import { ITextInput } from "../../interfaces/ITextInput";
import styles from './cadastro.module.scss';

const Cadastro = () => {
  //   @ts-ignore
  const onSubmit = (data) => {
    console.log(data);
  };
  const fields: ITextInput[] = [
    {
      label: "Nome",
      fieldName: "name",
      required: true,
    },
    {
      type: "email",
      label: "E-mail",
      fieldName: "email",
      required: true,
    },
    {
      type: "password",
      label: "Senha",
      fieldName: "password",
      required: true,
    },
    {
      type: "checkbox",
      label: "Termos de serviço",
      fieldName: "termos-e-servico",
      required: true,
      href: "/termos-e-servico",
    },
  ];
  return (
    <WidthContainer>
      <FormContainer message="Olá! Seja bem vindo novamente!">
        <SimpleForm
          onSubmit={onSubmit}
          fields={fields}
          submitText="Cadastre-se"
        >
        </SimpleForm>
      </FormContainer>
    </WidthContainer>
  );
};

export default Cadastro;
