import React, {useContext} from "react";
import logo from "../assests/1.png"
import { Link, useNavigate } from "react-router-dom";
import{ShopContext} from '../../context/shopCon';
const Navbar = () => {

    const{getTotalQuantity} = useContext(ShopContext);
    const navigate = useNavigate();

    const handleAboutUsClick = (event) => {
      event.preventDefault();
      navigate('/', { state: { scrollToFooter: true } });
    };
    
    return(
<div class="container">
    <nav class="navbar navbar-expand-lg w-full font-libre text-lg text-black">
        <div class="flex justify-around w-100">
            <div class="flex-auto">
                <Link to='/'>
                <img src={logo} class="w-24" alt="cart" />
                </Link>
            </div>
            <ul class="navbar-nav mr-auto flex-auto ">
                <li class="nav-item px-2">
                    <Link class="nav-link" to='/all_product'>Products</Link>
                </li>
                <li class="nav-item dropdown px-2">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categories
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link class="dropdown-item" to='/categories/formal'>Formal</Link>
                        <Link class="dropdown-item" to='/categories/casual'>Casual</Link>
                    </div>
                </li>
                <li class="nav-item px-2">
                    <Link class="nav-link" to='/' onClick={handleAboutUsClick}>AboutUs</Link>
                </li>
            </ul>
            <div class="flex-none flex justify-center">
                <Link to='/cart' class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="relative size-10 block-online pr-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <div class="bg-black w-6 h-6 rounded-full text-white text-center flex justify-center items-center relative bottom-3 ">{getTotalQuantity()}</div>
                </Link>
                <Link to='/login' class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 block-online pl-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </Link>
            </div>
        </div>
    </nav>
</div>

    );
}
export default Navbar;