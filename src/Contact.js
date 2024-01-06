import React from 'react'

export default function Contact() {
  return (
    <div className='p-2 bg-white rounded-lg shadow-md'>
        <p className='text-gray-800 text-lg font-bold text-center'>Contact</p>
        <div className='grid grid-flow-row md:grid-flow-col justify-center items-center mt-1'>
            <div className='grid grid-flow-col justify-center items-center mx-3 py-1 md:py-0'>
                <img className='w-8 h-8' src='/phone-svgrepo-com.svg' alt='phone icon'/>
                <p className='text-gray-800 text-base ml-2'>074-273100 ต่อ 1234,1235</p>
            </div>
            <div className='grid grid-flow-col justify-center items-center mx-3 py-1 md:py-0'>
                <a href='#'>
                  <img className='w-8 h-8' src='/facebook-color-svgrepo-com.svg' alt='facebook icon'/>
                </a>
                <p className='text-gray-800 text-base ml-2'>HPCC</p>
            </div>
            <div className='grid grid-flow-col justify-center items-center mx-3 py-1 md:py-0'>
                <a href='#'>
                    <img className='w-8 h-8' src='/line-svgrepo-com.svg' alt='line icon'/>
                </a>
                <p className='text-gray-800 text-base ml-2'>@HPCC</p>
            </div>
        </div>
        <p className='text-gray-800 text-xs text-center mt-1'>กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่</p>
        <p className='text-gray-800 text-xs text-center'>182 ถ.รัถการ ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110</p>
    </div>
  )
}
