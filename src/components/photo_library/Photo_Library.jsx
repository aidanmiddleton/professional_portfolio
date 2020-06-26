import React from 'react';
import { Carousel } from  'react-responsive-carousel';
import ReactPlayer from 'react-player';


export default function PhotoCarousel(props) {

  return (
    <div className='carousel-div'>
      <div className='inner-carousel-div'>

        <Carousel>
          <div>
            <img src='https://unsplash.com/photos/twukN12EN7c/download'/>
            <h2>Caption</h2>
          </div>

          <div>
            <img src='https://unsplash.com/photos/twukN12EN7c/download'/>
            <h2>Caption</h2>
          </div>

          <div>
            <img src='https://unsplash.com/photos/twukN12EN7c/download'/>
            <h2>Caption</h2>
          </div>
        </Carousel>

      </div>
    </div>

  )

}