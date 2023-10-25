import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar1 from '../Navbar/Navbar1';

const CustomerLogin = () => {

  const [data, setData] = useState([]);
  const [shopData, setShopData] = useState({
    shopName: '',
    ownerName: '',
    phone: '',
    email: '',
    gstRegistration: '',
    BbmpCertificateNo:'',
    image: '',
  });
  const [selectedShop, setSelectedShop] = useState(null);

  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [itemsPerPage] = useState(5);

  // Add state variables for the modal
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = () => {
    axios
      .get('http://backend-env.eba-mnh4itmz.ap-south-1.elasticbeanstalk.com/customerLogin/getAll')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const handleShopSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedShop) {
        // Update existing shop
        await axios.put(`http://backend-env.eba-mnh4itmz.ap-south-1.elasticbeanstalk.com/customerLogin/update/${selectedShop.id}`, shopData);
        setSelectedShop(null);
      } else {
        // Create new shop
        await axios.post('http://backend-env.eba-mnh4itmz.ap-south-1.elasticbeanstalk.com/customerLogin', shopData);
      }

      setShopData({
        shopName: '',
        ownerName: '',
        phone: '',
        email: '',
        gstRegistrationNo: '',
        BbmpCertificateNo:'',
        image: '',
      });
      fetchShops(); // Fetch data again to reflect changes
    } catch (error) {
      console.error('Error creating/updating shop:', error);
    }
  };

  const deleteShop = async (shopId) => {
    console.log('Deleting shop with ID:', shopId);

    const confirmed = window.confirm('Are you sure you want to delete this shop?');

    if (confirmed) {
      try {
        console.log('Sending DELETE request to:', `http://backend-env.eba-mnh4itmz.ap-south-1.elasticbeanstalk.com/customerLogin/delete/${shopId}`);
        await axios.delete(`http://backend-env.eba-mnh4itmz.ap-south-1.elasticbeanstalk.com/customerLogin/delete/${shopId}`);
        console.log('Shop deleted successfully');
        fetchShops(); // Refresh the data after deletion
      } catch (error) {
        console.error('Error deleting shop', error);
      }
    }
  };

   // Calculate the indexes for the current page's items
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

   const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // const scrollableContainerStyle = {
  //   maxHeight: '400px', // Set the maximum height as needed
  //   overflowY: 'auto',  // Enable vertical scrollbar
  // };

  // Function to open the modal
  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar1 />
    <div class="container text-center mt-5">

      <h2>Shop List</h2>
      <div>
      <table class="table table-hover" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ShopName</th>
      <th scope="col">OwnerName</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">GST No</th>
      <th scope="col">BbmpCertificateNo</th>
      <th scope="col">image</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
<tbody>
    {/* <th scope="row">1</th> */}
    
    {data.map((shop, index) => (
            <tr key={shop._id}>
              <th scope="row">{index + 1}</th>
              <td>{shop.shopName}</td>
              <td>{shop.ownerName}</td>
              <td>{shop.phone}</td>
              <td>{shop.email}</td>
              <td>{shop.gstRegistrationNo}</td>
              <td>{shop.BbmpCertificateNo}</td>
              <td>
              {shop.image && <img src={shop.image} className="card-img-top" alt="Shop Image" style={{ width: "100px", cursor:'pointer' }} onClick={() => openModal(shop.image)} />}
              </td>
              {/* <td>
              <button onClick={() => setSelectedShop(shop)}>Edit</button>

              </td> */}
              <td>
                <button className="btn btn-danger" onClick={() => deleteShop(shop._id)}> <i className="fa fa-trash"></i></button>
              </td>
            </tr>
          ))}
      </tbody>
      </table>
 {/* Modal for displaying the image */}
 {isModalOpen && (
          <div id="imageModal" className="modal"   style={{
            display: "none",
            position: "fixed",
            zIndex: "1",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalImageUrl} alt="Modal" className="modal-content" style={{
            margin: "auto",
            display: "block",
            width: "80%",
            maxWidth: "800px",
          }}/>
          </div>
        )}

  {/* Pagination */}
  {/* Pagination */}
  <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
</div>
    </div>
    </div>
    
  );
}
export default CustomerLogin;