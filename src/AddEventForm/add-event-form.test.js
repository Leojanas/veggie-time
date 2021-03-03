import React from 'react';
import ReactDOM from 'react-dom';
import AddEventForm from './add-event-form';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AddEventForm /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});