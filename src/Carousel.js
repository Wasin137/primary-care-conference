import React from 'react'
import Image from 'next/image'

export default function Carousel() {
    return (
      <Image
        src="/pexels-thirdman-7659567_inaxsy_c_scale,w_1400.jpg"
        alt=""
        width={1400}
        height={933}
        layout='responsive'
        srcSet={`
          /pexels-thirdman-7659567_inaxsy_c_scale,w_480.jpg 480w,
          /pexels-thirdman-7659567_inaxsy_c_scale,w_812.jpg 812w,
          /pexels-thirdman-7659567_inaxsy_c_scale,w_1102.jpg 1102w,
          /pexels-thirdman-7659567_inaxsy_c_scale,w_1308.jpg 1308w,
          /pexels-thirdman-7659567_inaxsy_c_scale,w_1400.jpg 1400w
        `}
        sizes={`
          (max-width: 767px) 100vw,
          (min-width: 768px) and (max-width: 1199px) 60vw,
          40vw
        `}
        unoptimized
      />
    );
  }
