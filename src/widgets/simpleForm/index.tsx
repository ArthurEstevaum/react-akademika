import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../components/textInput";
import {
  ITextInput,
  ITextInputWithSettings,
} from "../../interfaces/ITextInput";
import styles from "./simpleForm.module.scss";

interface ISimpleForm{
    fields: ITextInput[];
    children?: React.ReactNode;
    submitText: string;
    onSubmit: (data: any) => void;
}

function SimpleForm({ fields, children, submitText, onSubmit }: ISimpleForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 

  const [loginFieldsNormalized, setFieldsNormalized] =
    useState<ITextInputWithSettings[]>();

  useEffect(() => {
    setFieldsNormalized(
      fields.map((item) => {
        return { ...item, register };
      })
    );
  }, []);

  return (
    <form className={styles["simple-form"]} onSubmit={handleSubmit(onSubmit)}>
      {loginFieldsNormalized?.map((fields, key) => {
        return <TextInput key={key} {...fields} errors={errors} />;
      })}
      {children && children}
      <button className={styles['btn-submit']} type="submit">{submitText}</button>
    </form>
  );
}

export default SimpleForm;
