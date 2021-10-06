import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from './core/components/Routes';


function App() {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
}

export default App;
