import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "stories",
      element: <Stories />,
    },
    {
      path: "create",
      element: <Create />,
    },
  ]);

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
