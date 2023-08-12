import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/layout";
import Home from "./pages/home";
import Counter from './pages/counter';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index path='/' element={<Home/>}/>
            <Route path="counter" element={<Counter/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
