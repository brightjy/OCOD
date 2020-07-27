import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id: 1, // 유일한 key 값이 필요하다.
    name: "GodKimchi",
    image:
      "https://th3.tmon.kr/thumbs/image/db0/e31/cba/73dc2c36c_700x700_95_FIT.jpg",
    rating: 5.0 
    },
  {
    id: 2, 
    name: "Ramyun",
    image:
      "https://img.hankyung.com/photo/201902/AA.19048482.1.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "DduckboKKi",
    image:
      "https://funshop.akamaized.net/products/0000067786/vs_image800.jpg",
    rating: 4.8
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id}  
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
          />
      ))}
    </div>
  );
}

export default App;
