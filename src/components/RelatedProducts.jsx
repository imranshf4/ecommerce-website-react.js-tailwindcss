import React, { useState } from "react";
import HeadingSection from "./HeadingSection";
import ProductCard from "./ProductCard";
import { products } from "../utils/product";

const RelatedProducts = () => {
  const relatedProduct = ["living", "dining", "bedroom", "kitchen", "office"];

  const [visibleProducts, setVisibleProducts] = useState(4);
  
    //Load more products
    const loadMoreProducts = () => {
      setVisibleProducts(prev => prev + 4);
    };
  return (
    <>
      <div className="pt-6">
        <HeadingSection heading="Related Products" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < products.length && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="text-primary font-bold px-4 py-2 rounded-full hover:text-white  gap-1 hover:bg-primary transition-colors"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default RelatedProducts;
