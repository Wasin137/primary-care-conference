import React from 'react'
import Image from 'next/image'

export default function Carousel() {
  return (
    <>
        <picture>
            <source
            media="(max-width: 767px)"
            sizes="(max-width: 767px) 100vw, 767px"
            srcSet="
            /pexels-thirdman-7659567_inaxsy_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
            /pexels-thirdman-7659567_inaxsy_ar_1_1,c_fill,g_auto__c_scale,w_500.jpg 500w,
            /pexels-thirdman-7659567_inaxsy_ar_1_1,c_fill,g_auto__c_scale,w_737.jpg 737w,
            /pexels-thirdman-7659567_inaxsy_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w"
            />
            <source
            media="(min-width: 768px) and (max-width: 1199px)"
            sizes="(max-width: 1200px) 60vw, 720px"
            srcSet="
            /pexels-thirdman-7659567_inaxsy_ar_16_9,c_fill,g_auto__c_scale,w_461.jpg 461w,
            /pexels-thirdman-7659567_inaxsy_ar_16_9,c_fill,g_auto__c_scale,w_720.jpg 720w"
            />
            <Image
            sizes="(max-width: 3500px) 40vw, 1400px"
            srcSet="
            /pexels-thirdman-7659567_inaxsy_c_scale,w_480.jpg 480w,
            /pexels-thirdman-7659567_inaxsy_c_scale,w_812.jpg 812w,
            /pexels-thirdman-7659567_inaxsy_c_scale,w_1102.jpg 1102w,
            /pexels-thirdman-7659567_inaxsy_c_scale,w_1308.jpg 1308w,
            /pexels-thirdman-7659567_inaxsy_c_scale,w_1400.jpg 1400w"
            src="/pexels-thirdman-7659567_inaxsy_c_scale,w_1400.jpg"
            alt=""
            width={1400}
            height={933}
            layout='responsive'/>
        </picture>
    </>
    )
}
