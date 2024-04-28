// * Base
import { memo } from 'react';
// * Components
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Language from '../Language/Language';

const Header = memo(() => {
  return (
    <header className='fiwed top-0 left-0 w-full text-black bg-white'>
      <div className='px-4 py-4 max-w-[1200px] m-auto flex justify-between'>
        <Logo />
        <Navigation />
        <Button text='Sign in' className='text-blue-500 hover:text-red-500 transition-colors duration-300'/>
        <Language />
      </div>
    </header>
  );
});

export default Header;
