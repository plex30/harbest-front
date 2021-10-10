import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from './core/components/Routes';
import GlobalContextProvider, { GlobalDispatchContext, GlobalStateContext } from './context/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

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
