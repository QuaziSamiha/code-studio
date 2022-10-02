import Home from "./components/Home/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from "./components/Details/Details";
import SpecificBlog from "./components/SpecificBlog/SpecificBlog";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/সর্বশেষ/2" element={<Home />} />
        {/* <Route path="/details" element={<Details />} /> */}
        <Route path='/:categoryType/:categoryId' element={<SpecificBlog />} />
        <Route path="/:blogId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
