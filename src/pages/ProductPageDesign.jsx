import React,{useState, useContext} from 'react';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
import Item from '../home/items/Items';
import products from '../home/assests/mockData';
import { Button } from "../components/ui/button";
import { ShopContext } from '../context/shopCon';

const ProductPageDesign = (props) => {



    const{addToCart} = useContext(ShopContext);

    const [isHovered, setIsHovered] = useState(false);
    const {product} = props;
    const categoryItems = products.filter((item) => item.category === product.category).slice(0, 4);

    const shoeSize = (sizes) => {
        if (!Array.isArray(sizes)) return null;
        return sizes.map((size, index) => (
            
            <div key={index} 
            onClick={() => handleSizeSelect(size)
            }
            className="bg-black transform transition-transform duration-300 hover:scale-105 hover:mx-2 text-white w-8 h-8 mt-3 font-libre text-md rounded-full flex justify-center items-center mx-2">{size}</div>
        ));
    }
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        console.log(size);
    };
    return(
        <>
        <div className='grid lg:grid-cols-2 w-full gap-4 mt-7 grid-cols-1 sm:m-3'>
            <div className='flex flex-col items-center'>
            <img src={product.image} alt={product.name} className=' w-3/4 h-4/6 rounded-lg'/>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-4 gap-4 mt-4 w-11/12'>
                    <img className=' h-5/6 rounded-lg' src={product.image} alt={product.name}/>
                    <img className=' h-5/6 rounded-lg' src={product.image} alt={product.name}/>
                    <img className=' h-5/6 rounded-lg' src={product.image} alt={product.name}/>
                    <img className=' h-5/6 rounded-lg' src={product.image} alt={product.name}/>
                </div>
            </div>
            </div>
            <div>
                <p className='font-libre font-extrabold text-5xl mt-3'>{product.name}</p>
                <div className='w-11/12'>
                <p className='font-libre text-2xl mt-4'>{product.description}</p>
                </div>
                <div className=' w-28 mt-3 p-2 bg-black flex justify-center items-center rounded-full'>
                <p className='font-libre text-bold text-2xl text-white'>{product.price}</p>
                </div>
                <div className='font-libre text-lg mt-3 flex flex-row'  >
                    {shoeSize(product.size)}
                    </div>
                <NumberInput defaultValue={1} min={1} max={10} className=' outline-black w-3/6 mt-3 border-black '>
                    <NumberInputField />
                        <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                        </NumberInputStepper>
                </NumberInput>
                <p className='font-libre text-2xl mt-4'>Add To Cart: </p>
                <Button variant="outline" 
                className='mt-3 p-2 bg-black text-white hover:bg-zinc-800 font-libre text-lg px-4'
                onClick={() => {
                    if (selectedSize) {
                        addToCart(product.id, selectedSize);
                        alert('Item added to cart');
                    } else {
                        alert('Please select a size');
                    }
                }}
            >Add To Cart</Button>
            </div>
        </div>
        <div>
                <div  className="relative flex justify-center">
        <p
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-4xl font-libre relative cursor-pointer"
            >
                Related Products
                <span
                    className={`absolute left-0 top-12 bottom-0 h-2 bg-black transition-transform duration-500 origin-left transform ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    style={{ width: '100%' }}
                />
            </p>
            </div>
            <div className='flex justify-center items-center'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-11/12'>
                {categoryItems.map((item, index) => {
                
            return <Item
              key={index} 
                id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              size={item.size}
            />
            }
          )}</div>
          </div>
                </div>
        </>
    )
}
export default ProductPageDesign;