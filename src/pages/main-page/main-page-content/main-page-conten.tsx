import React from 'react';
import styles from './main-page-content.module.css';
import { Content } from 'antd/lib/layout/layout';
import { CardLegesy } from './card-legecy';
import { Cards } from './cards';
import { MainPageFooter } from './main-page-footer';

export const MainPageContent: React.FC = () => {
    return (
        <Content id={styles.content}>
            <CardLegesy />
            <Cards />
            <MainPageFooter />
        </Content>
    );
};
