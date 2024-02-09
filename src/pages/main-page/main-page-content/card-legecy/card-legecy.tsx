import React from 'react';
import styles from './card-legecy.module.css';

export const CardLegesy: React.FC = () => {
    return (
        <div className={`${styles.contentCard} ${styles.contentCardAction}`}>
            <p className={styles.contentCardAction__text}>С CleverFit ты сможешь:</p>
            <ul className={styles.contentCardAction__list}>
                <li className={styles.contentCardAction__items}>
                    — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                </li>
                <li className={styles.contentCardAction__items}>
                    — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с
                    нормами и рекордами;
                </li>
                <li className={styles.contentCardAction__items}>
                    — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о
                    тренировках;
                </li>
                <li className={styles.contentCardAction__items}>
                    — выполнять расписанные тренировки для разных частей тела, следуя подробным
                    инструкциям и советам профессиональных тренеров.
                </li>
            </ul>
        </div>
    );
};
