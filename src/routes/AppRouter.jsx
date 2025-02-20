import { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const Categories = lazy(() => import("../pages/Categories"));
const Login = lazy(() => import("../pages/Login"));
const Products = lazy(() => import("../pages/Products"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const Product = lazy(() => import("../components/ecommerce/product/Product"));
const Category = lazy(() => import("../components/ecommerce/category/Category"));
import Loading from '../components/feedback/Loading';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading/>}>
                <Routes>
                <Route path="/" index element={<Home/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/categories" element={<Categories/>} />
                <Route path="/category/:id" element={<Category/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/product/:id" element={<Product/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/wishlist" element={<Wishlist/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )   
}
export default AppRouter;