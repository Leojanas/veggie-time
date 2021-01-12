import React from 'react';
import ReactDOM from 'react-dom';
import ZoneMap from './zone-map';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ZoneMap /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});