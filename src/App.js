import "./App.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs, productInputs } from "./services/formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "users",
    element: <List />,
  },
  {
    path: "users/new",
    element: <New inputs={userInputs} title="Add new user" />,
  },
  {
    path: "users/:userId",
    element: <Single />,
  },
  {
    path: "products",
    element: <List />,
  },
  {
    path: "products/new",
    element: <New inputs={productInputs} title="Add new product" />,
  },
  {
    path: "products/:productsId",
    element: <Single />,
  },
]);

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
