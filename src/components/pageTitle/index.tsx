import styles from "./pageTitle.module.css"

interface pageTitleProps {
  message: string;
}

export default function PageTitle({ message }: pageTitleProps) {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>{message}</h1>
    </div>
  );
}
