
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/Shared/NotFound/NotFound';
import RequireAuth from './Components/Authentication/RequireAuth/RequireAuth';
import Checkout from './Components/Shared/Checkout/Checkout';
import SignOut from './Components/Authentication/SignOut/SignOut';


function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/services"
          element={
            <RequireAuth>
              <Services></Services>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path="/signout" element={<SignOut></SignOut>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
