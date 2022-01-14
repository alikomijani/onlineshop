import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Cart, CreateProduct, UpdateProduct } from "./views";
const MainLayout = React.lazy(() => import("./Layouts/MainLayout/MainLayout"));
const ProductSingle = React.lazy(() =>
  import("./views/ProductSingle/ProductSingle")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <MainLayout />
            </React.Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route
            path="products/:productId/update"
            element={<UpdateProduct />}
          />
          <Route
            path="products/:productId"
            element={
              <React.Suspense fallback={<>...</>}>
                <ProductSingle />
              </React.Suspense>
            }
          />
          <Route path="cart" element={<Cart />} />
        </Route>
        {/* <Route path="about" element={<div>About page</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
