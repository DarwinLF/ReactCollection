import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/layout";
import Home from "./pages/home";
import ToDo from "./pages/todo"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="todo" element={<ToDo/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
