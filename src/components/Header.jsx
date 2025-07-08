import React from "react";

const Header = ({ username, role }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-semibold">Welcome, {username}</h1>
      <span className="text-sm italic">Role: {role}</span>
    </div>
  );
};

export default Header;