import React ,{ useState } from 'react';
import all_product from '../home/assests/mockData.js'
import Item from '../home/items/Items';
import Footer from '../home/footer/footer';

const Products = () => {
    
    const [isHovered, setIsHovered] = useState(false);
    return(
        <>
        <div  className="relative mt-14 flex justify-center">
        <p
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-4xl font-libre relative cursor-pointer"
            >
                All Products
                <span
                    className={`absolute left-0 top-12 bottom-0 h-2 bg-black transition-transform duration-500 origin-left transform ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    style={{ width: '100%' }}
                />
            </p>
            </div>
            <div class="flex justify-center w-full max-w-full py-5 mt-4">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-4 w-11/12">
                {all_product.map((all_product, index) => {
                    return <Item
                    key={index}
                    id={all_product.id}
                    image={all_product.image} 
                    name={all_product.name} 
                    price={all_product.price} 
                    size={all_product.size} />;
                })}
            </div>
            </div>
            <Footer/>
        </>
    )
}
export default Products;