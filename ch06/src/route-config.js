import React from 'react';

import HomePage from './page/HomePage';
import ArticlePage from './page/ArticlePage';
import AlbumPage from './page/AlbumPage';
import NotfoundPage from './page/NotfoundPage';

const router = [
    {
        patch: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        patch: '/article/:id',
        exact: true,
        main: ({match}) => <ArticlePage match={match} />
    },
    {
        patch: '/album/:id',
        exact: true,
        main : ({match}) => <AlbumPage match= {match} />
    },
    { 
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    },
]

export default router;