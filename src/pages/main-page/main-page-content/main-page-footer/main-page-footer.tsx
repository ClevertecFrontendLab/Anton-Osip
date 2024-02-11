import React from 'react';
import styles from './main-page-footer.module.css';
import { Col, Divider, Row } from 'antd';
import { Link } from 'react-router-dom';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export const MainPageFooter: React.FC = () => {
    return (
        <Row id={styles.reviews}>
            <Col
                xl={{ span: 4 }}
                sm={{ span: 7 }}
                xs={{ span: 24 }}
                className={styles.reviews__link_wrapper}
            >
                <Link to='#' className={styles.reviews__link}>
                    Смотреть отзывы
                </Link>
            </Col>
            <Col
                xl={{ span: 5, offset: 15 }}
                sm={{ span: 10, offset: 7 }}
                xs={{ span: 24, offset: 0 }}
            >
                <div className={styles.card}>
                    <Link className={styles.card__dounload} to='#'>
                        Скачать на телефон
                    </Link>
                    <p className={styles.card__text}>Доступно в PRO-тарифе</p>
                    <Divider className={styles.card__line} />
                    <Row>
                        <Col span={12} className={styles.card__item}>
                            <AndroidFilled size={14} />
                            <Link className={styles.card__link} to='#'>
                                Android OS
                            </Link>
                        </Col>

                        <Col span={12} className={styles.card__item}>
                            <AppleFilled size={14} />
                            <Link className={styles.card__link} to='#'>
                                Apple iOS
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};
