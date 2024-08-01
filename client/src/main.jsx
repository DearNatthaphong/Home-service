import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/authentication.jsx';
import { BrowserRouter } from 'react-router-dom';
import adminJwtInterceptor from './utils/admin-jwt-interceptor.js';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PaymentProvider } from './context/payment-context.jsx';

adminJwtInterceptor();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <PaymentProvider>
        <App />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </PaymentProvider>
    </AuthProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
