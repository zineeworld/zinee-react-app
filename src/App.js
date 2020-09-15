import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
      <div>
        <h1>I love { name }</h1>
        <h4>{ rating }/5.0</h4>
        <img src={ picture } alt={ name } width="200"/>
      </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: 'apple',
    image: 'https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'banana',
    image: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'orange',
    image: 'https://lh3.googleusercontent.com/proxy/gEzm-lrp5kP561Kl0Za9adZHqbVeND0K9xIPGrIi__Fwsey4BPVdoJd0814FI7ffZfRt9R8rahtnWRd7wgWM8yy4PTPB7qyXxxe-nnsnzuuUuA99L04V',
    rating: 4
  },
  {
    id: 4,
    name: 'mango',
    image: 'https://thediplomat.com/wp-content/uploads/2016/04/sizes/td-story-s-2/thediplomat_2016-04-26_19-22-13.jpg',
    rating: 3
  }
];

function App() {
  return (
      <div>
        { foodLike.map(item => (
          <Food key={item.id} name={item.name} picture={item.image} rating={item.rating}/>
        ))}
      </div>
  );
}

Food.protoType = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
