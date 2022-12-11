import { Routes, Route } from "react-router-dom";

import "./App.css";
import AsyncAwait from "./AsyncAwait";
import UserInfo from "./UserInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AsyncAwait />} />
        {/* Fetch data according to ID */}
        <Route path="/user/:id" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
