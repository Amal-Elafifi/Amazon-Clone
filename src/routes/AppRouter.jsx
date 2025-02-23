import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Location from "../pages/location";
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const Categories = lazy(() => import("../pages/Categories"));
const Login = lazy(() => import("../authPages/Login"));
const Products = lazy(() => import("../pages/Products"));
const SignUp = lazy(() => import("../authPages/SignUp"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const Product = lazy(() => import("../components/ecommerce/product/Product"));
const Category = lazy(() =>import("../components/ecommerce/category/Category"));
const Checkout = lazy(()=> import("../pages/Checkout"))
const Orders = lazy(()=> import("../pages/Orders"))
const LayoutUser = lazy(()=> import("../layouts/LayoutUser"))
const ProtectedRoute = lazy(()=> import("../protectedRoute/ProtectedRoute"))
const Loading = lazy(()=> import("../components/feedback/Loading"))
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Toaster } from "react-hot-toast";
import ResetPassword from "../authPages/ResetPassword";
const AppRouter = () => {
  return (
    <Provider store={store}>
      <Toaster />
      <BrowserRouter>
      {/* Comment it after finishing your work */}
      {/* <Header/>              */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<ProtectedRoute><LayoutUser/></ProtectedRoute>} >
            <Route index element={<Home />}  />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/allorders" element={<Orders />} />
            <Route path="/location" element={<Location />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
          </Routes>
        </Suspense>
        {/* <Footer/> */}
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

