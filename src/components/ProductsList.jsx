import React from 'react';
import { Link } from 'react-router-dom';
import noPictures from '../assets/no_pictures.png';

export default function Product({ data }) {

  return (

    <div className='products'>
      {data.map(item => (

        <div className='products_product' key={item.id}>
          <Link to={`/product/${item.id}`}>

            <div className='products_product_image'>
              <img src={item.cover ? item.cover : noPictures} alt='Photographie du logement' />

              <div className='products_product_image_titre'>
                <h4>{item.title}</h4>
              </div>

            </div>

          </Link>
        </div>

      ))}
    </div>
  )
}







