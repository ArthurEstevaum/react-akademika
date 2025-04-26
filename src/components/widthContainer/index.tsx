import React from "react";
import styles from './widthContainer.module.scss';

interface IWidthContainer {
    children?: React.ReactNode;
}

const WidthContainer = ({children}:IWidthContainer) =>{

    return (
        <section className={styles['base-section']}>
            <div className={styles['base-section__container']}>
                {children && children}
            </div>
        </section>
    );
}

export default WidthContainer