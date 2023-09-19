import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons CSS

import {
  Button,
} from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div
      style={{
        width: 256,
        position: 'fixed',

      }}
    >
      <div className="sidebar" style={{ backgroundColor: '#16283c', color: 'white' }}>
        <div className="list-group-item-action" style={{ padding: '30px', display: 'flex', alignItems: 'center' }}>
        <a href="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
        </a>

          <i className="bi bi-house-door-fill" style={{ marginRight: '10px' }}></i> Dashboard

        </div>
        <div className="list-group-item-action" style={{ padding: '30px', display: 'flex', alignItems: 'center'}}>

          <i className="bi bi-chat-fill" style={{ marginRight: '10px' }}></i> Chats

        </div>
        <div className="list-group-item-action" style={{ padding: '30px', display: 'flex', alignItems: 'center' }}>
          <i className="bi bi-widgets" style={{ marginRight: '10px' }}></i> Widgets

        </div>
        <div className="list-group-item-action" style={{ padding: '30px', display: 'flex', alignItems: 'center'}}>
          <i className="bi bi-credit-card-fill" style={{ marginRight: '10px' }}></i> Payments

        </div>
        <div className="list-group-item-action" style={{ padding: '30px', display: 'flex', alignItems: 'center'}}>
          <i className="bi bi-grid" style={{ marginRight: '10px' }}></i> Elements

        </div>
        <div className="list-group-item-action" style={{ padding: '30px', display: 'flex', alignItems: 'center' }}>
          <i className="bi bi-person" style={{ marginRight: '10px' }}></i> Contacts
        </div>
        <div className="list-group-item-action" style={{ padding: '30px', display: 'flex', alignItems: 'center'}}>
          <i className="bi bi-person" style={{ marginRight: '10px' }}></i> Users
        </div>
        <div className="list-group-item-action" style={{ padding: '30px', display: 'flex', alignItems: 'center' }}>
          <i className="bi bi-box-arrow-in-down" style={{ marginRight: '10px' }}></i> Layouts
        </div>
        <div className="list-group-item-action" style={{ padding: '30px', display: 'flex', alignItems: 'center'}}>
          <i className="bi bi-question-circle-fill" style={{ marginRight: '10px' }}></i> Help
        </div>
        <div className="list-group-item-action" style={{ padding: '30px', display: 'flex', alignItems: 'center'}}>
          <i className="bi bi-gear-fill" style={{ marginRight: '10px' }}></i> Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

