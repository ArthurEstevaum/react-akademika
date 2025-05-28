import WidthContainer from "../../components/widthContainer";
import FormContainer from "../../components/formContainer";
import SimpleForm from "../../widgets/simpleForm";
import { ITextInput } from "../../interfaces/ITextInput";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

const Cadastro = () => {

  const auth = useContext(AuthContext)
  const [error, setError] = useState("")
  const navigate = useNavigate();

  //   @ts-ignore
  const onSubmit = async(data) => {
    const response = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if(response.ok) {
      const responseData = await response.json();
      auth?.login(responseData.token, responseData.email);
      navigate("/disciplinas");
    }

    setError("E-mail já está em uso")
  };
  const fields: ITextInput[] = [
    {
      label: "Nome",
      fieldName: "username",
      registerOptions: { required: true },
    },
    {
      type: "email",
      label: "E-mail",
      fieldName: "email",
      registerOptions: { required: true },
    },
    {
      type: "password",
      label: "Senha",
      fieldName: "password",
      registerOptions: { required: true },
    }
  ];
  return (
    <WidthContainer>
      <FormContainer message="Seja bem vindo!">
        {error && <p>{error}</p>}
        <SimpleForm
          onSubmit={onSubmit}
          fields={fields}
          submitText="Cadastre-se"
        ></SimpleForm>
      </FormContainer>
    </WidthContainer>
  );
};

export default Cadastro;
