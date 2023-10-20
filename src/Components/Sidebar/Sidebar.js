import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons CSS
import { Button } from 'react-bootstrap';

const Sidebar = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  console.log('isSidebarOpen:', isSidebarOpen);
  return (
    <div
    style={{
      position: 'absolute',
      top: 70,
      bottom: 0,
      width: isSidebarOpen ? '256px' : '0',
      backgroundColor: '#16283c',
      color: 'white',
      transition: 'width 0.3s ease-in-out',
    }}
  >

         {/* Toggle button */}
         <Button
        onClick={toggleSidebar}
        variant="light"
        className="m-2"
        style={{ position: 'absolute', right: '10px', zIndex: 1 }}
      >
        {isSidebarOpen ? (
          <i className="bi bi-caret-left-fill" />
        ) : (
          <i className="bi bi-caret-right-fill" />
        )}
      </Button>
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


