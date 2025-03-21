import React from "react";

const HeadingSection = ({heading,subheading,description}) => {
  return (
    <div>
      <div className="text-center mb-12">
        
        <h2 className="text-3xl lg:text-2xl font-bold text-gray-800 mt-3 capitalize mx-auto leading-normal lg:leading-snug sm:w-3/4">
          {heading}
        </h2>
        {
            subheading && <p className="capitalize text-gray-600">
            {subheading}
        </p>
        }
        {
            description && <p className="text-gray-600 mt-4 text-base mx-auto sm:w-4/8">{description}</p>
        }
      </div>
    </div>
  );
};

export default HeadingSection;
