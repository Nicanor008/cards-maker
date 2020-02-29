import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import HomePage from './index';

configure({ adapter: new Adapter() });

describe('NavBar Component', () => {
it('should render page correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
})
