import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ProductsCards() {
  return (
    <div className='cards'>
      <h1>Our Products </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mix_nutrient.png'
              text='VAD KARISHMA - Multi Micro-Nutrient Mix Fertilizer '
              path='/about-us'
            />
            <CardItem
              src='images/mentha.png'
              text='VAD MENTHA SPECIAL '
              path='/contact-us'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/fertilizer.png'
              text=' VAD MICRO- A Soil Application Fertilizer '
              path='/contact-us'
            />
            <CardItem
              src='images/kamal_product.jpeg'
              text='VAD Kamal Gold '
              path='/contact-us'
            />
            <CardItem
              src='images/products.jpg'
              text='Our Special Products'
              path='/contact-us'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductsCards;