import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import CreateContact from "./components/contact/CreateContact";
import UpdateContact from "./components/contact/UpdateContact";
import ReadEvent from "./components/evenement/ReadEvent";
import CreateEvent from "./components/evenement/CreateEvent";
import ReadContact from "./components/contact/ReadContact";
import UpdateEvent from "./components/evenement/UpdateEvent";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>
            {/*<Dashboard/>*/}
            <Switch>
                <Route exact path='/add_contact' component={CreateContact}/>
                <Route exact path='/update_contact' component={UpdateContact}/>
                <Route exact path='/read_event' component={ReadEvent}/>
                <Route exact path='/' component={ReadContact}/>
                <Route exact path='/add_event' component={CreateEvent}/>
                <Route exact path='/update_event' component={UpdateEvent}/>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
