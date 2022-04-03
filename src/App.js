import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Review from './Review/Review';
import Dashboard from './Dashboard/Dashboard';
import Blogs from './Blogs/Blogs';
import AboutUs from './AboutUs/AboutUs';
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
      </Routes>
    </div>
  );
}

export default App;
