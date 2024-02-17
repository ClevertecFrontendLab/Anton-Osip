import React from 'react';
import styles from './registration.module.css';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import Link from 'antd/lib/typography/Link';
import { GooglePlusOutlined } from '@ant-design/icons';
import classNames from 'classnames';

export function Registration() {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Form
                id={styles.login}
                name='login'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='on'
            >
                <Form.Item
                    className={styles.login__email}
                    label='e-mail:'
                    name='e-mail:'
                    rules={[{ required: true, message: 'ыва' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    className={styles.login__password}
                    name='password'
                    rules={[{ required: true, message: 'Password' }]}
                >
                    <Input.Password placeholder='Пароль' />
                </Form.Item>

                <Form.Item
                    className={classNames(
                        `${styles.login__password}`,
                        `${styles.login__repeatPassword}`,
                    )}
                    name='repitPassword'
                    rules={[{ required: true, message: 'Password' }]}
                >
                    <Input.Password placeholder='Повторите пароль' />
                </Form.Item>

                <Space
                    style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 24,
                    }}
                >
                    <Form.Item
                        className={styles.check}
                        name='remember'
                        valuePropName='checked'
                        wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Checkbox style={{ width: 146 }}>Запомнить меня</Checkbox>
                    </Form.Item>
                    <Link className={styles.link}>Забыли пароль?</Link>
                </Space>

                <Form.Item className={styles.submit__btn}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Button className={styles.google__btn} type='link' icon={<GooglePlusOutlined />}>
                Войти через Google
            </Button>
        </>
    );
}
