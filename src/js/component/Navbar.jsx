import React from "react";
import Card from "./Card";
//import { ProgressPlugin } from "webpack";




const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div class="container-fluid">
    <a class="navbar-brand ms-4" href="#"><strong>Developers</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class=" d-flex justify-content-end collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
          <a class="nav-link active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#car1">Programación</a></li>
            <li><a class="dropdown-item" href="#car2">Paradigmas</a></li>
            <li><a class="dropdown-item" href="#car3">Lenguajes</a></li>
            <li><a class="dropdown-item" href="#car4">Actividad</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Services</a>
        </li>
        <li class="nav-item dropdown me-5">
          <a class="nav-link active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="https://www.linkedin.com/in/alba-rodr%C3%ADguez-594910198/">LinkedIn</a></li>
                <li><a class="dropdown-item" href="https://github.com/AllbaLu">GitHub</a></li>
                <li><a class="dropdown-item" href="https://4geeks.com/">Academy</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};




      export default Navbar;