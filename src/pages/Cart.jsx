import React, {useState} from "react";
import CartItem from "../home/cartItem/cartItem";
const Cart = () => {
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div>
            <div  className="relative mt-14 flex justify-center">
        <p
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-4xl font-libre relative cursor-pointer"
            >
                CART
                <span
                    className={`absolute left-0 top-12 bottom-0 h-2 bg-black transition-transform duration-500 origin-left transform ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    style={{ width: '100%' }}
                />
            </p>
            </div>
            <CartItem/>
        </div>
    );
}
export default Cart;