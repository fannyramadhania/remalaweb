import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About'
import HubunganInvestor from './components/hubungan investor/HubunganInvestor';
import {
  Outlet,
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link,
  redirect,
  useNavigate
} from "react-router-dom";
function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route Component={Home} path='/' />
          <Route Component={About} path='/tentang'/>
          <Route Component={HubunganInvestor} path='/hubunganinvestor'/>
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
