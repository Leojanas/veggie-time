import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './timeline';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Timeline events={[{date: new Date(), items: []}]}/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});