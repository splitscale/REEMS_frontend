function Home() {
  return  (
   
    <nav className="navbar navbar-expand-md navbar-light bg-light ">
       <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link badge bg-warning text-light"> Add Container </button>
          </li>
          <li className="nav-item">
            <button className="nav-link badge bg-warning text-light">Log out</button>
          </li>
        </ul>
      </div>
    </nav>
    
  )
}

export default Home;