import { Routes as GeneralRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Cart from "../pages/Cart/Cart";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import ProductDetail from "../components/Products/ProductDetail/ProductDetail";

const Routes = () => {
  return (
    <GeneralRoutes>
      <Route index element={<Home />} />
      <Route path=":id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </GeneralRoutes>
  );
};

export default Routes;
