import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav";
import ContactBook from "./components/ContactBook";
import CreateContact from "./components/CreateContact";
import UpdateContact from "./components/UpdateContact";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={ContactBook} />
        <Route exact path="/create" component={CreateContact} />
        <Route exact path="/update/:id" component={UpdateContact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
