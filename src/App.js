import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Asteroids from "pages/Asteroids";

import "styles/main.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Asteroids />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
