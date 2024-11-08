import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
