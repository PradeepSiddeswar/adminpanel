import React, { useEffect, useState } from 'react';


const NewUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch("https://postlogin.onrender.com/form/get", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "hj"); // Log the API response for debugging
        setData(result);
      })
      .catch((error) => console.log('error', error));
  }, []); // Empty dependency array to ensure the effect runs only once

  // Filter the data array to get items with "fastmoving" tagline
  const filteredData = data.filter(
    (offer) => offer.offers?.[0]?.tagline === "fastmoving"
  );

  // Configure the settings for the slick carousel
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  return (
    <>
      <center className='m-3' style={{ fontWeight: 'bold', fontSize: '32px' }}>fast moving products</center>
      <div className='row'>
        <div className='col-lg-1'></div>
        <div className='col-lg-9'>
          {/* <Slider {...settings}> */}
            {filteredData.map((offer, index) => (
              <div className='col-lg-3 m-3 p-3' key={index}>
                <div style={{ color: 'black', border: '1px solid #0000002b', borderRadius: '10px' }}>
                  {/* Use the corrected image URL from the API response */}
                  <img
                    src={offer.image || ''}
                    alt={`Image for ${offer.name}`}
                    style={{ width: '100%', height: '150px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                  />
                  <div className='d-flex justify-content-between p-1'>
                    <p style={{ fontWeight: 'bold' }}> {offer.selecteCategories || "N/A"}</p>
                    <p style={{ fontWeight: 'bold' }}> {offer.offers?.[0]?.tagline || "N/A"}</p>
                  </div>
                  <div className='d-flex justify-content-between p-1'>
                    <p className='text-black'> Price: {offer.offers?.[0]?.enterPrice || "N/A"}</p>
                    <p className='text-black'> Offer: {offer.offers?.[0]?.enterOffer || "N/A"}%</p>
                    <p className='text-black'> image: </p>
                    <img src={offer.offers?.[0]?.image || ''}
                    alt={`Image for ${offer.name}`}
                    style={{width: '100px', height:'100px'}} />
            
                  </div>
                  
                </div>
              </div>
            ))}
          {/* </Slider> */}
        </div>
      </div>
    </>
  );
};

export default NewUsers;