import React from 'react';
import { productImgUrl } from '../utils/productImgUrl';

import compareIcon from "../assets/home/icon/compare.png";
import likeIcon from "../assets/home/icon/Heart.png";
import shareIcon from "../assets/home/icon/share.png";



const ProductCard = ({ product }) => {
    return (
        <div className="relative rounded-lg overflow-hidden bg-[#F4F5F7] group">
            <img 
                src={productImgUrl(`${product.imageUrl}`)} // Demo image if no image is provided
                alt={product.name} 
                className="w-full h-60 object-cover hover:scale-110 transition transform duration-200" 
            />
            <div className="py-4 px-4">
                <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex items-center justify-left gap-4">
                    <span className="text-base font-bold text-gray-800">
                        Rp {product.price.toLocaleString()}
                    </span>
                    {
                        product.discount_price && (
                            <span className="text-base font-medium text-gray-400 line-through">Rp {product.discount_price.toLocaleString()}</span>
                        )
                    }
                    {product.discount ? (
                        <div className='absolute top-5 right-3'>
                           <span className="bg-[#E97171] text-white text-xs font-bold px-2.5 py-4 rounded-full">
                            -{product.discount}%
                            </span>
                        </div>
                    )
                    :
                    <div className='absolute top-5 right-3'>
                      <span className="bg-[#2EC1AC] text-white text-xs font-bold px-2.5 py-4 rounded-full">
                        New
                      </span>
                    </div>
                    }
                </div>
                
            </div>
            {/* Action buttons, initially hidden */}
            <div className=" bg-[#3A3A3A]/50 h-full w-full flex-col absolute py-30 inset-x-0 inset-y-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="space-y-4">
                <div className='text-center'>
                   <button className="bg-white text-primary/80 font-bold py-2 px-12 rounded hover:text-primary transition-colors">
                      Add to Cart
                   </button>
                </div>

                {/* icons */}
                <div className='flex flex-row items-center justify-center gap-4'>

                    <div className="flex flex-row items-center justify-center gap-1.5">
                    <span  style={{ color: 'white' }}>
                       <img src={shareIcon} className='w-5 h-5' alt="shareIcon" />
                    </span>
                       <p className="text-white text-center ">Share</p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-1.5">
                    <span  style={{ color: 'white' }}>
                       <img src={compareIcon} className='w-5 h-5' alt="compareIcon" />
                    </span>
                    <p className="text-white text-center ">Compare</p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-1.5">
                    <span  style={{ color: 'white' }}>
                       <img src={likeIcon} className='w-5 h-5' alt="likeIcon" />
                    </span>
                    <p className="text-white text-center ">Like</p>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
