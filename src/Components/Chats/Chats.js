import React from "react";
// import { BarChart } from '@mui/x-charts/BarChart';
import {
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Bar,
  } from 'recharts';
const Chats = () => {

    const data = [
        { name: 'group A', 'Total Payment': 100, 'Number of Items': 50, 'Total Number of Pending Review': 25 },
        { name: 'group B', 'Total number of customer registration': 150, 'total number of shopkeeper Registration': 75, 'Total Today Payment Received': 30 },
        { name: 'group C', 'Total Today Payment Receive': 200, 'Number of Items Return': 90, 'Number of Items Purchased': 40 },
      ];

    return (
        <>
            <div class="container mt-3">
                <h4 style={{marginLeft:'700px',  marginTop:'-400px', color:'#16283c' }}>Extra Area Chats</h4>
                <div class="d-flex justify-content-end align-items-end" style={{marginLeft:'600px', marginTop:'-0px'}}>
                <BarChart
      width={550}
      height={400}
      data={data}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Total Payment" fill="#8884d8" />
      <Bar dataKey="Number of Items" fill="#82ca9d" />
      <Bar dataKey="Total Number of Pending Review" fill="#ffc658" />
      <Bar dataKey="Total number of customer registration" fill="#ff0000" /> {/* Data for "group B" */}
      <Bar dataKey="total number of shopkeeper Registration" fill="#00ff00" /> {/* Data for "group B" */}
      <Bar dataKey="Total Today Payment Received" fill="#0000ff" /> {/* Data for "group B" */}
      <Bar dataKey="Total Today Payment Receive" fill="#ff00ff" /> {/* Data for "group C" */}
      <Bar dataKey="Number of Items Return" fill="#ffff00" /> {/* Data for "group C" */}
      <Bar dataKey="Number of Items Purchased" fill="#00ffff" /> {/* Data for "group C" */}
    </BarChart>

                </div>
            </div>
        </>
    )
}

export default Chats;