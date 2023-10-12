import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar5 from '../Navbar/Navbar5';


const ItemReturnedTotal = () => {
  const [payments, setPayments] = useState([]);
  const [totalItemsReturned, setTotalItemsReturned] = useState(0);


  useEffect(() => {
    // Make a GET request to your backend API endpoint
    axios.get('http://localhost:8080/item/item-returned')
      .then((response) => {
        // Set the payments data in your component's state
        setPayments(response.data.items);
        // Set the total payment amount
        setTotalItemsReturned(response.data.totalItemsReturned);
      })
      .catch((error) => {
        console.error('Error fetching payments:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  const handleDeletePayment = (paymentId) => {
    // Make a DELETE request to your backend API to delete the payment by ID
    axios.delete(`http://localhost:8080/item/delete/${paymentId}`)
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
         <Navbar5/>
    <div class="container text-center mt-5">
      <h4 style={{color:'green', fontWeight:'bold'}}>TotalItemsReturned</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{color:'green'}}>#</th>
            <th scope="col" style={{color:'green'}}>Product Name</th>
            <th scope="col"style={{color:'green'}}>Quantity</th>
            <th scope="col"style={{color:'green'}}>Price</th>
            <th scope="col" style={{color:'green'}}>ReturnedQuantity</th>
            <th scope="col" style={{color:'green'}}>Actions</th>

          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment._id}>
              <th scope="row" style={{color:'green'}}>{index + 1}</th>
              <td style={{color:'green'}} >{payment.itemName}</td>
              <td style={{color:'green'}}>{payment.quantity}</td>
              <td style={{color:'green'}}>{payment.price}</td>
              <td style={{color:'green'}}>{payment.returnedQuantity}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeletePayment(payment._id)}>Delete</button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
      <p style={{color:'green', fontWeight:'bold'}}>Total Items Returned: {totalItemsReturned}</p>
      </div>
    </div>
  );
};

export default ItemReturnedTotal;