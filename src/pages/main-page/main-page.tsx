import React, { useState } from 'react';
import styles from './main-page.module.css';
import { MainPageHeader } from './main-page-header';
import { Layout } from 'antd';
import { MainPageContent } from './main-page-content';
import { MainPageSider } from './main-page-sider';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <Layout id={styles.mainPage}>
            <MainPageSider collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className={styles.mainPageContent}>
                <MainPageHeader />
                <MainPageContent collapsed={collapsed} />
            </Layout>
        </Layout>
    );
};
