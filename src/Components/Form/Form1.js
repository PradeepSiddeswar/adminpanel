import React from "react";
import Navbar from "../Navbar/Navabar";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
import Card from "../Card/Card";
import CustomerLogin from "../CustomerLogin/CustomerLogin";
import Chats from "../Chats/Chats";
import Cards from "../Cards/Cards";


const Form1 = () => {
    return(
        <>
       
    <Navbar />
   <Sidebar/>
   <Card />
   <Cards />
   {/* <Form /> */}
{/* <CustomerLogin /> */}
<Chats />
        </>
    )
}

export default Form1;