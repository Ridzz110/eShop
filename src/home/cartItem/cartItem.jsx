import React, {useContext} from 'react';
import {ShopContext} from '../../context/shopCon'
import { Button } from "../../components/ui/button";

const CartItem = () => {
    const { cartItem, removeFromCart, all_product, selectedSizes, getTotalPrice,getTotalQuantity } = useContext(ShopContext);
    {console.log("cartItem selected Sizes: ", selectedSizes)}
    return(
        <>
        <div className=''>
            {Object.keys(cartItem).map((key) => {
                if(cartItem[key] > 0){
                    const product = all_product.find((e) => e.id === Number(key));
                    const selectedSize = selectedSizes[key];
                    return(
                        <div key={key}>
                            <div className='w-full h-2/6 flex justify-between px-12 items-center'>
                            <div className='relative w-36 h-64 object-cover flex items-center justify-center sm:flex-col'>
                            <img src={product.image} alt={product.name} className='absolute inset-0 rounded-xl' />
                            </div>
                            <p className='font-libre text-lg'>{product.name}</p>
                            
                            <p className='font-libre text-lg'>{product.price}</p>
                            <p className='font-libre text-lg'>Quantity {cartItem[key]}</p>
                            <p className='font-libre text-lg'>total price: {product.price*cartItem[key]}</p>
                            <p className='font-libre text-lg'>Selected Size: {selectedSize}</p>
                            {console.log(selectedSize)}
                            {console.log(cartItem)}
                            <Button onClick={() => removeFromCart(Number(key))} className='bg-black text-white hover:bg-zinc-900 font-libre'>Remove</Button>
                            </div>
                        </div>
                    )
                }
                return null;
            })}
        
         <div  className='relative bottom-0 w-full flex-col justify-end p-5 font-libre bg-black text-white text-xl'>
         <p className='mt-2'>Total Quantity: {getTotalQuantity()}</p>
         <p className='mt-2'>Total Price: ${getTotalPrice().toFixed(2)}</p>
     </div>
     </div>
     </>
    )
}
export default CartItem;