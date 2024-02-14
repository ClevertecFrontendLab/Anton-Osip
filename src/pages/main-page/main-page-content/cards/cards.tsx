import React from 'react';
import styles from './cards.module.css';
import { Divider, Row, Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';
import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import Card from 'antd/lib/card/Card';
import classNames from 'classnames';

interface IContentCard {
    id: string;
    title: string;
    icon: JSX.Element;
    text: string;
}

const contentCards: IContentCard[] = [
    {
        id: 'contentCard1',
        title: 'Расписать тренировки',
        icon: <HeartFilled size={11} className={styles.contentCardAction__icon} />,
        text: ' Тренировки',
    },
    {
        id: 'contentCard2',
        title: 'Назначить календарь',
        icon: (
            <CalendarTwoTone
                size={11}
                className={classNames(
                    `${styles.contentCardAction__icon}`,
                    `${styles.contentCardAction__icon_calendar}`,
                )}
            />
        ),
        text: ' Календарь',
    },
    {
        id: 'contentCard3',
        title: 'Заполнить профиль',
        icon: (
            <IdcardOutlined
                size={11}
                className={classNames(
                    `${styles.contentCardAction__icon}`,
                    `${styles.contentCardAction__icon_Idcard}`,
                )}
            />
        ),

        text: '  Профиль',
    },
];

export const Cards: React.FC = () => {
    return (
        <div id={styles.cards}>
            <Card className={styles.contentCard}>
                <Title level={2} className={styles.contentCard__title}>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </Title>
            </Card>
            <Row className={styles.contentCards__wrapper}>
                <Space style={{ justifyContent: 'space-between', width: '100%' }}>
                    {contentCards.map((card: IContentCard) => (
                        <Card className={styles.card}>
                            <Title level={4} className={styles.contentCardAction__title}>
                                {card.title}
                            </Title>
                            <Divider className={styles.contentCardAction__line} />
                            <Link to='#' className={styles.contentCardAction__link}>
                                {card.icon}
                                {card.text}
                            </Link>
                        </Card>
                    ))}
                </Space>
            </Row>
        </div>
    );
};
