import { Routes as GeneralRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Cart from "../pages/Cart/Cart";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import EditProduct from "../components/Products/EditProduct/EditProduct";
import AddProduct from "../components/AddProduct/AddProduct";

const Routes = () => {
  return (
    <GeneralRoutes>
      <Route index element={<Login />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/add" element={<AddProduct />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </GeneralRoutes>
  );
};

export default Routes;
