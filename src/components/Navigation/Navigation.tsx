// * Base
import { memo } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// * Components
import LIST from './Navigation.data';

const Navigation = memo(() => {
  const { pathname } = useLocation();

  return (
    <ul className='flex items-center gap-4 uppercase'>
      {LIST.map((item, index) => (
        <Item key={index} {...item} pathname={pathname} />
      ))}
    </ul>
  );
});

const Item = memo(
  ({
    to,
    title,
    pathname,
  }: {
    title: string;
    to: string;
    pathname: string;
  }) => {
    console.log('Current pathname:', pathname, 'Link to:', to);
    return (
      <li>
        <Link
          to={to}
          className={
            'text-blue-500 leading-none hover:text-red-500 transition-colors duration-300 ' +
            (pathname === to ? ' text-yellow-500' : '')
          }
        >
          {title}
        </Link>
      </li>
    );
  }
);

export default Navigation;
