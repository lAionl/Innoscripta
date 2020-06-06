import React from 'react';
import { Main } from '../pages/main';
import { Pizzas } from '../pages/pizzas';

const Routes = {
  '/': () => <Main />,
  '/pizzas': () => <Pizzas />,
};
export default Routes;
