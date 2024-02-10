import React from 'react';
import styles from './main-page.module.css';
import { MainPageHeader } from './main-page-header';
import { Layout } from 'antd';
import { MainPageContent } from './main-page-content';
import { MainPageSider } from './main-page-sider';

export const MainPage: React.FC = () => {
    return (
        <Layout id={styles.mainPage}>
            <MainPageSider />
            <Layout className={styles.mainPageContent}>
                <MainPageHeader />
                <MainPageContent />
            </Layout>
        </Layout>
    );
};
