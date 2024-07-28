import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import './App.css';
import './assets/plugins/bootstrap/bootstrap.min.css'
import './assets/plugins/venobox/venobox.css'
import './assets/css/style.css'
import 'react-toastify/dist/ReactToastify.css';
// import './assets/plugins/aos/aos.css'
import Home from "./components/Home";
import { Frame } from "./components/Frame";
import About from "./components/About/About";
import Teams from "./components/Team/Teams";
import Career from "./components/Career/Career";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Login from "./components/Admin/Login/Login";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Blog from "./components/Admin/Blog/Blog";
import Category from "./components/Admin/Category/Category";
import BlogDetail from "./components/Blogs/BlogDetail";
import Service from "./components/Services/Service";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Frame />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<Contact />} />
        <Route path="/services" element={<Service />} />
          <Route path="/admin-login" element={<Login />} />
        <Route path="/add-blog" element={<Blog />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
