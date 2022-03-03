import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layaout from "./Components/Layaout";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
      <Router>
        <Layaout>
          <AppRouter />
        </Layaout>
      </Router>
    </div>
  );
}

export default App;
