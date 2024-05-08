import React from 'react'
import Image from 'next/image'

// import static image
import RcfptLogo from '/public/sponsors/rcfpt_logo.png'
import FmacLogo from '/public/sponsors/fmac_logo.png'
import HdyLogo from '/public/sponsors/hdy_logo.png'
import PcaricLogo from '/public/sponsors/pcaric_logo.png'
import SssLogo from '/public/sponsors/sss_logo.png'
import SaafLogo from '/public/sponsors/saaf_logo.png'

const sponsors = [RcfptLogo, HdyLogo, FmacLogo, PcaricLogo, SssLogo, SaafLogo]


export default function Sponsor() {
    return (
      <div className='flex flex-col h-full justify-center'>
        <div className='p-4 bg-white rounded-lg shadow-md flex flex-col h-full'> 
          <p className='text-xl font-bold mb-4 text-center'>Supported by</p>
          {sponsors.map((img, index) => (
            <div key={index} className='grid grid-cols-1 mb-2 xl:mb-4 justify-items-center'>
                <Image src={img} alt='sponsor' unoptimized/>
            </div>
          ))}
        </div>
      </div>
    )
  }
