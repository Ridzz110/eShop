import React, {useEffect} from 'react'
import Front from '../home/front/front';
import Exclusive from "../home/Exc/Exclusives";
import Review from '../home/Reviewss/Review';
import Footer from '../home/footer/footer'; 
import { useLocation } from 'react-router-dom';

export const Shop = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.state?.scrollToFooter) {
          const footerElement = document.getElementById('footer');
          if (footerElement) {
              footerElement.scrollIntoView({ behavior: 'smooth' });
              // Clear the state after scrolling to avoid repeated scrolling
              window.history.replaceState({}, document.title);
          }
      }
  }, [location]);

  return (
    <div>
        <Front />
        <Exclusive />
        <Review />
        <div id="footer">
        <Footer />
        </div>
    </div>
  )
}
export default Shop;
