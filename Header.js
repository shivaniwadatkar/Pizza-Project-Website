import {Link} from 'react-router-dom'

function Header(){
    return(
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">

       <div className="Header">
        <div className="HeaderLeft">
          <img className="image" src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/1088px-Pizza_Hut_logo.svg.png"height="50" width="40"/>
        </div>
      </div>
      
      <Link className="navbar-brand" to="/">Pizza Hut</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>

  <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>       
        <div className="text-end">
       
  <div className="col-12">
    <button className="btn btn-secondary" type="submit">log in </button>
  </div>
  </div>
</form>

        </nav>
        </>
    )
}
export default Header;
