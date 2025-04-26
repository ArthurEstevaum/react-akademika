import React from "react";
import styles from "./formContainer.module.scss";

interface IFormContainer {
  children?: React.ReactNode;
  message?: string;
}

const FormContainer = ({ children, message }: IFormContainer) => {
  return (
    <section className={styles["form-container__section"]}>
      {message && (
        <div className={styles["form-header"]}>
          <img src="images/akademika-logo.svg" alt="Logo" />
          <span>{message}</span>
        </div>
      )}
      {children && children}
    </section>
  );
};

export default FormContainer;
