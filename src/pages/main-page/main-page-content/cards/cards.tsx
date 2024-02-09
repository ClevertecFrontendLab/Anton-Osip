import React from 'react';
import styles from './cards.module.css';
import { Col, Divider, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';
import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';

export const Cards: React.FC = () => {
    return (
        <div id={styles.cards}>
            <div className={styles.contentCard}>
                <Title level={2} className={styles.contentCard__title}>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </Title>
            </div>
            <Row className={styles.contentCards__wrapper}>
                <Col span={8}>
                    <div className={styles.contentCard}>
                        <Title level={4} className={styles.contentCardAction__title}>
                            Расписать тренировки
                        </Title>
                        <Divider className={styles.contentCardAction__line} />
                        <Link to='#' className={styles.contentCardAction__link}>
                            <HeartFilled size={11} className={styles.contentCardAction__icon} />
                            Тренировки
                        </Link>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={styles.contentCard}>
                        <Title level={4} className={styles.contentCardAction__title}>
                            Назначить календарь
                        </Title>
                        <Divider className={styles.contentCardAction__line} />
                        <Link to='#' className={styles.contentCardAction__link}>
                            <CalendarTwoTone
                                size={11}
                                className={`${styles.contentCardAction__icon} ${styles.contentCardAction__icon_calendar}`}
                            />
                            Календарь
                        </Link>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={styles.contentCard}>
                        <Title level={4} className={styles.contentCardAction__title}>
                            Заполнить профиль
                        </Title>
                        <Divider className={styles.contentCardAction__line} />
                        <Link to='#' className={styles.contentCardAction__link}>
                            <IdcardOutlined
                                size={11}
                                className={`${styles.contentCardAction__icon} ${styles.contentCardAction__icon_Idcard}`}
                            />
                            Профиль
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
