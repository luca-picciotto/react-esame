import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path=""></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;