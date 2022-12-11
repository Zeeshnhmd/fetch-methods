import { Routes, Route } from "react-router-dom";

import "./App.css";
import AsyncAwait from "./AsyncAwait";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AsyncAwait />} />
      </Routes>
    </div>
  );
}

export default App;
