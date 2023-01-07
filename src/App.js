import logo from './logo.svg';
import './App.css';
import Nav from './Components/nav'
import {Outlet} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Outlet/>
    </div>
  );
}

export default App;
