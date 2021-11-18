import React from 'react';
import ProductCard, { Product } from '../Product/Product';
import './ProductList.css';

export interface Products {
  count: number
  products: Product[]
}

const ProductList: React.FC<Products> = ({ count, products }: Products) => {
  let finalProducts = []
  for (let i = 0; i < count; i++) {
    finalProducts.push(products[i%products.length])
  }
  return (
    <div className="product-grid">
      {finalProducts.map(({title, price, retailPrice, qty, isSet, setQty, imagePath, region}, idx) => {
        return (
          <ProductCard
            key={idx} //TODO: Update to forloop and use i for key
            title={title}
            price={price}
            retailPrice={retailPrice}
            qty={qty}
            isSet={isSet}
            setQty={setQty}
            imagePath={imagePath}
            region={region}
          />
        )
      })}
    </div>
  );
}

export default ProductList;
