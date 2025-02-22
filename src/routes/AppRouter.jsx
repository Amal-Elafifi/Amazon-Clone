import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Header from "../components/layout/header";
import Location from "../pages/location";
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const Categories = lazy(() => import("../pages/Categories"));
const Login = lazy(() => import("../authPages/Login"));
const Products = lazy(() => import("../pages/Products"));
const SignUp = lazy(() => import("../authPages/SignUp"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const Product = lazy(() => import("../components/ecommerce/product/Product"));
const Category = lazy(() =>
  import("../components/ecommerce/category/Category")
);
import Loading from "../components/feedback/Loading";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
const AppRouter = () => {
  return (
    <Provider store={store}>
      <Toaster />
      <BrowserRouter>
      {/* <Header/> */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" index element={<ProtectedRoute><Home /></ProtectedRoute>}  />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
            <Route path="/category/:id" element={<ProtectedRoute><Category /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
            <Route path="/product/:id" element={<ProtectedRoute><Product /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
            <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/allorders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path="/location" element={<ProtectedRoute><Location /></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};
export default AppRouter;

{/* <Route path="/" index element={<Home />}  />
<Route path="/signUp" element={<SignUp />} />
<Route path="/login" element={<Login />} />
<Route path="/categories" element={<Categories />} />
<Route path="/category/:id" element={<Category />} />
<Route path="/products" element={<Products />} />
<Route path="/product/:id" element={<Product />} />
<Route path="/cart" element={<Cart />} />
<Route path="/wishlist" element={<Wishlist />} /> */}

