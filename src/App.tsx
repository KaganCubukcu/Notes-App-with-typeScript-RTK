import NotesApp from "./pages/NotesApp";
import Landing from "./pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/notes-app",
      element: <NotesApp />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
