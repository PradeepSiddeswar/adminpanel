import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';


const Card = () => {
 
  return (
   
    <div>


      <div class="container mt-3 ">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" style={{ backgroundColor: 'lightgray' }}>
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}> Total Number of Customer Registration</p>
                <Link to="/customerLogin">
                  <button className="btn btn" style={{direction:'none'}}>
                    <i className="fas fa-user" style={{ color: 'orange', fontSize: '30px' }}></i>
                  </button>
                </Link>
                <h5 class="card-title">5000</h5>

                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
         
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" style={{ backgroundColor: 'lightgray' }}>
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}>Total number of shopkeeper Registration</p>
                <Link to="/Totalnumbe ofshopkeeperRegistration">
                <button type="button" class="btn btn">
                  <FontAwesomeIcon icon={faPeopleRoof} style={{ color: 'red', fontSize: '25px' }} />
                </button>
                </Link>
                <h5 class="card-title">3000</h5>

              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" style={{ backgroundColor: 'lightgray' }}>
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}> Total Number of Pending Review</p>
                <Link to="/Number of pending review">
                  <button className="btn btn">
                    <i className="fas fa-user" style={{ color: 'orange', fontSize: '30px', marginTop:'18px' }}></i>
                  </button>
                </Link>
                <h5 class="card-title">5000</h5>

                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" style={{ backgroundColor: 'lightgray' }}>
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}> Number of Active Users</p>
                <Link to="/Number of Active Users">
                  <button className="btn btn">
                  <FontAwesomeIcon icon={faUsers} style={{color:'orange', fontSize:'30px', marginTop:'12px'}}/>
                  </button>
                </Link>
                <h5 class="card-title">500</h5>

                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

