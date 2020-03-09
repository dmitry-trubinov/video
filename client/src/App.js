import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Home from './pages/Home';
import Upload from './pages/Upload';
import baseUrl from './configs/baseUrl';

const client = new ApolloClient({
  uri: `${baseUrl}/graphql`,
});

export class App extends Component {
   
  render() {
    return (
      <ApolloProvider client={client}>      
        <Router>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/upload" component={Upload}/>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App;