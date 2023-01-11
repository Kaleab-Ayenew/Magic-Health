import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";


import Root from "./components/Root";

import Home from "./components/home";
function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children:[
        {
          index: true,
          element: <Home/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
