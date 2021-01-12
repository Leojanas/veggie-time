import React from 'react';
import ReactDOM from 'react-dom';
import SetDate from './set-date';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SetDate /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});