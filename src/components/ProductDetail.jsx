import React, { useState } from "react";
import mainImageSrc from "../assets/products/single product/Asgaard sofa 3.png";
import mainImageSrc2 from "../assets/products/single product/Outdoor sofa set 2.png";
import mainImageSrc3 from "../assets/products/single product/Outdoor sofa set_2.png";
import mainImageSrc4 from "../assets/products/single product/Stuart sofa 1.png";
import SingleProductDescription from './SingleProductDescription';
import RelatedProducts from './RelatedProducts';
import { useParams } from "react-router";
import { products } from "../utils/product";
import { productImgUrl } from "../utils/productImgUrl";

const ProductDetail = () => {
  let { id } = useParams();
  const product = products.find(pd => pd.id === parseInt(id, 10));
 
  const [mainImage, setMainImage] = useState(productImgUrl(product.imageUrl));
  const [selectedColor, setSelectedColor] = useState("#FF0000");
  const [selectedSize, setSelectedSize] = useState("Small");

    // Counter for quantity
    const [quantity, setQuantity] = useState(1);
    // const handleChange = (e) => {
    //   const newValue = Math.max(1, Number(e.target.value));
    //   setValue(newValue);
    // };

  const images = [
    { src: mainImageSrc, alt: "Asgaard Sofa", color: "#FF0000" },
    { src: productImgUrl(product.imageUrl), alt: "Outdoor Sofa Set", color: "#0000FF" },
    { src: mainImageSrc3, alt: "Outdoor Sofa Set 2", color: "#00FF00" },
    { src: mainImageSrc4, alt: "Stuart Sofa" },
  ];

  const handleImageClick = (src) => {
    setMainImage(src);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    const selectImage = images.filter((image) => image.color === color);
    if (selectImage) {
      setMainImage(selectImage[0].src);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

 
  return (
    <>
    <div className="section-container">
      <div className=" flex flex-col md:flex-row gap-8">
        {/* 4 th image */}
      <div className="w-full md:w-1/2 flex flex-row">
        <div className="w-2/8 flex flex-col space-y-2 p-4">
          {images.map((image) => (
            <img
              key={image.alt}
              src={image.src}
              alt={image.alt}
              className="object-cover cursor-pointer bg-singleP rounded-md"
              onClick={() => handleImageClick(image.src)}
            />
          ))}
        </div>

        {/* main section */}
        <div className="w-6/8 p-4">
          <img
            src={mainImage}
            alt="Main Product"
            className="object-cover w-full rounded-md bg-singleP"
          />
        </div>
      </div>

      {/* w-5/8 section */}
      <div className="w-full md:w-1/2 flex flex-col space-y-2">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-lg">Rs. {product.price}</p>
        <div className="flex items-center">
          <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
          <span className="ml-2 text-gray-500">({product.review} reviews)</span>
        </div>
        <p className="text-gray-700">
          {product.description}
        </p>

        {/* Size Selection */}
        <div className="flex flex-col gap-4">
          <h3>Size:</h3>
          <div className="flex gap-4">
          {["Small", "Medium", "Large"].map((size) => (
            <p
              key={size}
              className={`cursor-pointer border-none rounded p-2 ${
                selectedSize === size ? "bg-primary text-white" : "bg-secondary"
              }`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </p>
          ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="flex flex-col gap-4">
          <h3>Color: </h3>
          <div className="flex gap-4">
          {images.map((item, index) => (
            <p
              key={index}
              style={{ backgroundColor: item.color }}
              className={`cursor-pointer border-none w-7 h-7 rounded-full p-2 ${
                selectedColor === item.color ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => handleColorChange(item.color)}
            ></p>
          ))}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-3">
          <div className="flex items-center border-1 rounded-md px-6 py-2 gap-4 ">
            <button className="border-none text-xl cursor-pointer" onClick={() => setQuantity(quantity > 1? quantity - 1 : 1)}>-</button>
           <span>{quantity}</span>
            <button className="border-none text-xl cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="border rounded-md px-4 py-2 cursor-pointer">
            Add to Cart
          </button>
          <button className="border rounded-md px-4 py-2 cursor-pointer">Compare</button>
        </div>


        <hr className="my-8"/>

        {/* Product sku,tag,category,share */}
        <div className="flex flex-col gap-3">
          <div className="gap-2 flex">
            <span className="text-gray-500 w-16">SKU</span>:
            <span className="text-gray-500">ABC123</span>
          </div>
          <div className="gap-2 flex">
            <span className="text-gray-500 w-16">Tag</span>:
            <span className="text-gray-500">Outdoor, Living Room</span>
          </div>
          <div className="gap-2 flex">
            <span className="text-gray-500 w-16">Category</span>:
            <span className="text-gray-500">Furniture</span>
          </div>
          <div>
          <div className="gap-2 flex items-center">
            <span className="text-gray-500 w-16">Share</span>:
            <div className="flex flex-row gap-2 w-4 h-4 items-center text-gray-500">
              <img
                src="https://img.icons8.com/metro/24/000000/facebook-new.png"
                alt="Facebook"
              />
              <img
                src="https://img.icons8.com/metro/24/000000/twitter.png"
                alt="Twitter"
              />
              <img
                src="https://img.icons8.com/metro/24/000000/instagram-new.png"
                alt="Instagram"
              />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>

      {/* description,addition description,reviews tab create section */}
      <SingleProductDescription product={product} />

       <hr className="border-t border-gray-300"/>

      {/* Related Products */}
      <RelatedProducts />
    </div>

    
    
    </>
  );
};

export default ProductDetail;
