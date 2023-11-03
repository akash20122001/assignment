import React from 'react';

const DropdownMenu = () => {
  return (
    <div className="relative group w-full">
      <button className="text-black bg-white px-4  ">
        SHOP
      </button>

      <div className="hidden absolute pt-2 text-left ml-0 w-[105rem] z-10  bg-white text-black  group-hover:block">
        <ul className="">
          <li>
            <div className='bg-black h-[2px] w-full'></div>
            <a href="#" className="block px-4 text-3xl py-6 hover:text-blue-600">LONDON DRY <em>made with</em> British Gin</a>
          </li>
          <li>
            <div className='bg-black h-[2px] w-full'></div>
            <a href="#" className="block px-4 text-3xl py-6 hover:text-blue-600">SPICED BLEND <em>made with</em> Caribbean Rum</a>
          </li>
          <li>
            <div className='bg-black h-[2px] w-full'></div>
            <a href="#" className="block px-4 text-3xl py-6 hover:text-blue-600">APERITIF <em>made with</em> Heritage Botanicals</a>
          </li>
          <li>
            <div className='bg-black h-[2px] w-full'></div>
            <a href="#" className="block px-4 text-3xl py-6 hover:text-blue-600">TRIO London Dry, Spiced Blend & Aperitif</a>
            <div className='bg-black h-[2px] w-full'></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
