import logo from './logo.svg';
import './App.css';

import Login from './login/Login';
import Main from './main/Main';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route 
          path="/" 
          render={() => {
            const token = localStorage.getItem('token');
            if (token) {
              return <Main />
            } else {
              return <Redirect to="/login" />
            }
          }} 
        />
      </Switch>
    </Router>
  );  
}
export default App;
