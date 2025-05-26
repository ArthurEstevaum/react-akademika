import { useContext, useState } from "react";
import { NavLink } from "react-router";
import x from "../../assets/x.svg";
import hamburger from "../../assets/hamburger.svg";
import styles from "./navbar.module.css";
import { AuthContext } from "../../contexts/AuthContext";

export default function NavBar() {
  const [dropMenu, setDropMenu] = useState(false);
  const auth = useContext(AuthContext);

  return (
    <header className={styles["container"]}>
      <nav className={styles["nav"]}>
        <div className={styles["separator"]}>
          <img
            src="/images/akademika-logo.svg"
            alt="Akademika logo"
            className={styles["logo"]}
          />
          {auth?.isAuthenticated ? (
            <section
              className={`${styles["link-group"]} ${
                dropMenu ? styles["drop-menu"] : ""
              }`}
            >
              <span
                className={styles["link-wrapper"]}
                onClick={() => setDropMenu(!dropMenu)}
              >
                <NavLink
                  className={styles["link"]}
                  to="/"
                  id={styles["first-link"]}
                >
                  Início
                </NavLink>
                <NavLink className={styles["link"]} to="/disciplinas">
                  Disciplinas
                </NavLink>
                <NavLink className={styles["link"]} to="/sobre">
                  Sobre
                </NavLink>
                <NavLink className={styles["link"]} to="/contato">
                  Contato
                </NavLink>
              </span>
            </section>
          ) : (
            <section
              className={`${styles["link-group"]} ${
                dropMenu ? styles["drop-menu"] : ""
              }`}
            >
              <span
                className={styles["link-wrapper"]}
                onClick={() => setDropMenu(!dropMenu)}
              >
                <NavLink
                  className={styles["link"]}
                  to="/"
                  id={styles["first-link"]}
                >
                  Início
                </NavLink>
                <NavLink className={styles["link"]} to="/cadastro">
                  Cadastro
                </NavLink>
                <NavLink className={styles["link"]} to="/login">
                  Login
                </NavLink>
              </span>
            </section>
          )}
          <section className={styles["hamburger-section"]}>
            <button
              className={styles["button"]}
              onClick={() => setDropMenu(!dropMenu)}
            >
              {dropMenu ? (
                <img
                  className={styles["icon"]}
                  src={x}
                  alt="close hamburger icon"
                />
              ) : (
                <img
                  className={styles["icon"]}
                  src={hamburger}
                  alt="hamburger icon"
                />
              )}
            </button>
          </section>
        </div>
      </nav>
    </header>
  );
}
