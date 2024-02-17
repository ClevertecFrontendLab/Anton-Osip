import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';
import { store, history } from '@redux/configure-store';
import { MainPage } from './pages';

import 'normalize.css';
import './index.css';
import { Auth } from '@pages/auth';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

enum Path {
    MAIN_PAGE = '/main',
    AUTH = '/auth',
}

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route path={Path.MAIN_PAGE} element={<MainPage />} />
                    <Route path={Path.AUTH} element={<Auth />} />
                </Routes>
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
