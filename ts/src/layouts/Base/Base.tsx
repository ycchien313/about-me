import { Header } from 'layouts/Header';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export default (): ReactElement => {
  return (
    <>
      <Header />
      <Outlet />

      {/* TODO: 建立 footer component */}
      {/* <Footer /> */}
    </>
  );
};