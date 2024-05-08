import React from 'react'
import Image from 'next/image'
// Import Static logo
import BerlinLogo from '/public/sponsors/berlin_logo.png'
import AZLogo from '/public/sponsors/az_logo.png'
import MillimedLogo from '/public/sponsors/millimed_logo.jpg'
import UdomLogo from '/public/sponsors/udom_logo.png'

export default function Contact() {
  const sponsorImages = [
    { src: BerlinLogo, alt: 'Berlin' },
    { src: AZLogo, alt: 'AstraZaneca'},
    { src: MillimedLogo, alt: 'Millimed BFS'},
    { src: UdomLogo, alt:'Udom.'}
  ]

  return (
    <div className='p-2 bg-white rounded-lg shadow-md'>
      <div className='grid grid-cols-1 xl:grid-cols-4'>
        <div className='xl:col-span-1 py-2 px-4'>
          <p className='text-gray-800 text-lg font-bold text-start mb-4'>Keys date</p>
          <p className='text-black-text-base font-bold'>Registration</p>
          <p className='text-gray-700 text-base mb-2'>15 April - 30 May 2024</p>
          <p className='text-black-text-base font-bold'>Call for Abstracts Open</p>
          <p className='text-gray-700 text-base'>15 April 2024</p>
          <p className='text-black-text-base font-bold'>Abstracts Submission Deadline</p>
          <p className='text-gray-700 text-base'>20 May 2024</p>
          <p className='text-black-text-base font-bold'>Abstracts Result Notification</p>
          <p className='text-gray-700 text-base'>27 May 2024</p>
          <p className='text-black-text-base font-bold'>Conference Dates</p>
          <p className='text-gray-700 text-base'>6 - 7 June 2024</p>
        </div>
        <div className='xl:col-span-1 py-2 px-4'>
          <div className='mb-2'>
            <p className='text-gray-800 text-lg font-bold text-start mb-2'>Contact Us</p>
            <p className='text-gray-800 text-base text-start'>กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่</p>
            <p className='text-gray-800 text-base text-start'>182 ถ.รัถการ ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110</p>
            <p className='text-gray-800 text-base text-start'>โทรศัพท์ 074-273100 ต่อ 5510</p>
          </div>
          <div className='my-2'>
            <p className='text-gray-800 text-lg font-bold text-start mb-2'>Sponsorship</p>
            <p className='text-gray-800 text-base text-start'>กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่</p>
            <p className='text-gray-800 text-base text-start'>182 ถ.รัถการ ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110</p>
            <p className='text-gray-800 text-base text-start'>โทรศัพท์ 074-273100 ต่อ 5510</p>
          </div>
        </div>
        <div className='xl:col-span-2 py-2 px-4'>
        <p className='text-gray-800 text-lg font-bold text-start mb-2'>Sponsors</p>
          <div className='xl:grid grid-cols-2'>
            {sponsorImages.map((sponsor, index) => (
              <div key={index} className='xl:col-span-1 p-2 m-2'>
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  style={{width:'75%'}}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
