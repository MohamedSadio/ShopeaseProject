import React from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-multi-carousel';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import Navigation from './components/Navigation/Navigation'
//import Shop from './Shop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    <Navigation />
    {/* <Shop/> */}
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
