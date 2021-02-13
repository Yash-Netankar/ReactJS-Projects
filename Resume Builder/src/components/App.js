import SignUp from "./Authentication/SignUp";
import Login from "./Authentication/Login";
import Forgot from "./Authentication/Forgot";
import DashBoard from "./Dashboard";
import Template1 from './All Templates/Templates/Template1';
import Template2 from './All Templates/Templates/Template2';
import Template3 from './All Templates/Templates/Template3';
import Template4 from './All Templates/Templates/Template4';
import Template5 from './All Templates/Templates/Template5';
import Template6 from './All Templates/Templates/Template6';
import Error from './Error';
import { AuthCtx } from "../contexts/AuthCtx";
import "../styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthCtx>
          <Switch>
            <Route exact path="/" component={DashBoard}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/forgot" component={Forgot}/>
            <Route exact path="/template1" component={Template1}/>
            <Route exact path="/template2" component={Template2}/>
            <Route exact path="/template3" component={Template3}/>
            <Route exact path="/template4" component={Template4}/>
            <Route exact path="/template5" component={Template5}/>
            <Route exact path="/template6" component={Template6}/>
            <Route  path="" component={Error}/>
          </Switch>
        </AuthCtx>
      </BrowserRouter>
    </div>
  );
}

export default App;
