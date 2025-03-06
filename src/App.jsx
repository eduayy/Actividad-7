import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/signin.jsx";
import Register from "./pages/Register/register.jsx";
import Recover from "./pages/Recover/recover.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover />} />
      </Routes>
    </Router>
  );
}

export default App;
