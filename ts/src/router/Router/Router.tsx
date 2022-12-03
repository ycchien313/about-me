import { ReactElement } from 'react';
import { HashRouter } from 'react-router-dom';
import { Routes } from '../Routes';


export default (): ReactElement => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};