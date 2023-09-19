import React, { Component } from 'react';

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Item 1', serialNumber: 'SN001' },
        { name: 'Item 2', serialNumber: 'SN002' },
        { name: 'Item 3', serialNumber: 'SN003' },
        // Add more items as needed
      ],
    };
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h2>Number of Items Purchased</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              Serial Number: {item.serialNumber}, Item Name: {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemsList;

