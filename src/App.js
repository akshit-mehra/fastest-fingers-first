
import "./App.css";
import Nav from "./components/navbar/Nav";
import Home from "./components/Home/Home";
import CardState from "./context/cards/CardState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import TextBox from './components/textBox/TextBox';


function App() {
  return (
    <div className="App">
      <CardState>
        <Router>
          <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="solo" element={<TextBox/>} />
        </Routes>
        </Router>
      </CardState>

    </div>
  );
}

export default App;
