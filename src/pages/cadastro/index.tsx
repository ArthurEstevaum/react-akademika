import WidthContainer from "../../components/widthContainer";
import FormContainer from "../../components/formContainer";
import SimpleForm from "../../widgets/simpleForm";
import { ITextInput } from "../../interfaces/ITextInput";

const Cadastro = () => {
  //   @ts-ignore
  const onSubmit = (data) => {
    console.log(data);
  };
  const fields: ITextInput[] = [
    {
      label: "Nome",
      fieldName: "name",
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
    },
    {
      type: "checkbox",
      label: "Termos de serviço",
      fieldName: "termos-e-servico",
      registerOptions: { required: true },
      href: "/termos-e-servico",
    },
  ];
  return (
    <WidthContainer>
      <FormContainer message="Seja bem vindo!">
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
