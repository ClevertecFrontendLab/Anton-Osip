import React from 'react';
import styles from './main-page-header.module.css';
import { Header } from 'antd/lib/layout/layout';
import { Row, Col, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import { SettingOutlined } from '@ant-design/icons';

export const MainPageContent: React.FC = () => {
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
                <Col span={18}>
                    <Title className={styles.header__title}>
                        Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться
                        своей мечты!
                    </Title>
                </Col>
                <Col span={3} offset={2}>
                    <Button
                        className={styles.header__settings}
                        icon={<SettingOutlined size={14} />}
                        type='text'
                    >
                        Настройки
                    </Button>
                </Col>
            </Row>
        </Header>
    );
};
