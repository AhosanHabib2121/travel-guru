import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/home/Home";
import Destination from "../pages/destination/Destination";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
        {
            path: '/',
            element: <Home />
      },
      {
        path: '/destination',
        element: <Destination/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  },
]);

export default myCreateRouter;