import { useState } from "react"
import { NavLink } from "react-router"
import x from "../../assets/x.svg"
import hamburger from "../../assets/hamburger.svg"
import styles from "./navbar.module.css"

export default function NavBar() {

    const [dropMenu, setDropMenu] = useState(false)

    return (
        <header className={styles["container"]}>
        <nav className={styles["nav"]}>
            <div className={styles["separator"]}>
                <img src="/images/akademika-logo.svg" alt="Akademika logo" className={styles["logo"]} />
                <section className={`${styles["link-group"]} ${dropMenu? styles["drop-menu"] : ""}`}>
                    <span className={styles["link-wrapper"]} onClick={() => setDropMenu(!dropMenu)}>
                        <NavLink className={styles["link"]} to="/" id={styles["first-link"]}>Início</NavLink>
                        <NavLink className={styles["link"]} to="/disciplinas/criar">Disciplinas</NavLink>
                        <NavLink className={styles["link"]} to="/sobre">Sobre</NavLink>
                        <NavLink className={styles["link"]} to="/contato">Contato</NavLink>
                    </span>
                </section>
                <section className={styles["hamburger-section"]}>
                    <button className={styles["button"]} onClick={() => setDropMenu(!dropMenu)}>
                        {dropMenu? (
                            <img className={styles["icon"]} src={x} alt="close hamburger icon" />
                        ) : (
                            <img className={styles["icon"]} src={hamburger} alt="hamburger icon" />
                        )}
                    </button>
                </section>
            </div>
        </nav>
    </header>
    )
}