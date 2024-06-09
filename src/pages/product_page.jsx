import React, { useContext } from 'react';
import { ShopContext } from '../context/shopCon'; 
import { useParams } from 'react-router-dom';
import Breadcrum from '../home/hierarchy/hierarchy';
import ProductPageDesign from './ProductPageDesign';

const ProductPage = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const parsedProductId = Number(productId);
    const product = all_product.find((e) => e.id === parsedProductId);

    if (!product) {
        return <div>Product not found</div>;
      }

    return( 
    <div>
    <Breadcrum product={product} />
    <ProductPageDesign product={product} />
    </div>
)
};

export default ProductPage;
