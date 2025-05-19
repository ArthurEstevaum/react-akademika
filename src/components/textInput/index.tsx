import styles from "./textInput.module.scss";
import {
  ITextInput,
  ITextInputWithSettings,
} from "../../interfaces/ITextInput";
import { FieldError } from "react-hook-form";

interface ClassNameProp {
  className?: string
}

const TextInput = ({
  type = "text",
  register,
  registerOptions = { required: false },
  placeholder,
  fieldName,
  label,
  errors,
  href = "",
  defaultValue,
  className = ""
}: ITextInputWithSettings & ClassNameProp) => {

  function getInputErrors (obj: typeof errors, path: string) : FieldError | undefined {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  };

  return (
    <>
      {type !== "checkbox" ? (
        <div className={`${className} ${styles["text-input__container"]}`}>
          <label htmlFor={fieldName}>{label}</label>
          <input
            defaultValue={defaultValue}
            id={fieldName}
            type={type}
            {...register(fieldName, registerOptions)}
            className={getInputErrors(errors, fieldName) ? styles["errorRing"] : ""}
            placeholder={placeholder}
          />
          {getInputErrors(errors, fieldName) && (
            <span
              style={{ color: "#ff0000" }}
            >{getInputErrors(errors, fieldName)?.message == "" ? `*O ${label.toLowerCase()} é obrigatório` : getInputErrors(errors, fieldName)?.message}</span>
          )}
        </div>
      ) : (
        <div className={styles["checkbox-input__container"]}>
          <input
            id={fieldName}
            type={type}
            {...register(fieldName, registerOptions)}
            placeholder={placeholder}
          />
          <a href={href}>{label}</a>
          {getInputErrors(errors, fieldName) && (
            <span
              style={{ color: "#ff0000" }}
            >{`*O '${label.toLowerCase()}' é obrigatório`}</span>
          )}
        </div>
      )}
    </>
  );
};

export default TextInput;
