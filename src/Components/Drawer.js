import React, { useState } from 'react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openDrawer}
        className="text-xl font-semibold pr-4">
            Basket <em>(0)</em>
      </button>

      <div
        className={`${
          isOpen ? 'right-0' : '-right-64'
        } fixed top-0 h-screen w-64 bg-white shadow-lg z-50 transition-right duration-300`}
      >
        <div className='flex justify-between'>
        <h1 className="text-xl font-semibold pr-4">
            Basket <em>(0)</em></h1>
        <button
          onClick={closeDrawer}
          className="text-gray-500 text-lg absolute top-2 right-2"
          >
          &#x2716;
        </button>
            </div>
        {/* Drawer content */}
      </div>
    </div>
  );
};

export default Drawer;
