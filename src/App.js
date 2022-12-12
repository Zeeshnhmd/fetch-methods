import { Routes, Route } from "react-router-dom";

import "./App.css";
// import AsyncAwait from "./AsyncAwait";
import Then from "./Then";
import UserInfo from "./UserInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* for async await */}
        {/* <Route path="/" element={<AsyncAwait />} /> */}
        {/* for then */}
        <Route path="/" element={<Then />} />
        {/* Fetch data according to ID */}
        <Route path="/user/:id" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
