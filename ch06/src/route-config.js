import React from 'react';

import HomePage from './page/HomePage';
import ArticlePage from './page/ArticlePage';
import AlbumPage from './page/AlbumPage';
import NotfoundPage from './page/NotfoundPage';

const router = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/artist/:id',
        exact: true,
        main: ({match}) => <ArticlePage match={match} />
    },
    {
        path: '/album/:id',
        exact: true,
        main : ({match}) => <AlbumPage match= {match} />
    },
    { 
        path: '',
        exact: false,
        main: () => <NotfoundPage />
    },
]

export default router;