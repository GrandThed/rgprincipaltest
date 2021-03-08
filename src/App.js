import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Constants :
import * as ROUTES from "./routes";

// Components :
import Header from "./components/header/Header";
import ContextWrapper from "./context/ContextWrapper";

// Routes :
import Home from "./routes/home/Home";
import LogInOut from "./routes/log-in-out/LogInOut";
import SignIn from "./routes/sign-in/SignIn";

function App() {
  return (
    <ContextWrapper>
      <Router>
        <Header />
        <Switch>
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.LOG_IN} component={LogInOut} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
        </Switch>
      </Router>
    </ContextWrapper>
  );
}

export default App;
