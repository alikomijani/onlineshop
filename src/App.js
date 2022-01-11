import "./App.css";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import ProductSingle from "./views/ProductSingle/ProductSingle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home , Cart, CreateProduct ,UpdateProduct} from "./views";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="products/:productId/update" element={<UpdateProduct />} />
          <Route path="products/:productId" element={<ProductSingle />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        {/* <Route path="about" element={<div>About page</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
