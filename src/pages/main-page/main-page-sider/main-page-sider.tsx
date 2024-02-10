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

export const MainPageSider: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider
            id={styles.sider}
            width={208}
            collapsedWidth={64}
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <div className={styles.sider__logo}>
                {collapsed ? (
                    <img src={LogoMin} alt='Clever fit' className={styles.sider__logo_min} />
                ) : (
                    <img src={Logo} alt='Clever fit' className={styles.sider__logo_max} />
                )}
            </div>

            <Menu id={styles.sider__menu} mode='inline'>
                <Menu.Item
                    className={
                        collapsed
                            ? `${styles.sider__menuItem} ${styles.sider__menuItem_collapsed}`
                            : `${styles.sider__menuItem}`
                    }
                    key='calendarIcon'
                    icon={<CalendarOutlined />}
                >
                    {collapsed ? '' : 'Календарь'}
                </Menu.Item>
                <Menu.Item
                    className={
                        collapsed
                            ? `${styles.sider__menuItem} ${styles.sider__menuItem_collapsed}`
                            : `${styles.sider__menuItem}`
                    }
                    key='heartFilledIcon'
                    icon={<HeartFilled />}
                >
                    {collapsed ? '' : 'Тренировки'}
                </Menu.Item>
                <Menu.Item
                    className={
                        collapsed
                            ? `${styles.sider__menuItem} ${styles.sider__menuItem_collapsed}`
                            : `${styles.sider__menuItem}`
                    }
                    key='trophyIcon'
                    icon={<TrophyFilled />}
                >
                    {collapsed ? '' : 'Достижения'}
                </Menu.Item>
                <Menu.Item
                    className={
                        collapsed
                            ? `${styles.sider__menuItem} ${styles.sider__menuItem_collapsed}`
                            : `${styles.sider__menuItem}`
                    }
                    key='IdcardIcon'
                    icon={<IdcardOutlined />}
                >
                    {collapsed ? '' : 'Профиль'}
                </Menu.Item>
            </Menu>
            <div id={styles.sider__unfold}>
                <Divider className={styles.sider__divider} />
                <div
                    className={styles.sider__exiteWrapper}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <img src={exiteIcon} alt='exite ' />
                    {collapsed ? '' : <span>Выход</span>}
                </div>
            </div>
            <div
                data-test-id='sider-switch'
                className={styles.sider__rightUnfold}
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
        </Sider>
    );
};
