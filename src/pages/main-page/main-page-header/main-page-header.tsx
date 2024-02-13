import React from 'react';
import styles from './main-page-header.module.css';
import { Header } from 'antd/lib/layout/layout';
import { Row, Col, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
import { SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const MainPageHeader: React.FC = () => {
    return (
        <Header id={styles.header}>
            <Row>
                <Col span={24}>
                    <Breadcrumb className={styles.header__breadcrumb}>
                        <Breadcrumb.Item>Главная</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className={styles.header__row}>
                <Col xs={{ span: 20 }} md={{ span: 19 }} xl={{ span: 21 }}>
                    <Title className={styles.header__title}>
                        Приветствуем тебя в CleverFit — приложении, <br />
                        которое поможет тебе добиться своей мечты!
                    </Title>
                </Col>
                <Col
                    xs={{ span: 2, offset: 2 }}
                    md={{ span: 2, offset: 3 }}
                    xl={{ span: 2, offset: 1 }}
                >
                    <Link to='#' className={styles.header__settings}>
                        <SettingOutlined size={14} />
                        Настройки
                    </Link>
                </Col>
            </Row>
        </Header>
    );
};
