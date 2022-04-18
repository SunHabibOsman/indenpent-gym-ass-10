import React from 'react';
import { Link } from 'react-router-dom';
import './dataservice.css'

const Dataservice = ({ serv }) => {
  const { id, service_name, discription, image, review, price } = serv
  console.log(id, service_name, discription, image, review, price);

  return (

    <div className='col mx-auto serv'>
      <div class="contain-card">
        <div class="card">
          <div class="card-header">
            <img src={image} alt="rover" />
          </div>
          <div class="card-body">
            <span class="tag tag-teal">id:{id}</span>
            <h4>{service_name}
            </h4>
            <p>
              {discription}
            </p>
            <div class="user">
              <img src="me.jpg" alt="user" />
              <div class="user-info d-flex justify-content-md-between justify-content-between align-items-center">
                <h5 className='me-3'>${price}</h5>

                <button className='btn btn-primary'><Link to={'/checkout'}>Checkout Now</Link></button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dataservice;