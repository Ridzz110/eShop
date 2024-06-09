import React from 'react';
import picture from "../assests/casual (8).jpg"
import picture2 from "../assests/formal (1).jpg"
import picture3 from "../assests/casual (7).jpg"
const front = () => {
    return(
        <div class="flex justify-between relative h-screen w-full ">
            <img src={picture} alt="" className="object-cover h-full w-5/12"/>
            <img src={picture2} alt="" className="min-h-0 "/>
            <img src={picture3} alt="" className="min-h-0 "/>
        
        <div class="absolute inset-0 flex items-center justify-center bg-black opacity-40 h-screen object-cover" >
        <p class="font-libre text-white text-6xl text-end">EXPLORE OUT LUX HEELS<br/> COLLECTION WITH EXCLUSIVE DESIGNS</p>
        </div>
        </div>
    )
}
export default front;