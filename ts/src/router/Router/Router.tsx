import { ReactElement } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Routes } from '../Routes';


export default (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};