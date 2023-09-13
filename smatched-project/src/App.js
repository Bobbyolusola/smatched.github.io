import React from "react";
import styles from './App.module.css';
import {
  createBrowserRouter, RouterProvider, Outlet
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {AppRoutes} from "./common/routes/AppRoutes";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import NewsPaper from "./pages/NewsPaper/NewsPaper";
import Monetization from "./pages/Monetization/Monetization";

function App() {

  const Layout = () => {

      return(
          <div className={styles.app}>
              < Header />
              < Outlet />
              < Footer />
          </div>
      );

  };

  const router = createBrowserRouter( [

      {
          path: AppRoutes.MAIN,
          element: <Layout />,
          errorElement: <h1>PAGE NOT FOUND</h1>,
          children: [
              {
                  path: AppRoutes.MAIN,
                  element: < Home />,
                  errorElement: <h1>HOME PAGE NOT FOUND</h1>
              },

              {
                    path: AppRoutes.GAME,
                    element: < Game />,
                    errorElement: <h1> PAGE NOT FOUND</h1>
              },
              {
                  path: AppRoutes.NEWSPAPER,
                  element: < NewsPaper />,
                  errorElement: <h1> PAGE NOT FOUND</h1>
              },
              {
                  path: AppRoutes.MONETIZATION,
                  element: < Monetization />,
                  errorElement: <h1> PAGE NOT FOUND</h1>
              },
        ]
      }
   ] );

  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  );
};

export default App;
