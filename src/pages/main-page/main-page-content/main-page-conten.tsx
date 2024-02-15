import styles from './main-page-content.module.css';
import { Content } from 'antd/lib/layout/layout';
import { CardLegesy } from './card-legecy';
import { Cards } from './cards';
import { MainPageFooter } from './main-page-footer';

export const MainPageContent = ({ collapsed }: { collapsed: boolean }) => {
    return (
        <Content id={styles.content} className={collapsed ? `` : `${styles.open}`}>
            <CardLegesy />
            <Cards />
            <MainPageFooter />
        </Content>
    );
};
