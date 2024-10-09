import React from 'react'
import { Component } from 'react';

class Home extends Component{
  render(){
    return(
        <>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://flynn.com/wp-content/uploads/2023/10/Pizza-Hut-e1698169631994.jpg" class="d-block w-100" alt="..." height="450" width="200" />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://www.pizzahut.be/_next/image?url=https%3A%2F%2Fstatic.pizzahut.be%2Fstatic%2Fstyles%2Fhome_mobile_l%2Fpublic%2Fimages%2F2023-02%2F750-pizzahut-oostakker-delivery.jpg%3Fitok%3DtF6uLyrV&w=3840&q=75" class="d-block w-100" alt="..." height="450" width="200" />
    </div>
    <div class="carousel-item">
      <img src="https://i0.wp.com/rjheartnsoul.com/wp-content/uploads/2017/05/ae6bf61e-de75-43c2-8c74-4ed329eaf554-1.png?w=1024&ssl" class="d-block w-100" class="d-block w-100" alt="..."  height="450" width="200" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/3762075/pexels-photo-3762075.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="2000" height="600" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Pizza makes everything better</h1>
        <p class="lead">"Pizza is the real MVP of food. Each hand holds a slice of a balanced diet. When life gives you pizza, eat it all!"</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
    </div>
  </div>
        </>
    )
  }
}
export default Home;