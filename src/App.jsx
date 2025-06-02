
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import './App.css'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/blog/Home'
import AddBlog from './pages/blog/AddBlog'
import Navbar from './components/navbar/Navbar'
import EditBlog from './pages/blog/EditBlog'
import SingleBlog from './pages/blog/SingleBlog'

function App() {
 

  return (
 <BrowserRouter>
<Routes>
<Route path='/register' element={<Register/>}>Register</Route>
<Route path='/login' element={<Login/>}>Login</Route>
<Route path='/' element={<Home/>}>Home</Route>
<Route path='/blog/add' element={<AddBlog/>}>AddBlog</Route>
<Route path='/navbar' element={<Navbar/>}>Navbar</Route>
<Route path='/blog/edit' element={<EditBlog/>}>Edit Blog</Route>
<Route path='/blog/id' element={<SingleBlog/>}/>
</Routes>
 </BrowserRouter>
  )
}

export default App
