
import {Switch, BrowserRouter as Router} from "react-router-dom"
import Routes from './Routes'
import SideBarContextProvider from "./context/sideBarContext";
import SideBarAdminContextProvider from "./context/sideBarAdminContext";


function App() {
  return (
    <Router>
      <SideBarAdminContextProvider>
      <SideBarContextProvider>
      <Switch>
        <Routes/>
      </Switch>
      </SideBarContextProvider>
      </SideBarAdminContextProvider>
    </Router>
  );
}

export default App;
