import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import AllRepositories from "./features/AllRepositories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/:username",
    element: <AllRepositories />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
