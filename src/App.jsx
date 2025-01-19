import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider as Provider } from 'react-router-dom'
import './index.css'
import Projects from './pages/projectPgae'
import Home from './pages/landindPage'
import Navbar from './pages/common/navbar';
import Contact from './pages/contactMePage';
import Resume from './pages/resume';
import Errorpage from './pages/errorPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contactme" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Route>
      <Route path="*" element={<Errorpage />} />;
    </>
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
