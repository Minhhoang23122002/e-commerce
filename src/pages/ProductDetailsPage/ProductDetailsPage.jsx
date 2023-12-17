import React from 'react'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'
import RelatedProductsComponent from '../../components/RelatedProductsComponent'

const ProductDetailsPage = () => {
  return (
    <div style={{ padding: '0 120px', background:'#efefef'}}>
        <h5>Trang chu</h5>
         <ProductDetailsComponent />
         <RelatedProductsComponent />
    </div>
  )
}

export default ProductDetailsPage