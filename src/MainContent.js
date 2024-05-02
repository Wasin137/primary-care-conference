import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import static image
import MainPoster from '/public/posters/main_poster.png'
import AbstractPoster from '/public/posters/abstract_poster.jpg'

export default function MainContent() {
  return (
    <>
        <div className='p-4 bg-white rounded-lg shadow-md'>
            <p className='text-black-1000 text-3xl xl:text-4xl 2xl:text-6xl mt-5'>&quot;Health Horizons: Bridging Global Health with Local Solutions in Primary Care&quot;</p>
            <p className='text-gray-800 text-2xl xl:text-3xl 2xl:text-4xl mt-2'>งานประชุมวิชาการประจำปี 2567 กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่</p>
            <div className='mt-5 flex justify-center'>
              <Image className='border border-black' src={MainPoster} alt='Poster' style={{ width: '75%' }} unoptimized/>
            </div>
            <div className='mt-5'>
              <Link href={'/registration'} className='text-gray-500 text-lg font-bold xl:text-xl 2xl:text-2xl hover:underline'>คลิกลงทะเบียนร่วมงาน</Link>
            </div>
            <p className='text-gray-800 text-xl font-bold xl:text-2xl 2xl:text-3xl mt-5'>Calling for Abstract</p>
            <div className='mt-5 flex justify-center'>
              <Image className='border border-black' src={AbstractPoster} alt='Abstract Poster' style={{ width: '75%' }} unoptimized/>
            </div>
            <div className='mt-5'>
              <Link href={'/abstracts'} className='text-gray-500 text-lg font-bold xl:text-xl 2xl:text-2xl hover:underline'>ร่วมส่งผลงาน</Link>
            </div>
            <div className='mt-5'>
                <p className='text-gray-800 text-lg font-bold xl:text-xl 2xl:text-2xl'>สถานที่จัดงาน</p>
                <p className='text-black text-base xl:text-lg 2xl:text-xl mt-2'>โรงแรมสงขลาลากูน่า Laguna Grand Hotel and Spa Songkhla</p>
                <p className='text-gray-400 text-base xl:text-lg 2xl:text-xl mt-2'>Location (Google Maps)</p>
                <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.00557281763!2d100.5539031103155!3d7.125349615847764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d2d0fe55ae283%3A0x55a2cd31371eb734!2sLaguna%20Grand%20Hotel%20%26%20Spa%20Songkhla!5e0!3m2!1sen!2sth!4v1712935548059!5m2!1sen!2sth"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
            </div>
        </div>
    </>
  )
}
