import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ActivationPage from './pages/ActivationPage';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login, SignupPage } from './routes/Routes'
import { useEffect } from 'react';
import axios from 'axios';
import { server } from './server';
import Store from './redux/store';
import { loadUser } from './redux/actions/user';


function App() {

  useEffect(() => {
    Store.dispatch(loadUser())
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
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

    
  );
}

export default App;
