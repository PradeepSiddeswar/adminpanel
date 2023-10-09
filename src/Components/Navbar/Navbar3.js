import React from 'react';


const Navbar2 = () => {
    return(
        <>
       <nav class="navbar navbar-expand-lg bg-light"> 
  <div class="container-fluid " style={{color:'green', fontWeight:'bold', fontSize:'25px'}}>  Total Payments Received Today
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#" style={{fontWeight:'bold'}}></a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled"></a>
        </li>
      </ul>
      <form class="d-flex p-2" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <img src="https://www.edx.org/images/logos/fast-co.png" alt="Avatar" class="avatar" style={{verticalAlign:'middle', width:'50px', height:'50px', borderRadius:'90%'}}/>

    </div>
  </div>
</nav>

        </>
    )
}
export default Navbar2