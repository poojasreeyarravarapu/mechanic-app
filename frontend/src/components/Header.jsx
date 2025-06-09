import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 p-4 text-white text-center">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </header>
  );
};

export default Header;
