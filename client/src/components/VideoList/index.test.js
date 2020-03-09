import React from 'react';
import VideoList from './index';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ApolloProvider } from '@apollo/react-hooks';

configure({ adapter: new Adapter() })
 
describe('VideoList Component', () => {
    let component, node;
     
    // Jest beforeEach()
    beforeEach((()=> component = shallow(<ApolloProvider><VideoList/></ApolloProvider>)))
    beforeEach((()=> node = component.find('.card-deck')))
     
    it('has an card-deck', () => {
        expect(node).toBeTruthy()
    });
    
})