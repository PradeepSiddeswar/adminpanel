import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

function StarRatingApp() {
  const [ratings, setRatings] = useState([
    { id: 1, rating: 4 },
    // { id: 2, rating: 3 },
    // { id: 3, rating: 5 },
  ]);

  const handleRatingChange = (id, newRating) => {
    // Update the rating for the specified item
    const updatedRatings = ratings.map((item) => {
      if (item.id === id) {
        return { ...item, rating: newRating };
      }
      return item;
    });
    setRatings(updatedRatings);
  };

  return (
    <div>
      <div>
        {ratings.map((item) => (
          <div key={item.id}>
            <StarRatings
              rating={item.rating}
              starRatedColor="gold"
              changeRating={(newRating) => handleRatingChange(item.id, newRating)}
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarRatingApp;


























