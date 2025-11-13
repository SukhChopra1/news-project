import React from 'react'

const Navbar = ({setcategory}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" ><span className="badge bg-light text-dark fs-2" >News</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setcategory("technology")}>Technology</div>  
        </li>
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setcategory("business")}>Business</div>  
        </li>
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setcategory("health")}>Health</div>  
        </li>
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setcategory("sports")}>Sports</div>  
        </li>
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setcategory("entertainment")}>Entertainment</div>  
        </li>
        
       
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
