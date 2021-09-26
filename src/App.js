 
import './App.css';
import Menubar from './components/Menubar';
import Main from './components/Main';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Menubar/>
        <Main/>
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    
    </>
  );
}

export default App;
