import "./App.css";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/* <Route path="about" element={<div>About page</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
