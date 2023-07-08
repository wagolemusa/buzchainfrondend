import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ActivationPage from './pages/ActivationPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  Login,
  SignupPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventPage,
  FaqPage,
  ProductDetailsPage
} from './routes/Routes'
import { useEffect } from 'react';
import Store from './redux/store';
import { loadUser } from './redux/actions/user';
import { useSelector } from 'react-redux';


function App() {
  const { loading } = useSelector((state) => state.user);
  useEffect(() => {
    Store.dispatch(loadUser())
  }, [])


  return (
    <>
      {
        loading ? (
          null
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignupPage />} />
              <Route path="/activation/:activation_token" element={<ActivationPage />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='product/:name' element={<ProductDetailsPage />} />
              <Route path='best-selling' element={<BestSellingPage />} />
              <Route path="events" element={<EventPage />} />
              <Route path="faq" element={<FaqPage />} />

            </Routes>

            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </BrowserRouter>
        )
      }
    </>


  );
}

export default App;
