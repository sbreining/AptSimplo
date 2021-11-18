import React from 'react';
import './Product.css';

export interface Product {
  title: string
  price: number
  retailPrice?: number
  qty: number
  isSet: boolean
  setQty?: number | null
  imagePath: string
  region: string
}

const formatPrice = (price: number): string => {
  return '$' + price + '.00';
}

const ProductCard: React.FC<Product> = (product: Product) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <img className="product-photo" src={product.imagePath} alt={product.title} />
      <div className="info-box">
        <ul className="product-info">
          <li><span className="category">Price</span><span className="detail">: {formatPrice(product.price)}</span></li>
          {product.retailPrice && <li><span className="category">Retail Price</span><span className="detail">: {formatPrice(product.retailPrice)}</span></li>}
          <li><span className="category">Quantity</span><span className="detail">: {product.qty}</span></li>
          {product.setQty && <li><span className="category">Number In Set</span><span className="detail">: {product.setQty}</span></li>}
          <li><span className="category">Region</span><span className="detail">: {product.region}</span></li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;
