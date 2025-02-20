import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HeroUIProvider } from "@heroui/react";
import './App.css'
import Layout from '../src/Layout/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Categories from './pages/Categories/Categories.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Brands from './pages/Brands/Brands.jsx';
import NotFond from './pages/NotFond/NotFond.jsx';
import ProtectedRoute from './Auth/ProtectedRoute.jsx';
import AuthContextProvider from './Contexts/AuthContext.jsx';
import ProtectAuthRoute from './Auth/ProtectAuthRoute.jsx';
import ProuductDetails from './pages/ProuductDetails/ProuductDetails.jsx';
import { ToastContainer } from 'react-toastify';
import Address from './pages/Address/Address.jsx';
import Order from './Components/Order/Order.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { store } from './Redux/Store.js';
import CartContextProvider from './Contexts/CartContext.jsx';
import WishList from './pages/Wishlist/WishList.jsx';
import WishListContextProvider from './Contexts/WishListContext.jsx';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.jsx';
import Profile from './pages/Profile/Profile.jsx';
import UpdatePassword from './pages/UpdatePassword/UpdatePassword.jsx';
import UserProfile from './pages/UserProfile/UserProfile.jsx';
import AddressCash from './pages/AddressCash/AddressCash.jsx';
import CategoriesContextProvider from './Contexts/CategoriesContext.jsx';
import RelatedCategory from './pages/Categories/Components/RelatedCategores.jsx';
import BrandsContextProvider from './Contexts/BrandContext.jsx';
import SubCategoriesContextProvider from './Contexts/SubCategoriesContext.jsx';







const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: '/Login', element: <ProtectAuthRoute><Login /></ProtectAuthRoute> },
      { path: '/Register', element: <ProtectAuthRoute><Register /></ProtectAuthRoute> },
      { path: '/ForgotPassword', element: <ProtectAuthRoute><ForgotPassword /></ProtectAuthRoute> },
      { path: '/Categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: '/Cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: '/WishList', element: <ProtectedRoute><WishList /></ProtectedRoute> },
      { path: '/Profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
      { path: '/UserProfile', element: <ProtectedRoute><UserProfile /></ProtectedRoute> },
      { path: '/UpdatePassword', element: <ProtectedRoute><UpdatePassword /></ProtectedRoute> },
      { path: '/Brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: '/Address/:CartId', element: <ProtectedRoute><Address /></ProtectedRoute> },
      { path: '/AddressCash/:CartId', element: <ProtectedRoute><AddressCash /></ProtectedRoute> },
      { path: '/allorders', element: <ProtectedRoute><Order /></ProtectedRoute> },
      { path: '/ProuductDetails/:id/:categoryId', element: <ProtectedRoute><ProuductDetails /></ProtectedRoute> },
      { path: '/RelatedCategories', element: <ProtectedRoute><RelatedCategory /></ProtectedRoute> },
      { path: '/FinalProjectFreshCart/', element: <ProtectAuthRoute><Login /></ProtectAuthRoute> },
      { path: '*', element: <NotFond /> },

    ]
  }
])
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <CartContextProvider>
              <WishListContextProvider>
                <CategoriesContextProvider>
                  <SubCategoriesContextProvider>
                    <BrandsContextProvider>
                      <HeroUIProvider>
                        <RouterProvider router={router}></RouterProvider>
                        <ToastContainer />
                        <ReactQueryDevtools />
                      </HeroUIProvider>
                    </BrandsContextProvider>
                  </SubCategoriesContextProvider>
                </CategoriesContextProvider>
              </WishListContextProvider>
            </CartContextProvider>
          </AuthContextProvider>
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default App
