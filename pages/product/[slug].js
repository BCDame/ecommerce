import React from 'react';
import { client,urlFor } from '../../lib/client'

const productDetails = ({ products , product }) => {

    const { image, name, details, price } = product ;
  return (
    <div>
      <div className='product-detail-container' >
        <div>
            <div className='image-container'>
                <img src={image && image[0]} />
            </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params : { slug } }) =>{
    const query = `*[_type == "product" && slug.current == '${slug}'].[0]`;
    const product = await client.fetch(query);
  
    const productsQuery = '*[_type == "product"]';
    const products = await client.fetch(productsQuery);
  
    // const bannerQuery = '*[_type == "banner"]';
    // const bannerData = await client.fetch(bannerQuery);
  
    return {
      props:{ products ,product } 
    }
  }

export default productDetails
