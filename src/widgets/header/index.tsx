import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import WidthContainer from "../../components/widthContainer";
import { UserData } from "../../contexts/usuario";

interface IHeader {
  isAutenticated?: boolean;
}

const Header = ({ isAutenticated = false }: IHeader) => {
  const notAutenticatedMenuOptions = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Login",
      href: "/",
    },
    {
      title: "Cadastre-se",
      href: "/",
    },
  ];
  const autenticatedMenuOptions = [
    {
      title: "Dashboard",
      href: "/",
    },
    {
      title: "Disciplinas",
      href: "/",
    },
    {
      title: "Conta",
      href: "/",
    },
  ];

  const [menuOptions, setMenuOptions] = useState<
    { title: string; href: string }[]
  >([]);

  useEffect(() => {
    if (isAutenticated) setMenuOptions(autenticatedMenuOptions);
    else setMenuOptions(notAutenticatedMenuOptions);
  }, [isAutenticated]);

  return (
    <header>
      <WidthContainer>
        <div className={styles["header"]}>
          <div className={styles["header__logo"]}>
            <img width={120} height={125} src="/images/akademika-logo.svg" alt="Logo" />
          </div>
          <nav className={styles["header__nav"]}>
            <ul>
              {menuOptions.map((item, key) => {
                return (
                  <li key={`menuOption_${key}`}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </WidthContainer>
    </header>
  );
};

export default Header;
