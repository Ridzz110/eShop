import React, { useState } from 'react';
import exData from './ex';
import Item from '../items/Items';

const Exclusives = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
        <div className="relative mt-14 flex justify-center">
            <p
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-4xl font-libre relative cursor-pointer"
            >
                OUR EXCLUSIVES
                <span
                    className={`absolute left-0 top-12 bottom-0 h-2 bg-black transition-transform duration-500 origin-left transform ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    style={{ width: '100%' }}
                />
            </p>
        </div>
        <div class="flex justify-center py-5 relative mt-12">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-4 w-full max-w-screen-lg">
                    {exData.map((ex, index) => (
                        <Item
                            key={index}
                            id={ex.id}
                            image={ex.image}
                            name={ex.name}
                            price={ex.price}
                        />
                    ))}
                    </div>
            </div>
        </>
    );
};

export default Exclusives;
