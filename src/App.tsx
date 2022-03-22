import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import NewsUpdate from "./components/NewsUpdate";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogDetail from "./components/BlogDetail";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Contact />} path="/contact" />
        <Route element={<About />} path="/about" />
        <Route element={<Post />} path="/blog" />
        <Route element={<Post />} path="/" />
        <Route element={<BlogDetail />} path="/blog-detail" />
      </Routes>
      <NewsUpdate />
      <Footer />
    </BrowserRouter>
  );
};
export default App;
