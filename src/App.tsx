import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import ListItem from "./components/ListItem";
import { Item } from "./components/Item";
import { Register } from "./components/Register";


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/list" element={<ListItem/>}></Route>
        <Route path="/item/:id" element={<Item/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;