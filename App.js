import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./Components/Layout";
import Notfound from './Components/Notfound';
import ProtectedRoute from './Components/ProtectedRoute';
import { useNavigate } from 'react-router-dom';



function App() {
  // let navigate = useNavigate()

  // function saveUserData(){
  //   navigate("/login")
  // }


  let Routes = createBrowserRouter([
    {path:"/", element:<Layout/>, children:[
      {path:"home", element: (
        <ProtectedRoute >
          <Home/>
        </ProtectedRoute>
      )},
      {path:"login", element: <Login/>},
      {path:"register", element: <Register/>},
      {path:"*", element: <Notfound/>},
    ]}
  ])

  return (
    <>
    <RouterProvider router={Routes}/>
    </>
  );
}

export default App;
