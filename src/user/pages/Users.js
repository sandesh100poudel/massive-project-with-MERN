import React from 'react';
import UserList from '../components/UserList';

const Users = () => {

  const USERS = [
    {
      id:'u1',
      name:"bishal",
      image:"https://cdn.imagecomics.com/assets/i/releases/929824/february-2023_f69e3ce9ca.jpg",
      places:3
    },
    {id:'u1',
    name:"sandesh poudel",
    image:"https://cdn.imagecomics.com/assets/i/releases/929824/february-2023_f69e3ce9ca.jpg",
    places:390
  }
  ];

  return (<div>
    <UserList items={USERS} />

    </div>)
  

};

export default Users;
