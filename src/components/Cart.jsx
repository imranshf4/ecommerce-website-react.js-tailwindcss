import React, { useEffect } from "react";
import BannerSection from "./BannerSection";
import ProductImage from "../assets/products/single product/Asgaard sofa 3.png";
import { MdDelete } from "react-icons/md";
import { useAddToCartContext } from "../context/AddToCartContext";
import { productImgUrl } from "../utils/productImgUrl";
import { getDatabaseCart, removeFromDatabaseCart } from "../utils/databaseManager";
import { products } from "../utils/product";

const Cart = () => {
  //Add product to cart context
  const { cart, setCart } = useAddToCartContext();
   //reduce
   const totalPrice = cart.reduce((total, prd) => total + prd.price*prd.quantity, 0);

   const handleRemoveProduct = (productID) => {
    const newCart = cart.filter((pd) => pd.id !== productID);
    setCart(newCart);
    removeFromDatabaseCart(productID);
  };

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const cartProducts = productKeys.map((id) => {
      const productId = Number(id);
      const product = products.find((pd) => pd.id === productId);
      product.quantity = saveCart[id];
      // console.log(product);
      return product;
    });

    setCart(cartProducts);
  }, []);

  return (
    <>
      <BannerSection name="cart" />

      <div className="section-container flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-3/4">
          {/* Cart Items */}

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-singleP">
              <tr>
                <th className="px-6 py-3 text-left text-xl font-medium ">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xl font-medium ">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xl font-medium ">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xl font-medium ">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xl font-medium ">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cart.map((item, index) => (
                <tr className="border-b-1">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={productImgUrl(`${item.imageUrl}`)}
                      alt="Product"
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rs. {item.price * item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{ item.quantity }</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-black/50">
                      <MdDelete className="h-5 w-5 cursor-pointer" onClick={()=>handleRemoveProduct(item.id)} />
                    </button>
                  </td>
                </tr>
              ))}

              {/* Additional rows can be added here */}
            </tbody>
          </table>
        </div>

        {/* Cart details */}

        <div className="w-full md:w-1/4 bg-singleP flex flex-col items-center py-4  gap-3">
          <h1 className="font-bold text-center text-xl">Cart Details</h1>
          <div className="flex gap-4 text-sm">
            <p>Total</p>
            <p>Rs. {totalPrice}</p>
          </div>
          <div className="pb-4">
            <button className="capitalize border cursor-pointer transition-colors font-base text-sm px-6 py-2 rounded-sm">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
