import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from './core/components/Routes';
import GlobalContextProvider, { GlobalDispatchContext, GlobalStateContext } from './context/GlobalContext';
import Pagination from './core/components/pagination/Pagination';
import ProductsPage from './pages/products/ProductsPage';
import { useState } from 'react';


function App() {
  const [posts, setPosts] = useState([]);
  return (
    <GlobalContextProvider>
      <GlobalStateContext.Consumer>
        {(state) => (
          <GlobalDispatchContext.Consumer>
            {(dispatch) => (
              <Router>
                <Routes state={state} dispatch={dispatch}></Routes>
              </Router>
            )} 
          </GlobalDispatchContext.Consumer>
        )}
      </GlobalStateContext.Consumer>   
    </GlobalContextProvider>
    
  
  
  )}

export default App;
