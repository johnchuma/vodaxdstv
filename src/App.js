import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import SubscribePage from "./pages/subscribePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
