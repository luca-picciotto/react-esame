import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import ListItem from "./components/ListItem";
import { Item } from "./components/Item";
import Access from "./pages/Access";
import { ProtectedPage } from "./pages/ProtectedPage";

export function App() {
    function RedirectToHTML() {
        window.location.href = "/ELIMINA_QUESTA_CARTELLA/istruzioni.html";
        return null; // Non renderizzare nulla nel componente
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/list"
                    element={
                        <ProtectedPage>
                            <ListItem />
                        </ProtectedPage>
                    }
                ></Route>
                <Route
                    path="/item"
                    element={
                        <ProtectedPage>
                            <Item />
                        </ProtectedPage>
                    }
                ></Route>
                <Route path="/access" element={<Access />}></Route>

                <Route path="/istruzioni" element={<RedirectToHTML />}></Route>
                <Route path="*" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
