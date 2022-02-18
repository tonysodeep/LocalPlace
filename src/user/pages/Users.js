import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'tony',
      image:
        'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
