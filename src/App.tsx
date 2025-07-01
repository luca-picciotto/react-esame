import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import ListItem from "./components/ListItem";
import { Item } from "./components/Item";
import Access from "./pages/Access";
import { Send } from "./components/Send";


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/list" element={<ListItem/>}></Route>
        <Route path="/item" element={<Item/>}></Route>
        <Route path="/access" element={<Access/>}></Route>
        <Route path="/send" element={<Send/>}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;