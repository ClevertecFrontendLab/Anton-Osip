import React from 'react';
import styles from './main-page.module.css';
import { MainPageHeader } from './main-page-header';
import { Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { MainPageContent } from './main-page-content';

export const MainPage: React.FC = () => {
    return (
        <Layout id={styles.mainPage}>
            <Sider width={208}></Sider>
            <Layout className={styles.mainPageContent}>
                <MainPageHeader />
                <MainPageContent />
            </Layout>
        </Layout>
    );
};
