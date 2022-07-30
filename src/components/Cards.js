import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Highlights! </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/crop_images.jpg'
              text='We understand quality                          '
        
              path='/about-us'
            />
            <CardItem
              src='images/enquiry.png'
              text='Contacts and enquiry                  '
              path='/contact-us'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/different_logo.jpg'
              text='Vadcsp               '
              path='/about-us'
            />
            <CardItem
              src='images/banner.jpg'
              text='Products and services                    '
              path='/contact-us'
            />
            <CardItem
              src='images/farmers.jpg'
              text='Ensuring good quality'
              path='/about-us'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
