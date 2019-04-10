import React from 'react';
import ReactDOM from 'react-dom';
import MealsContainer from './MealsContainer'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow, render, mount } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MealsContainer ideas={[2]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('construction of Meals Container', ()=>{
  let props;
  beforeEach( ()=> {
    props = {
      favourites: [{id:1,title:"Food"}],
      ideas: [{id:1,title:"Food"}]
    }
  })

  test('with props renders MealsContainer Component', ()=>{
    const wrapper = shallow(<MealsContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  test('with no props renders MealsContainer Component', ()=>{
    const wrapper = shallow(<MealsContainer />);
    expect(wrapper).toMatchSnapshot();
  })

})
