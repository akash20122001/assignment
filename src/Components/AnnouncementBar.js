import React, { useState } from 'react';

const AnnouncementBar = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const handleAnnouncementClose = () => {
    setShowAnnouncement(false);
  };

  return (
    showAnnouncement && (

      <div className="bg-[#2455F6] flex justify-between text-white p-2 text-center top-0 left-0 w-full ">
        <h1 className='text-[#2455F6]'>13121</h1>
        <p className="inline-block">
        Use code <strong> DECEM10 </strong> for <strong> £10 OFF </strong>{" "}
          your first order
          
        </p>
          <button
            onClick={handleAnnouncementClose}
            className="text-white font-bold mr-0"
          >
            X
          </button>
      </div>
    )
  );
};

export default AnnouncementBar;
