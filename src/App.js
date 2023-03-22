import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Page/Home";
import ListOdAccount from "./Page/ListOdAccount";
import Login from "./Page/login";
import PrivateRouteAuth from "./PrivateRoute/privateRouteAuth";
function App() {
  const routes = [
    {
      path: "/",
      element: (
        <PrivateRouteAuth>
          <Home />
        </PrivateRouteAuth>
      ),
      children: [{ path: "/", element: <ListOdAccount /> }],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
