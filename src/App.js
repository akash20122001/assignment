import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Accordion from "./Components/Accordian";

// import { CarouselDefault } from "./Components/CarouselDefault";
import Carousel from "./Components/CarouselDefault";

import first from "./images/1.png";
import second from "./images/2.png";
import third from "./images/3.png";
import AccordianItem from "./Components/AccordianItem";
import DropdownMenu from "./Components/DropdownMenu";
import AnnouncementBar from "./Components/AnnouncementBar";
import Drawer from "./Components/Drawer";

function App() {
  let slides = [first, second, third];

  const [open, setOpen] = useState(false);

  const toggle = (index) =>{
    if(open==index){
      return setOpen(null);
    }
    setOpen(index);
  }

  const accordianData = [{
    title: "DESCRIPTION",
    desc: "Blending a duo of light and white Caribbean rums from Martinique and Dominican Republic as the smooth base. Spices are then added and the mix is allowed to steep for 2 days to draw out all of the flavour before being filtered and masterfully blended with natural distillates to 10%ABV. The result is a buttery, caramel-forward, savoury and spicy light spirit with a big impact both on the nose and the taste buds.",
  }, 
  {
    title: "TASTE",
    desc: "Deep bonfire toffee, warming savoury spice, rounded honey sweetness, buttery caramel throughout with a hint of tropical fruit.",
  },
  {
    title: "SERVE",
    desc: "Simply serve 50ml chilled over ice with 150ml premium Ginger Ale and a lime wedge. 2.3% ABV.",
  }];


  return (
    <div className="App">

      <AnnouncementBar/>



      <header>
        
        <div className="flex justify-between w-full items-center ">
          <div className="flex text-xl font-semibold">
            <DropdownMenu/>
            <h1>STORY</h1>
          </div>

          <h1 className="text-4xl ">DECEM</h1>
          <Drawer/>
          {/* <div className="text-xl font-semibold">
            Basket <em>(0)</em>
          </div> */}
        </div>
      </header>

      <product className="flex justify-center  items-center mt-10 px-32">
        <div className="w-[50%] flex justify-center bg-white">
          <Carousel slides={slides} />
        </div>
        <div className="w-[50%] px-16 bg-white">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">LONDON DRY</h1>
            <h1>SPICED BLEND</h1>
            <h1>APERITIF</h1>
            <h1>TRIO</h1>
          </div>
          <div className="bg-black h-[0.05rem] mt-4 mb-3"></div>

          <div className="flex justify-start flex-col items-start">
            <h1 className="text-2xl font-semibold">LONDON DRY</h1>
            <h1 className="text-2xl">
              {" "}
              <em>made with</em> British Gin
            </h1>
          </div>

          <div className="flex justify-between mt-4 items-center">
            <h1>
              Distilled <em>in</em> England
            </h1>
            <h1 className="font-semibold">10%vol / 700ml</h1>
          </div>

          <button
            type="button"
            className="text-white w-full bg-[#1D1D1B] hover:bg-[#2455F6] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-[0.5rem] mt-6 mr-2 mb-2 dark:bg-[#1D1D1B] dark:hover:bg-[#2455F6] dark:focus:ring-gray-700 dark:border-gray-700"
          >
            £29.95 — Add to Bag
          </button>

          <h1 className="text-[#2455F6]">FREE UK DELIVERY</h1>

          
          <div className="mt-10">
            {accordianData.map((data,index)=>{
              return <AccordianItem key={index} open={index===open} title={data.title}
              desc={data.desc} toggle={()=>toggle(index)}/>
            })}
            <div className='h-[1px] bg-black'></div>
          </div>
        </div>
      </product>
    </div>
  );
}

export default App;
