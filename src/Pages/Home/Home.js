import React, { useEffect, useState } from 'react';
import Dataservice from './Dataservice';
import './home.css'
const Home = () => {
  const [service, setService] = useState([])
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setService(data))


  }, [])



  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide carusel-sl" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="SportsBD (1).jpg" className="d-block w-100 slider-img" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h2 className='animate__backInDown'>I am training more then 10 years</h2>
              <p className='animate__backInDown'>Training is my passion and i am working more then 200 people for build there body.</p> </div>
          </div>
          <div className="carousel-item">
            <img src="SportsBD (2).jpg" className="d-block w-100 slider-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h2>Body is Yours but Responsibility is Mine</h2>
              <p>No worry about your body I will take care about it how i can will try best .</p></div>
          </div>
          <div className="carousel-item">

            <img src="SportsBD.jpg" className="d-block w-100 slider-img" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h2>You male or Female no matter </h2>
              <p>I have all kind of service in Gym Training no worry about.</p></div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='services'>
        <h1 className='fw-bold mt-4'>Services</h1>
        <p>We are providing all kind of services </p>

        <div className='row row-cols-1 row-cols-md-3 g-2 container mx-auto'>
          {
            service.map(servicesa => <Dataservice
              serv={servicesa}
            ></Dataservice>)
          }</div>
      </div>
    </div>
  );
};

export default Home;