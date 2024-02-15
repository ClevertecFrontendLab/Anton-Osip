import React, { useState } from 'react';
import styles from './main-page-sider.module.css';
import Sider from 'antd/lib/layout/Sider';
import { Divider, Menu } from 'antd';
import {
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import Logo from '../../../assets/logo.svg';
import LogoMin from '../../../assets/logo_min.svg';
import exiteIcon from '../../../assets/exitIcon.svg';
import classNames from 'classnames';

interface IUseStateSider {
    width: number;
    collapsedWidth: number;
}

interface ISiderProps {
    collapsed: boolean;
    setCollapsed: (a: boolean) => void;
}
interface IMenuItem {
    key: string;
    icon: JSX.Element;
    label: string;
}

export const MainPageSider = ({ collapsed, setCollapsed }: ISiderProps) => {
    const [sider, setSider] = useState<IUseStateSider>({
        width: 208,
        collapsedWidth: 64,
    });
    const menuItems: IMenuItem[] = [
        {
            key: 'calendarIcon',
            icon: <CalendarOutlined className={styles.menu__icon} />,
            label: 'Календарь',
        },
        {
            key: 'heartFilledIcon',
            icon: <HeartFilled className={styles.menu__icon} />,
            label: 'Тренировки',
        },
        {
            key: 'trophyIcon',
            icon: <TrophyFilled className={styles.menu__icon} />,
            label: 'Достижения',
        },
        {
            key: 'IdcardIcon',
            icon: <IdcardOutlined className={styles.menu__icon} />,
            label: 'Профиль',
        },
    ];

    return (
        <Sider
            collapsedWidth={sider.collapsedWidth}
            breakpoint={'sm'}
            id={styles.sider}
            width={sider.width}
            trigger={null}
            collapsible
            collapsed={collapsed}
            onBreakpoint={(breack) => {
                if (breack) {
                    setSider({ width: 106, collapsedWidth: 0 });
                } else {
                    setSider({ width: 208, collapsedWidth: 64 });
                }
            }}
        >
            <div className={styles.sider__logo}>
                {collapsed ? (
                    <img src={LogoMin} alt='Clever fit' className={styles.sider__logo_min} />
                ) : (
                    <img src={Logo} alt='Clever fit' className={styles.sider__logo_max} />
                )}
            </div>

            <Menu
                id={styles.sider__menu}
                className={collapsed ? `${styles.sider__menu_cloused}` : ``}
                mode='inline'
                items={menuItems}
            />

            <div id={styles.sider__unfold}>
                <Divider className={styles.sider__divider} />
                <div data-test-id='sider-switch' className={styles.sider__exiteWrapper}>
                    <img src={exiteIcon} alt='exite ' className={styles.exit__icon} />
                    {collapsed ? '' : <span>Выход</span>}
                </div>
            </div>
            <div
                data-test-id='sider-switch-mobile'
                className={styles.sider__rightUnfold}
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
        </Sider>
    );
};
