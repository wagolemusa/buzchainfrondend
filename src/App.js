import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login, SignupPage } from './routes/Routes'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
