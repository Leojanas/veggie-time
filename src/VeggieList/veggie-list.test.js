import React from 'react';
import ReactDOM from 'react-dom';
import VeggieList from './veggie-list';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><VeggieList veggies={[]}/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});