import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './log-in';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><LogIn /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});