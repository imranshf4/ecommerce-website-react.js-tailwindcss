import React, { useEffect, useState } from "react";
import HeadingSection from "../../components/HeadingSection";
import { products } from "../../utils/product";
import ProductCard from "../../components/ProductCard";
import { useAddToCartContext } from "../../context/AddToCartContext";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utils/databaseManager";

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  //Add product to cart
  const { cart, setCart } = useAddToCartContext();

  //Add product to local storage
  const handleAddProduct = (product) => {
    
    const toBeAddId = product.id;
    const sameProduct = cart.find((pd) => pd.id === toBeAddId);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.id !== toBeAddId);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.id, count);
  };

  //Load product from local storage
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);

    const cartProducts = productKeys.map((id) => {
        // Convert id to number if necessary
        const productId = Number(id); // or parseInt(id, 10);
        const product = products.find((pd) => pd.id === productId);
        
        if (product) {
            product.quantity = saveCart[id];
            return product;
        }

    });

    setCart(cartProducts);
}, []);


  console.log(cart);

  //Load more products
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };
  return (
    <div className="section-container">
      <HeadingSection heading="Our Products" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, visibleProducts).map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleAddProduct={handleAddProduct}
          />
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
  );
};

export default Products;
