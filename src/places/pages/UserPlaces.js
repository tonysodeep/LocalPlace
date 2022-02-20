import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Nha tho',
    description: 'the oldest church of all time',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/440px-Notre_dame_saigon.jpg',
    address: '20 nguyen hue',
    location: {
      lag: 10.7797855,
      lng: 106.6990189,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Nha tho',
    description: 'the oldest church of all time',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/440px-Notre_dame_saigon.jpg',
    address: '20 nguyen hue',
    location: {
      lag: 10.7797855,
      lng: 106.6990189,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  console.log(userId);
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
