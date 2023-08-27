import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout";
import Home from "./components/home";
import Counter from './components/counter';
import ToDo from './components/todo';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index path='/' element={<Home/>}/>
            <Route path="counter" element={<Counter/>}/>
            <Route path="todo" element={<ToDo/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
