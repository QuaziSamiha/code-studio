import Home from "./components/Home/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from "./components/Details/Details";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
