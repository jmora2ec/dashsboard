import './App.css';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Single from './pages/single/Single';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'users',
    element: <List />,
  },
  {
    path: 'users/:userId',
    element: <Single />,
  },
  {
    path: 'products',
    element: <List />,
  },
  {
    path: 'products/:productsId',
    element: <Single />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
