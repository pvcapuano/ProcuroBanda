import './App.css';
import NavBar from './Components/NavBar';
import ProcuroBanda from './Components/ProcuroBanda';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import NotFound from './Components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={ProcuroBanda} />
      <Route path="/all" exact component={AllUsers} />
      <Route path="/add" exact component={AddUser} />
      <Route component={NotFound}/>
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
