import { useForm } from "react-hook-form";
import FormContainer from "../../../components/formContainer";
import WidthContainer from "../../../components/widthContainer";
import TextInput from "../../../components/textInput";

export default function createSubject() {

    const { control, register, handleSubmit, formState } = useForm()

    return (
        <WidthContainer>
            <FormContainer message="Seja bem vindo!">
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <TextInput fieldName="subjectName" label="Nome da disciplina" register={register} errors={formState.errors} />
                    
                </form>
            </FormContainer>
        </WidthContainer>
    )
}