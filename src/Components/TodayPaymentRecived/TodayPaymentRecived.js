import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar3 from '../Navbar/Navbar3';


const TodayPaymentRecived = () => {
  const [payments, setPayments] = useState([]);
  const [totalPaymentReceivedToday, setTotalPaymentReceivedToady] = useState(0);

  useEffect(() => {
    // Make a GET request to your backend API endpoint
    axios.get('http://localhost:8080/api/total-today')
      .then((response) => {
        // Set the payments data in your component's state
        setPayments(response.data.payments);
        // Set the total payment amount
        setTotalPaymentReceivedToady(response.data.totalPaymentReceivedToday);
      })
      .catch((error) => {
        console.error('Error fetching payments:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  const handleDeletePayment = (paymentId) => {
    // Make a DELETE request to your backend API to delete the payment by ID
    axios.delete(`http://localhost:8080/api/delete/${paymentId}`)
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
         <Navbar3 />
    <div class="container text-center mt-5">
      <h4 style={{color:'green', fontWeight:'bold'}}>Total Payments Received Today</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{color:'green'}}>#</th>
            <th scope="col" style={{color:'green'}}>Customer Name</th>
            <th scope="col"style={{color:'green'}}>Amount</th>
            <th scope="col"style={{color:'green'}}>Status</th>
            <th scope="col" style={{color:'green'}}>Date</th>
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
              <td style={{color:'green'}}>{payment.payment_date}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeletePayment(payment._id)}>Delete</button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
      <p style={{color:'green', fontWeight:'bold'}}>Total Payment: {totalPaymentReceivedToday}</p>
      </div>
    </div>
  );
};

export default TodayPaymentRecived;