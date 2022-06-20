//import logo from "./logo.svg";
//import "./App.css";
//import About from "./About";
//import Home from "./Home";
//import Contacts from "./Contacts";
import Banner from "./components/banner/Banner";
import { Routes, Link, Route } from "react-router-dom";
import Background from "./components/background/Background";
import DisplayPlayers from "./components/userChoise/DisplayPlayers";

function App() {
  return (
    <div>
       
        {
            <Routes>
           
          <Route exact path="/" element={   <Background/>}></Route>
          <Route exact path="/players" element={<DisplayPlayers/>}></Route>
          {/* <Route exact path="/contact" element={<Contacts />}></Route> */}
          </Routes>
          }

        
          
            </div>
    
  );
}

export default App;
