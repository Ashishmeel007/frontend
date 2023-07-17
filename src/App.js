import './App.css';
import {Routes,Route} from "react-router-dom"
import {Login} from "./components/Login"
import { AddPost } from './components/AddPost';
import { Posts } from './components/Posts';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="App">
      <h1>Post Making Application</h1>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/addposts' element={<AddPost />}/>
        <Route path='/posts' element={<Posts />}/>
      </Routes>
    </div>
  );
}

export default App;
