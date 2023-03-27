import React from 'react';
import {BrowserRouter , Link , Route , Routes } from 'react-router-dom';
import { logo } from "./assets";
import { Home, CreatePost, About } from "./pages";
import {Footer} from './components';
import "../src/assets/logo.png";
//import css from "./App.css";



const App = () => {
  return (
    
    <BrowserRouter>
      <header className="w-full flex justify-between 
                        items-centre bg-white sm:px px-4 py-1 border-b border-b-[#E11299]">
          
          {/*For importing the Logo of the Website.*/}
          <Link to = "/about">
              <img src={logo} alt= "Logo image" className='w-12 object-contain'/>
              <h3>ENDER</h3>
          </Link>
  
          {/*For Creating a create button of the Website.*/}
          <Link to = "/create-post" 
          className='font-inter font-medium bg-[#6469ff] text-white h-9 mt-5 px-4 py-1 rounded-md'>
              Create
          </Link>
          
      </header>
    
      <div>
      <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]"> 
          <Routes>
              <Route path="/about" element = {<About />} />
              <Route path="/" element = {<Home />} />
              <Route path="/create-post" element = {<CreatePost />} /> 
          </Routes>

          <div  className="w-auto flex items-center">
            <Footer/>
          </div>
      </main>
      </div>
      
    </BrowserRouter>
    
  )
}

export default App;
