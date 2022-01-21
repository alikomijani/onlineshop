import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, Cart, CreateProduct, UpdateProduct } from "./views";
import Auth from "./api/localStorage";
const MainLayout = React.lazy(() => import("./Layouts/MainLayout/MainLayout"));
const Login = React.lazy(() => import("./views/Login/Login"));
const Profile = React.lazy(() => import("./views/Profile/Profile"));
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
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const PrivateRoute = ({ children }) => {
  if (Auth.checkLogin()) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"} replace={true} />;
  }
};
