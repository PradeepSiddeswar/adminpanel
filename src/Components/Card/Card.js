import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <div>
      <div class="container mt-3">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" style={{ backgroundColor: 'lightgray' }}>
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}>
                  To.No. of Customer Registration
                </p>
                <Link to="/customerLogin">
                <button className="btn d-flex align-items-center">
                  <FontAwesomeIcon icon={faUsers} style={{ color: 'orange', fontSize: '30px' }} />
                  </button>
                </Link>
                <h5 class="card-title">5000</h5>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" style={{ backgroundColor: 'lightgray' }}>
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}>
                  To.No of shopkeeper Registration
                </p>
                <Link to="/TotalNumberOfShopkeeperRegistration">
                <button className="btn d-flex align-items-center">
                    <FontAwesomeIcon icon={faPeopleRoof} style={{ color: 'red', fontSize: '30px' }} />
                  </button>
                </Link>
                <h5 class="card-title">3000</h5>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" style={{ backgroundColor: 'lightgray' }}>
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}>
                  Total Number of Pending Review
                </p>
                <Link to="/NumberOfPendingReview">
                  <button className="btn d-flex align-items-center">
                  <FontAwesomeIcon icon={faUsers} style={{ color: 'orange', fontSize: '30px' }} />
                  </button>
                </Link>
                <h5 class="card-title">2000</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body" style={{ backgroundColor: 'lightgray' }}>
                <p class="card-title" style={{ color: 'green', fontWeight: 'bold' }}>
                 Total Number of Active  NewUsers
                </p>
                <Link to="/NumberOfActiveUsers">
                  <button className="btn d-flex align-items-center">
                    <FontAwesomeIcon icon={faUsers} style={{ color: 'orange', fontSize: '30px' }} />
                  </button>
                </Link>
                <h5 class="card-title">500</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;

