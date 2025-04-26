import { FieldValues, UseFormRegister } from "react-hook-form";

export interface ITextInput {
    type?: string;
    placeholder?: string;
    required?: boolean;
    label: string;
    fieldName: string;
    href?: string;
}

export interface ITextInputWithSettings extends ITextInput{
    register: UseFormRegister<FieldValues>;
    errors?: any
}
  