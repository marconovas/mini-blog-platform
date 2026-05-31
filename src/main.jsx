import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { PostsProvider } from './context/PostProvider.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';


//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PostsProvider>
        <ToastContainer />
        <App />
      </PostsProvider>
    </AuthProvider>
  </StrictMode>,
)
