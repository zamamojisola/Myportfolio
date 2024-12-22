import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider as Provider } from 'react-router-dom'
import './index.css'
import Projects from './pages/projectPgae'
import Home from './pages/landindPage'
import Navbar from './pages/common/navbar';
import Contact from './pages/contactMePage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>} />
      <Route path="projects" element={<Projects/>} />
      <Route path="contact me" element={<Contact/>} />
    </Route>
  )
);

function App() {
 

  return (
    <>
     <Provider router={router}/>
    </>
  )

      
}

export default App
