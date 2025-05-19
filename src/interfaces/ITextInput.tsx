import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface ITextInput {
    type?: string;
    placeholder?: string;
    registerOptions: RegisterOptions
    label: string;
    fieldName: string;
    href?: string;
    defaultValue?: string;
}

export interface ITextInputWithSettings extends ITextInput{
    register: any;
    errors?: any
}
  