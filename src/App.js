import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import AboutUs from './Components/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} > </Route>
        <Route path='/review' element={<Review></Review>} ></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} > </Route>
        <Route path='/blogs' element={<Blogs></Blogs> } ></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs> } ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
