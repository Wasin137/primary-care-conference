import React from 'react'
import Image from 'next/image'
import BackgroundImg from '/public/pexels-thirdman-7659567_inaxsy_c_scale,w_1400.jpg'

export default function Carousel() {
    return (
      <Image
        src={BackgroundImg}
        alt="Background Image"
        width={1400}
        height={933}
        unoptimized
      />
    );
  }
