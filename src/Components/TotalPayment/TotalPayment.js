import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar2 from '../Navbar/Navbar2';


const TotalPayment = () => {
  const [payments, setPayments] = useState([]);
  const [totalPaymentAmount, setTotalPaymentAmount] = useState(0);

  useEffect(() => {
    // Make a GET request to your backend API endpoint
    axios.get('https://postlogin.onrender.com/api/payments/total')
      .then((response) => {
        // Set the payments data in your component's state
        setPayments(response.data.payments);
        // Set the total payment amount
        setTotalPaymentAmount(response.data.totalPaymentAmount);
      })
      .catch((error) => {
        console.error('Error fetching payments:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  const handleDeletePayment = (paymentId) => {
    // Make a DELETE request to your backend API to delete the payment by ID
    axios.delete(`https://postlogin.onrender.com/api/delete/${paymentId}`)
      .then((response) => {
        // If the payment is successfully deleted, update the payments state
        setPayments((prevPayments) => prevPayments.filter((payment) => payment._id !== paymentId));
      })
      .catch((error) => {
        console.error('Error deleting payment:', error);
      });
  };

  return (
    <div>
         <Navbar2 />
    <div class="container text-center mt-5">
      <h1 style={{color:'green'}}>Total Payments</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{color:'green'}}>#</th>
            <th scope="col" style={{color:'green'}}>Customer Name</th>
            <th scope="col"style={{color:'green'}}>Amount</th>
            <th scope="col"style={{color:'green'}}>Status</th>
            <th scope="col" style={{color:'green'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment._id}>
              <th scope="row" style={{color:'green'}}>{index + 1}</th>
              <td style={{color:'green'}} >{payment.customer_name}</td>
              <td style={{color:'green'}}>{payment.amount}</td>
              <td style={{color:'green'}}>{payment.status}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeletePayment(payment._id)}>Delete</button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
      <p style={{color:'green', fontWeight:'bold'}}>Total Amount: {totalPaymentAmount}</p>
      </div>
    </div>
  );
};

export default TotalPayment;


