import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import githubInfoLoader from './components/Github/githubInfo.jsx'

//in order to create route for other pages we will need router
const router=createBrowserRouter(
  createRoutesFromElements(
    // just a basic Elementform router dom
    //it takes path and what element you want to load in that path
    //this element is like sandwich we can put as many as route inside it 
    <Route path="/" element={<Layout/>}>
      {/* {now everything after this will be after / route only as it is inside it} */}
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/' element={<User/>}>
      {/* //route to dynamically show the user as per id */}
      <Route path=':userid' element={<User/>}/>
      </Route>
      <Route 
      loader={githubInfoLoader}
      path='github'
      element={<Github/>}/>
      <Route path="*" element={<div>Not found</div>}/>

    </Route>

  )
)

//now rather than direclty serving app.jsx we will provide pages via router provider takes a prop router where we specify our router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
