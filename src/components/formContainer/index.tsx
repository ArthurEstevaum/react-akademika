import React from "react";
import styles from "./formContainer.module.scss";
import logo from "../../assets/akademika-logo.svg"

interface IFormContainer {
  children?: React.ReactNode;
  message?: string;
}

const FormContainer = ({ children, message }: IFormContainer) => {
  return (
    <section className={styles["form-container__section"]}>
      <div className={styles["container-decoration"]}></div>
      {message && (
        <div className={styles["form-header"]}>
          <img width={96} src={logo} alt="Logo" />
          <span>{message}</span>
        </div>
      )}
      {children && children}
    </section>
  );
};

export default FormContainer;
