import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons CSS
import { Button } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 70,
        bottom: 0, // Set a fixed position to occupy the entire height of the screen
        width: '256px',
        backgroundColor: '#16283c',
        color: 'white',
      }}
    >
      <div className="list-group"  >
        <div className="list-group-item list-group-item-action" style={{ padding: '30px', backgroundColor:'#16283c', color: "white"}}>
          <i className="bi bi-house-door-fill" style={{ marginRight: '10px' }}></i> Dashboard
        </div>
        <div className="list-group-item list-group-item-action" style={{ padding: '30px', backgroundColor:'#16283c', color: "white",}}>
          <i className="bi bi-chat-fill" style={{ marginRight: '10px' }}></i> Chats
        </div>
        <div className="list-group-item list-group-item-action" style={{ padding: '30px',  backgroundColor:'#16283c', color: "white",}}>
          <i className="bi bi-widgets" style={{ marginRight: '10px' }}></i> Widgets
        </div>
        <div className="list-group-item list-group-item-action" style={{ padding: '30px' , backgroundColor:'#16283c', color: "white",}}>
          <i className="bi bi-credit-card-fill" style={{ marginRight: '10px' }}></i> Payments
        </div>
        <div className="list-group-item list-group-item-action" style={{ padding: '30px', backgroundColor:'#16283c', color: "white", }}>
          <i className="bi bi-grid" style={{ marginRight: '10px' }}></i> Elements
        </div>
        <div className="list-group-item list-group-item-action" style={{ padding: '30px', backgroundColor:'#16283c', color: "white", }}>
          <i className="bi bi-person" style={{ marginRight: '10px' }}></i> Contacts
        </div>
        <div className="list-group-item list-group-item-action" style={{ padding: '30px', backgroundColor:'#16283c', color: "white", }}>
          <i className="bi bi-person" style={{ marginRight: '10px' }}></i> Users
        </div>
        <div className="list-group-item list-group-item-action" style={{ padding: '30px', backgroundColor:'#16283c', color: "white", }}>
          <i className="bi bi-box-arrow-in-down" style={{ marginRight: '10px' }}></i> Layouts
        </div>
        <div className="list-group-item list-group-item-action" style={{ padding: '30px', backgroundColor:'#16283c', color: "white", }}>
          <i className="bi bi-question-circle-fill" style={{ marginRight: '10px' }}></i> Help
        </div>
        <div className="list-group-item list-group-item-action" style={{ padding: '30px' , backgroundColor:'#16283c', color: "white",}}>
          <i className="bi bi-gear-fill" style={{ marginRight: '10px' }}></i> Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


