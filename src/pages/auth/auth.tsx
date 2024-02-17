import React from 'react';
import styles from './auth.module.css';
import Logo from '../../assets/logo.svg';
import { Tabs } from 'antd';
import { Login } from './login';
import { Registration } from './registration';
interface ITab {
    label: string;
    key: string;
    children: JSX.Element;
}
export const Auth: React.FC = () => {
    const items: ITab[] = [
        { label: 'Вход', key: 'item-1', children: <Login /> },
        { label: 'Регистрация', key: 'item-2', children: <Registration /> },
    ];
    return (
        <main className={styles.main}>
            <div className={styles.popup}>
                <div className={styles.popup__wrapper}>
                    <div className={styles.popup__inner}>
                        <div className={styles.popup__content}>
                            <img src={Logo} alt='Clever fit' className={styles.auth__logo} />
                            <Tabs items={items} id={styles.tabs} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
