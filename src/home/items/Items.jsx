import React from 'react';
import {Link} from 'react-router-dom';

const Item = (props) =>{

    const shoeSize = (sizes) => {
        if (!Array.isArray(sizes)) return null;
        return sizes.map((size, index) => (
            <div key={index} className="bg-black transform transition-transform duration-300 hover:scale-105 hover:mx-2 text-white w-7 h-7 font-libre text-md rounded-full flex justify-center items-center mx-1">{size}</div>
        ));
    };
    const handleClick = () => {
        // Scroll to the top of the page smoothly
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    }
    return(
        <div className="flex flex-col items-center justify-center my-8">
           
           <div className="h-80 w-11/12 relative rounded-lg" onClick={handleClick}>
                <Link to={`/product/${props.id}`}>
                    <div className="relative h-full w-full  group">
                        <img
                            className="rounded-lg absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                            src={props.image}
                            alt={props.name}
                        />
                        {/*<div className="absolute inset-0 w-full h-full bg-black opacity-50 rounded-lg transition-opacity duration-500 group-hover:opacity-0"
                         style={{ transition: 'opacity 0.5s' }}>
                    </div>*/}
                    </div>
                </Link>
            </div>
            <div>
                <div>
                <p className="font-libre text-lg my-3">{props.name}</p>
                </div>
                <div className="bg-black h-10 flex justify-center items-center rounded-full w-11/12 transform transition-transform duration-500 hover:scale-110">
                    <div className='h-6'><p className="font-libre text-md text-white">{props.price}</p></div>
                </div>
            </div>
            <div className='mt-2'>
                <div class="flex ">
                {shoeSize(props.size)}
                </div>
            </div>
        </div>
    )
}
export default Item;