import React from 'react';
import Upload from './index';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })
 
describe('VideoItem Component', () => {
    let component, node1, node2, node3;
     
    // Jest beforeEach()
    beforeEach((()=> component = shallow(<Upload/>)))
    beforeEach((()=> node1 = component.find('input1')))
    //beforeEach((()=> node2 = component.find('.card-body')))
    //beforeEach((()=> node3 = component.find('.card-footer')))    
 
    it('has a card-class', () => {      
      expect(node1).toBeTruthy()
    })

    //it('has a card-body', () => {      
    //  expect(node2).toBeTruthy()
    //})

    //it('has a card-footer', () => {      
    //  expect(node3).toBeTruthy()
    //})
})