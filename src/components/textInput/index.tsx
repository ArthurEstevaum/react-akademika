import styles from "./textInput.module.scss";
import {
  ITextInput,
  ITextInputWithSettings,
} from "../../interfaces/ITextInput";

const TextInput = ({
  type = "text",
  register,
  required = false,
  placeholder,
  fieldName,
  label,
  errors,
  href = "",
}: ITextInputWithSettings) => {
  return (
    <>
      {type !== "checkbox" ? (
        <div className={styles["text-input__container"]}>
          <label htmlFor={fieldName}>{label}</label>
          <input
            id={fieldName}
            type={type}
            {...register(fieldName, { required })}
            placeholder={placeholder}
          />
          {errors[fieldName] && (
            <span
              style={{ color: "#ff0000" }}
            >{`*O ${label.toLowerCase()} é obrigatório`}</span>
          )}
        </div>
      ) : (
        <div className={styles["checkbox-input__container"]}>
          <input
            id={fieldName}
            type={type}
            {...register(fieldName, { required })}
            placeholder={placeholder}
          />
          <a href={href}>{label}</a>
          {errors[fieldName] && (
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
