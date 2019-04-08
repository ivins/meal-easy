import React from 'react';
import ReactDOM from 'react-dom';
import MealsContainer from './MealsContainer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MealsContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
