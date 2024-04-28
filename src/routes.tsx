/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { lazy } from 'react';
import Element from './components/Element/Element';
import React from 'react';


const Main = lazy(() => import('./pages/Main/Main'));
const About = lazy(() => import('./pages/About/About'));
const Comments = lazy(() => import('./pages/Comments/Comments'));
const Detail = lazy(() => import('./pages/Comments/Detail/Detail'));
const CommentList = lazy(() => import('./pages/Comments/List/List'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element component={<Main />} />,
      },
      {
        path: '/about',
        element: <Element component={<About />} />,
      },
      {
        path: '/Comments',
        element: <Element component={<Comments />} />,
        children: [
          {
            path: '',
            element: <Element component={<CommentList />} />,
          },
          {
            path: ':id',
            element: <Element component={<Detail />} />,
          },
        ],
      },
    ],
  },
]);

export default router;
