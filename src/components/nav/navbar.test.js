import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import NavBar from './index';

configure({ adapter: new Adapter() });

describe('NavBar Component', () => {
it('should render page correctly', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').exists).toBeTruthy();
    expect(wrapper.find('.navbar-item').last().text()).toBe('Login');
  });
})
