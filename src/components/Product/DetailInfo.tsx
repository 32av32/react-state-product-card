import styles from "./Product.module.css";
import React from "react";

interface IProps {
    setDetailToggle: Function
}

export default function ({ setDetailToggle }:IProps) {
    const closeBlock = (): void =>  setDetailToggle(false)

    return (
        <div className={styles.detail_info}>
            <div className={styles.detail_info__close} onClick={closeBlock}>X</div>
            <div className={styles.detail_info__text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, fuga.
            </div>
        </div>
    )
}