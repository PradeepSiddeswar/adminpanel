import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar4 from '../Navbar/Navbar4';

const ItemsPurchased = () => {
  const [items, setItems] = useState([]);
  const [totalItemsPurchased, setTotalItemsPurchased] = useState(0);

  useEffect(() => {
    // Make a GET request to your backend API endpoint
    axios.get('http://localhost:8080/item/item-get')
      .then((response) => {
        // Set the payments data in your component's state
        setItems(response.data.items);
        // Set the total payment amount
        setTotalItemsPurchased(response.data.totalItemsPurchased);

    })
      .catch((error) => {
        console.error('Error fetching payments:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  const handleDeletePayment = (itemId) => {
    // Make a DELETE request to your backend API to delete the payment by ID
    axios.delete(`http://localhost:8080/item/delete/${itemId}`)
      .then((response) => {
        // If the payment is successfully deleted, update the payments state
        setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
      })
      .catch((error) => {
        console.error('Error deleting payment:', error);
      });
  };

  return (
    <div>
      <Navbar4 />
      <div class="container text-center mt-5">
        <h4 style={{ color: 'green', fontWeight: 'bold' }}>Number of Items Purchased</h4>
        {items.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ color: 'green' }}>#</th>
                <th scope="col" style={{ color: 'green' }}>ItemName</th>
                <th scope="col" style={{ color: 'green' }}>Quantity</th>
                <th scope="col" style={{ color: 'green' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id}>
                  <th scope="row" style={{ color: 'green' }}>{index + 1}</th>
                  <td style={{ color: 'green' }}>{item.itemName}</td>
                  <td style={{ color: 'green' }}>{item.quantity}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDeletePayment(item._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No items purchased yet.</p>
        )}
        <p style={{ color: 'green', fontWeight: 'bold' }}>Number of Items Purchased: {totalItemsPurchased}</p>
      </div>
    </div>
  );
};

export default ItemsPurchased;
