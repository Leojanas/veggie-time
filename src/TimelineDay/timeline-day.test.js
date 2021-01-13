import React from 'react';
import ReactDOM from 'react-dom';
import TimelineDay from './timeline-day';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><TimelineDay /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});