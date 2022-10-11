import React, { FC } from 'react';
import styles from './Title.module.css'

interface ITitle {
    title: string
}

const Title: FC<ITitle> = ({title}) => {

    return (
        <h1 className={styles.Title}>{title}</h1>
    );
};

export default Title;