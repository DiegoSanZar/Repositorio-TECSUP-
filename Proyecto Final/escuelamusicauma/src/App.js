
import {Switch, BrowserRouter as Router} from "react-router-dom"
import Routes from './Routes'
import SideBarContextProvider from "./context/sideBarContext";


function App() {
  return (
    <Router>
      <SideBarContextProvider>
      <Switch>
        <Routes/>
      </Switch>
      </SideBarContextProvider>
    </Router>
  );
}

export default App;
