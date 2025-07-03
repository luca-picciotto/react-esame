import './App.css';
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import ListItem from "./components/ListItem";
import { Item } from "./components/Item";
import Access from "./pages/Access";
import { Send } from "./components/Send";
import { ProtectedPage } from './pages/ProtectedPage';


export function App() {
  function RedirectToHTML() {
  window.location.href = '/ELIMINA_QUESTA_CARTELLA/istruzioni.html';
  return null; // Non renderizzare nulla nel componente
}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/list" element={<ListItem/>}></Route>
        <Route path="/item" element={<Item/>}></Route>
        <Route path="/access" element={<Access/>}></Route>
        <Route path="/send" element={
          <ProtectedPage>
            <Send/>
          </ProtectedPage>
        }></Route>
        <Route path="/istruzioni" element={<RedirectToHTML />}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;