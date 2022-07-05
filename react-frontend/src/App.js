import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"; 
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
           <HeaderComponent/>
             <div className="container">
               <Switch>
                 <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                 <Route path = "/employee" component = {ListEmployeeComponent}></Route>
                 <Route path = "/add-employee" component={CreateEmployeeComponent}></Route>
               </Switch>
             </div>
           <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
