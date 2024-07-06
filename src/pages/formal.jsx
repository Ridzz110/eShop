import React, {useState} from 'react';
import Item from '../home/items/Items';
import Products from '../home/assests/mockData';
const Formal = () =>{
    const [isHovered, setIsHovered] = useState(false);

    return(
        <>
        <div>
            <div  className="relative mt-14 flex justify-center">
        <p
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-4xl font-libre relative cursor-pointer"
            >
                FORMALS
                <span
                    className={`absolute left-0 top-12 bottom-0 h-2 bg-black transition-transform duration-500 origin-left transform ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    style={{ width: '100%' }}
                />
            </p>
            </div>
        </div>
         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-4">
         {Products.map((item, index) => {
            if(item.category === 'formal'){
              return <Item
                 key={item.index}
                 id={item.id}
                 image={item.image}
                 name={item.name}
                 price={item.price}
                 size={item.size}
             />
            } else {
                return null;
            }})}
     </div>
     </>
    )
}
export default Formal;