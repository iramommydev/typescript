//* Base
import { memo } from 'react';
import Icon from '../Icon/Icon';
// import { Link } from 'react-router-dom';

const Logo = memo(() => {
  return (
    <div className='w-16'>
      <Icon />
    </div>
  );
});

export default Logo;
