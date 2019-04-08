import React from 'react';
import ReactDOM from 'react-dom';
import ViewContainer from './ViewContainer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
