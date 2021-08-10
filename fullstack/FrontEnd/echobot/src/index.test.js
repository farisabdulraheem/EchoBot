import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './HomeComponent/Home';
Enzyme.configure({ adapter: new Adapter() });
describe('Home Component Test', () => {
    it('should show the header text', () => {
        const homeInstance = shallow(<Home />);
        const element = homeInstance.find('div div div header h1');
        expect(element.text()).toBe('Echo Chat Bot');
    });
});