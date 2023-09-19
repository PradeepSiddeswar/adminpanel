import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPersonWalkingArrowLoopLeft } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Cards = () => {
    return(
        <>
              <div class="container mt-3 " >
              <div class="row">
         <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card" style={{marginTop:"100px" }}>
              <div class="card-body" style={{ backgroundColor: '#16283c', borderRadius:'10px' }}>
                <p class="card-title" style={{ fontWeight: 'bold', color:'white' }}>Total Payment</p>
                <Link to="/Total Payment">
                <button type="button" class="btn btn">
                <FontAwesomeIcon icon={faMoneyCheck} style={{color:'white', fontSize:'20px'}}/>               
                 </button>
                 </Link>
                {/* <p>Comments</p> */}
              </div>
            </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card" style={{marginTop:"100px"}}>
              <div class="card-body" style={{ backgroundColor: '#16283c',borderRadius:'10px' }}>
                <p class="card-title" style={{ fontWeight: 'bold', color:'white' }}>Total Today Payment Received</p>
                <Link to="/Payment Received">
                <button type="button" class="btn btn">
                <FontAwesomeIcon icon={faCreditCard} style={{color:'white'}}/>
                </button>
                </Link>
                {/* <p>Comments</p> */}
              </div>
            </div>
            </div>
          </div>
          <div class="row">
         <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card" style={{marginTop:"10px"}}>
              <div class="card-body" style={{ backgroundColor: '#16283c', borderRadius:'10px' }}>
                <p class="card-title" style={{ fontWeight: 'bold', color:'white' }}>Number of Items Purchased</p>
                <Link to="/Items Purchased">
                <button type="button" class="btn btn">
                <FontAwesomeIcon icon={faCartShopping} style={{color:'white'}} />
                </button>
                </Link>
                {/* <p>Comments</p> */}
              </div>
            </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card" style={{marginTop:"10px"}} >
              <div class="card-body" style={{ backgroundColor: '#16283c', borderRadius:'10px' }}>
                <p class="card-title" style={{ fontWeight: 'bold', color:'white' }}>Number of Items Return</p>
               <Link to="/Items Return">
                <button type="button" class="btn btn">
                <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} style={{color:'white', fontSize:'20px'}} />
                </button>
                </Link>
                {/* <p>Comments</p> */}
              </div>
            </div>
            </div>
          </div>
          <div class="row">
         <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card" style={{marginTop:"10px"}}>
              <div class="card-body" style={{ backgroundColor: '#16283c', borderRadius:'10px'}}>
                <p class="card-title" style={{ fontWeight: 'bold' , color:'white'}}>To.No of Successful shopkeeper Reg.</p>
                <Link to="/shopkeeper Reg">
                <button type="button" class="btn btn">
                  <FontAwesomeIcon icon={faRegistered} style={{ color: 'white', fontSize: '20px' }} />

                </button>
                </Link>
                {/* <p>Comments</p> */}
              </div>
            </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card" style={{marginTop:"10px"}}>
              <div class="card-body" style={{ backgroundColor: '#16283c', borderRadius:'10px'}}>
                <p class="card-title" style={{ fontWeight: 'bold', color:'white' }}>New Users</p>
               <Link to="/New Users">
                <button type="button" class="btn btn">
                <FontAwesomeIcon icon={faUsers} style={{color:'white', fontSize:'30px', marginTop:'12px'}}/>
                </button>
                </Link>
                {/* <p>Comments</p> */}
              </div>
            </div>
            </div>
          </div>
          </div>
        </>
    )
}


export default Cards;