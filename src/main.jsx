import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import myCreateRouter from './routes/Routes';
import AuthContext from './authContextAPI/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={myCreateRouter}/>
    </AuthContext>
  </React.StrictMode>,
)
