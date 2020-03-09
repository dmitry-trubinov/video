import React from 'react';
import VideoPlayer from './index';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })
 
describe('VideoPlayer Component', () => {
    let component, node1, node2, node3, node4;
     
    // Jest beforeEach()
    beforeEach((()=> component = shallow(<VideoPlayer/>)))
    beforeEach((()=> node1 = component.find('video')))
    beforeEach((()=> node2 = component.find('.card')))
    beforeEach((()=> node3 = component.find('.card-body')))
    beforeEach((()=> node4 = component.find('.card-footer')))
     
    it('has an VIDEO tag', () => {
        expect(node1).toBeTruthy()
    });
 
    it('has a card-class', () => {      
      expect(node2).toBeTruthy()
    })

    it('has a card-body', () => {      
      expect(node3).toBeTruthy()
    })

    it('has a card-footer', () => {      
      expect(node4).toBeTruthy()
    })
})