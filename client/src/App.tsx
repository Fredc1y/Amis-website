import Homescreen from './compontents/Homescreen';
import Login from './compontents/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homescreen />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);


const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
