import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import Root from "./components/Root";

import Home from "./components/home";
import About from "./components/about";
import Faq from "./components/faq";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact";
import Spinner from "./components/public/Spinner";
import ErrorElement from "./components/public/ErrorElement";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider fallbackElement={<Spinner />} router={router} />;
}

export default App;
