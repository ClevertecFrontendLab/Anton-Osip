import React from 'react';
import styles from './card-legecy.module.css';
import { Card } from 'antd';
import classNames from 'classnames';

interface IListItem {
    id: string;
    text: string;
}

const listItem: IListItem[] = [
    {
        id: 'listItem1',
        text: '— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
    },
    {
        id: 'listItem2',
        text: ' — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
    },
    {
        id: 'listItem3',
        text: '— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
    },
    {
        id: 'listItem4',
        text: ' — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.',
    },
];

export const CardLegesy: React.FC = () => {
    return (
        <Card id={styles.contentCard}>
            <p className={styles.contentCardAction__text}>С CleverFit ты сможешь:</p>
            <ul className={styles.contentCardAction__list}>
                {listItem.map((item: IListItem) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </Card>
    );
};
