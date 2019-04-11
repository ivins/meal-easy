import React from 'react';
import ReactDOM from 'react-dom';
import ViewContainer from './ViewContainer'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow, render, mount } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('construction of View Container', ()=>{
  let props;
  beforeEach( ()=> {
    props = {
      favourites: [{id:1,title:"Food"}],
      id: 5,
      title: "Food",
      image: "http...",
      servings: 4,
      cookingMinutes: 5,
      extendedIngredients: [{id:1,image:"gg"}],
      instructions: "food"
    }
  })

  test('with recipe props renders ViewContainer Component', ()=>{
    const wrapper = shallow(<ViewContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  test('with no props renders ViewContainer Component', ()=>{
    const wrapper = shallow(<ViewContainer />);
    expect(wrapper).toMatchSnapshot();
  })

  test('with vegetarian props renders Dietary Component', ()=>{
    props.vegetarian = true;
    const component = render(<ViewContainer {...props} />);
    const wrapper = component.find('[data-test="dietary"]')
    expect(wrapper.length).toBe(1);
  })

})
