import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar2 from '../Navbar/Navbar6';


const TotalOrders = () => {
    const [payments, setPayments] = useState([]);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalTodayPrice, setTotalTodayPrice] = useState(0)


    useEffect(() => {
        // Make a GET request to your backend API endpoint
        axios.get('http://backend-env.eba-mnh4itmz.ap-south-1.elasticbeanstalk.com/orders/total-orders-today')
            .then((response) => {
                // Set the payments data in your component's state
                setPayments(response.data.orders);
                // Set the total payment amount
                setTotalOrders(response.data.totalOrders);
                setTotalTodayPrice(response.data.totalTodayPrice)
            })
            .catch((error) => {
                console.error('Error fetching payments:', error);
            });
    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

    const handleDeletePayment = (paymentId) => {
        // Make a DELETE request to your backend API to delete the payment by ID
        axios.delete(`http://backend-env.eba-mnh4itmz.ap-south-1.elasticbeanstalk.com/orders/delete/${paymentId}`)
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
                <h4 style={{ color: 'green', fontWeight: 'bold' }}>Total Orders Today</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" style={{ color: 'green' }}>#</th>
                            <th scope="col" style={{ color: 'green' }}>Hotel Name</th>
                            <th scope="col" style={{ color: 'green' }}>Customer Name</th>
                            <th scope="col" style={{ color: 'green' }}>Product Name</th>
                            <th scope="col" style={{ color: 'green' }}>Quantity</th>
                            <th scope="col" style={{ color: 'green' }}>Price</th>
                            <th scope="col" style={{ color: 'green' }}>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th scope="row" style={{ color: 'green' }}>{index + 1}</th>
                                <td style={{ color: 'green' }} >{payment.HotelName}</td>
                                <td style={{ color: 'green' }} >{payment.CustomerName}</td>
                                <td style={{ color: 'green' }} >{payment.productName}</td>
                                <td style={{ color: 'green' }}>{payment.quantity}</td>
                                <td style={{ color: 'green' }}>{payment.price}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDeletePayment(payment._id)}>Delete</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p style={{ color: 'green', fontWeight: 'bold' }}>Total Orders: {totalOrders}</p>
      <p style={{ color: 'green', fontWeight: 'bold' }}>Total Price: {totalTodayPrice}</p>
    </div>
            </div>
        </div>
    );
};

export default TotalOrders;