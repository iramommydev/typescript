// * Base
import { Outlet } from 'react-router-dom';
import React from 'react';

// * Components
// import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Banner /> */}
    </>
  );
}

export default App;
