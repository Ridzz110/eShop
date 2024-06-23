import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from '../../context/shopCon';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "../../components/ui/button";

const Navbar = () => {
    const { getTotalQuantity } = useContext(ShopContext);
    const navigate = useNavigate();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleAboutUsClick = (event) => {
        event.preventDefault();
        navigate('/', { state: { scrollToFooter: true } });
    };

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg  px-4 d-flex align-items-center">
            <Link className="navbar-brand" to="/">
                <p className="font-libre text-3xl font-bold">LOGO</p>
            </Link>
            
            <button  className="navbar-toggler bg-black" 
                    onClick={handleNavCollapse}
                    type="button" 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded={!isNavCollapsed} 
                    aria-label="Toggle navigation"
                    style={{ border: 'none', outline: 'none' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="white"
                    aria-label="Toggle navigation"
                >
                    <path
                        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                        className="navbar-toggler-icon"
                    />
                </svg>
            </button>
            <div className={`${isNavCollapsed ? '' : 'collapse'} navbar-collapse`} id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto me-auto text-black font-libre text-lg">
                    <li className="nav-item">
                        <Link className="nav-link" to="/all_product">Products</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Categories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/categories/formal">Formal</Link>
                            <Link className="dropdown-item" to="/categories/casual">Casual</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={handleAboutUsClick}>About Us</Link>
                    </li>
                </ul>
            </div> 
                    <Link to="/cart" className="ms-auto mr-2 nav-link d-flex align-items-center position-relative">
                        <Button className=" bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="size-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                            <div
                                className="bg-black w-6 h-6 rounded-circle text-white text-center d-flex justify-content-center align-items-center position-absolute"
                                style={{ bottom: '-4px', left: '20px' }}
                            >
                                {getTotalQuantity()}
                            </div>
                        </Button>
                    </Link>
                
                    <Button className="bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                        <Link to="/login" className="nav-link d-flex align-items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="size-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        </Link>
                    </Button>
        </nav>
    );
}

export default Navbar;
