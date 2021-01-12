import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './list-item';
import {BrowserRouter} from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ListItem veggie={{plantDate: null, spacing: {row: 12, plant: 3}, daysUntil: {germination: 1, harvest: 3}}} /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});