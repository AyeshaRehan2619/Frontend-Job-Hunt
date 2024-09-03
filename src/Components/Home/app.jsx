import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <>
      <div className="navbar">
        <div className="container">
        
      
      
       <ul>
         <li><span className='red'>Job Hunt</span></li>
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
          <li>Register</li>
          <li>Account</li>
        </ul>
        </div>
        </div>
       
        <div className="container-body">
          <button>
            No. 1 Job Search Website
          </button>
          <h1>Search, Apply & Get Your <span className='red'>Dream Job</span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores tenetur saepe </p><p>sed laudantium fugiat hic a ducimus
          laudantium fugiat hic a ducimus </p>
          </h1>
        </div>
        <div className="container-body2">
        
        
        <button>
         Find Your Dream Job   <span className='purple'  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></span> 
          
     </button>
        </div>
   
      <div className="container-jobs">
        <h1><span className='red'>Latest and Top </span> Job Openings</h1>
        <div className="box">
          <h3>Google</h3>
          <h3><span className='grey'>India</span></h3> 
          <h2>Full Stack Developer</h2>
          <p>I need senior full stack developer, who can able to write the efficient code , and deal with frontend and backend</p>
          <button>2 Positions</button>
          <button><span className='blue'>Full Time</span></button>
          <button>45 LPA</button>
        </div>
        <div className="box">
        <h3>Microsoft India</h3>
        <h3><span className='grey'>India</span></h3> 
        <h2>Full Stack Developer</h2>
          <p>I need senior full stack developer, who can able to write the efficient code , and deal with frontend and backend</p>
          <button>4 Positions</button>
          <button><span className='blue'>Full Time</span></button>
          <button>23 LPA</button>
        </div>
        <div className="box">
        <h3>Accenture India</h3>
        <h3><span className='grey'>India</span></h3> 
        <h2>Software Engineer</h2>
          <p>I need senior Software Engineer, who can able to write the efficient code , and deal with  software applications</p>
          <button>2 Positions</button>
          <button><span className='blue'>Full Time</span></button>
          <button>20 LPA</button>
        </div>
        <div className="box">
        <h3>Infosys India</h3>
        <h3><span className='grey'>India</span></h3> 
        <h2>Backend Developer</h2>
          <p>I need senior full stack developer, who can able to write the efficient code , and deal with frontend and backend</p>
          <button>5 Positions</button>
          <button><span className='blue'>Full Time</span></button>
          <button>25 LPA</button>
        </div>
        <div className="box">
        <h3>Wipro India</h3>
        <h3><span className='grey'>India</span></h3> 
        <h2>Frontend Developer</h2>
          <p>I need senior frontend developer, who can able to write the efficient code , and deal with frontend and backend</p>
          <button>4 Positions</button>
          <button><span className='blue'>Full Time</span></button>
          <button>22 LPA</button>
        </div>
      </div>
      
    
      </>
        
      
      
    
  )
}

export default App