import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import {onError} from "@apollo/client/link/error";
import { graphql } from 'graphql';
import GetPastMissions from './Components/GetPastMissions';
import DetailsMission from './Components/DetailsMission';
import { Route, Routes} from "react-router-dom";

const errorLink = onError(({graphqlErrors, networkError}) =>{
  if(graphqlErrors){
    graphqlErrors.map(({message, location, path})=>{
      alert(`Graphql error ${message}`);
    })
  }
})

const link = from([
  errorLink, new HttpLink({uri:"//api.spacex.land/graphql"}),
]);

const client = new ApolloClient({
  cache:new InMemoryCache(),
  link:link,
})

function App() {
  return (
    
    <ApolloProvider client = {client}>
          <Routes>
            <Route path = "/" element = {<GetPastMissions/>}/>
            <Route path = "/details/:missionID" element = {<DetailsMission/>}/>
            </Routes>
    </ApolloProvider>
    
  );
}

export default App;
