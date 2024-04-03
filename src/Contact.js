import React from 'react'
import Image from 'next/image'

export default function Contact() {
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
          <p className='text-gray-700 text-base'>15 May 2024</p>
          <p className='text-black-text-base font-bold'>Abstracts Result Notification</p>
          <p className='text-gray-700 text-base'>25 May 2024</p>
          <p className='text-black-text-base font-bold'>Conference Dates</p>
          <p className='text-gray-700 text-base'>6 - 7 June 2024</p>
        </div>
        <div className='xl:col-span-1 py-2 px-4'>
          <div className='mb-2'>
            <p className='text-gray-800 text-lg font-bold text-start mb-2'>Contact Us</p>
            <p className='text-gray-800 text-base text-start'>กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่</p>
            <p className='text-gray-800 text-base text-start'>182 ถ.รัถการ ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110</p>
            <p className='text-gray-800 text-base text-start'>โทรศัพท์ 074-273100 ต่อ 1234,1235</p>
          </div>
          <div className='my-2'>
            <p className='text-gray-800 text-lg font-bold text-start mb-2'>Sponsorship</p>
            <p className='text-gray-800 text-base text-start'>กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่</p>
            <p className='text-gray-800 text-base text-start'>182 ถ.รัถการ ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110</p>
            <p className='text-gray-800 text-base text-start'>โทรศัพท์ 074-273100 ต่อ 1234,1235</p>
          </div>
        </div>
        <div className='xl:col-span-2 py-2 px-4'>
          <div className='xl:grid grid-cols-2'>
            <div className='xl:col-span-1'>
              <p className='text-gray-800 text-lg font-bold text-start mb-2'>Support By</p>
              <img className='p-2 m-2' src='/sponsors/laguna.png' alt='Laguna Grand Hotel & Spa Songkhla'/>
            </div>
            <div className='xl:col-span-1'>
            <img className='p-2 m-2' src='/sponsors/hdy_logo.png' alt='Hatyai Hospital'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
