import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Error/>
  },
  {
    path:"/books",
    element: <Layout><div>도서 목록</div></Layout>,
  },
  {
    path:"/join",
    element: <Layout><Signup/></Layout>,
  },
  {
    path:"/reset",
    element: <Layout><ResetPassword/></Layout>,
  }

]);

function App() {

  return (
    <BookStoreThemeProvider>
      
        <RouterProvider router={router}/>
      
    </BookStoreThemeProvider>
  );
}

export default App;
