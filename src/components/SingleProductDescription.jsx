import React, { useState } from 'react'

const SingleProductDescription = ({product}) => {
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
        <div className="max-w-screen-2xl container mx-auto py-4 mb-4 px-8 md:px-15">
          {/* // add more info tabs */}
          {selectedInfo === "description" && <p>{product.long_description}</p>}
          {selectedInfo === "addition information" && <p>{product.additionalInfo}</p>}
          {selectedInfo === "reviews" && <p>Reviews go here</p>}

                {/* // add more info */}
        </div>
    </div>
  )
}

export default SingleProductDescription