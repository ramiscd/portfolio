import React from "react";
import curriculum from "./curriculum.pdf";

function Header (){
    return(
        <div>
  <section id="title">

    
    <div class="container-fluid">

    <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="">Web developer</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            <a class="nav-link" href="">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="">Porjects</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="">Contact</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="">Video</a>
            </li>
        </ul>
        </div>
    </nav>


    <div class="row">
        <div class="col-lg-6">
        <h1>Hello! I'm Ramis.</h1>
        <h3>Full Stack developer.</h3>
        <a>
            <button href={curriculum} download="curriculum" type="button" class="btn btn-dark btn-lg"><i class="fa-brands fa-apple icon-title"></i>Download Curriculum</button>
        </a>
        </div>

        <div class="col-lg-6">
        <img class="my-img" src="https://i.ibb.co/SrxCn57/my-img.jpg" alt="iphone-mockup" />
        </div>

    </div>
    </div>

</section>
 

        </div>
    );
}

export default Header;