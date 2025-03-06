import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/signin.jsx";
import Register from "./pages/Register/register.jsx";
import Recover from "./pages/Recover/recover.jsx";
import Home from "./pages/Home/home.jsx";
import Menu from "./pages/Menu/menu.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/menu" element={<Menu />} />

      </Routes>
    </Router>
  );
}

export default App;
