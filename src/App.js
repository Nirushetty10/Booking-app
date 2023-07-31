import { BrowserRouter ,Routes , Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Hotel from "./pages/Hotel/Hotel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App