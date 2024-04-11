import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Aboutpage from "./pages/aboutpage/Aboutpage";
import Skillspage from "./pages/skillspage/Skillspage";
import Educationpage from "./pages/educationpage/Educationpage";
import Projectspage from "./pages/projectspage/Projectspage";
import Contactpage from "./pages/contactpage/Contactpage";

const myrouter = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/about", element: <Aboutpage /> },
  { path: "/skills", element: <Skillspage /> },
  { path: "/education", element: <Educationpage /> },
  { path: "/projects", element: <Projectspage /> },
  { path: "/contact", element: <Contactpage /> },
]);

function App() {
  return <RouterProvider router={myrouter} />;
}

export default App;
