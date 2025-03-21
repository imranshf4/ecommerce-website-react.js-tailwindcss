import React, { useState } from 'react'

const SingleProductDescription = () => {
   const productInformation = ["description", "addition information", "reviews"];
   const [selectedInfo, setSelectedInfo] = useState("description");
   
  return (
    <div>
        {/* info Tabs */}
        <div className="max-w-md mx-auto pt-6">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4 ">
            {productInformation.map((info,index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedInfo(info);
                }}
                className={`py-1.5 capitalize font-medium cursor-pointer sm:px-5 px-8  ${selectedInfo === info ? " text-black" : " text-black/50"} `}
              >
                {info}
              </button>
            ))}
          </div>
        </div>


        {/* information */}
        <div className="max-w-md mx-auto mt-12"></div>
    </div>
  )
}

export default SingleProductDescription