import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Book Reading List</h1>
      <p>Currently you have {books.length} books ti get through</p>
    </div>
  );
};

export default NavBar;
