import { Routes, Route } from "react-router-dom";

// import AsyncAwait from "./AsyncAwait";
// import Then from "./Then";
import Axios from "./Axios";
import UserInfo from "./UserInfo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* for async await */}
        {/* <Route path="/" element={<AsyncAwait />} /> */}

        {/* for then */}
        {/* <Route path="/" element={<Then />} /> */}

        {/* for axios */}
        <Route path="/" element={<Axios />} />

        {/* Fetch data according to ID */}
        <Route path="/user/:id" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
