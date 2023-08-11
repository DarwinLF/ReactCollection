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
  //   <div className="App">
  //   <div className='navbar'>
  //     <a href="./">Home</a>
  //     <div className='dropdown'>
  //       <button className='dropbtn'>Applications <FontAwesomeIcon icon={faCaretDown}/></button>
  //       <div className='dropdown-content'>
  //         <a href="#">To-Do</a>
  //       </div>
  //     </div>
  //   </div>
  //   <header className="App-header">
  //     <img src={logo} className='App-logo'></img>
  //   </header>
  // </div>
  );
}

export default App;
