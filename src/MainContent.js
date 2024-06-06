import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import static image
import MainPoster from '/public/posters/main_poster.jpg'
import AbstractPoster from '/public/posters/abstract_poster.jpg'
import Schedule1 from '/public/posters/schedule1.jpg'
import Schedule2 from '/public/posters/schedule2.png'

export default function MainContent() {
  return (
    <>
        <div className='p-4 bg-white rounded-lg shadow-md'>
            <p className='text-black-1000 text-3xl xl:text-4xl 2xl:text-6xl mt-5'>&quot;Health Horizons: Bridging Global Health with Local Solutions in Primary Care&quot;</p>
            <p className='text-gray-800 text-2xl xl:text-3xl 2xl:text-4xl mt-2'>งานประชุมวิชาการประจำปี 2567 กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่</p>
            <div className='mt-5'>
              <p className='text-gray-800 text-xl font-bold xl:text-2xl 2xl:text-3xl mt-5'>Download เอกสารประกอบการประชุม</p>
              <Link href={'https://drive.google.com/drive/u/0/folders/1f0EtMGDgYLgavl1uZ2Xo-t1qFhW7JmkD?sort=13&direction=a'} className='text-gray-500 text-lg font-bold xl:text-xl 2xl:text-2xl hover:underline'>เอกสารประกอบหัวข้อวิชาการ(Google Drive)</Link>
            </div>
            <div className='mt-5'>
              <p className='text-gray-800 text-xl font-bold xl:text-2xl 2xl:text-3xl mt-5'>แบบประเมินงานประชุม</p>
              <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScphjmaBqCk-_-02lIJMT2QKEkZ9zrcDlamScRUoN2b-z8afg/viewform'} className='text-gray-500 text-lg font-bold xl:text-xl 2xl:text-2xl hover:underline'>ทำแบบประเมินลุ้นรางวัล!!</Link>
            </div>
            <div className='mt-5 flex justify-center'>
              <Image className='border border-black' src={MainPoster} alt='Poster' style={{ width: '75%' }} unoptimized/>
            </div>
            <div className='mt-5 flex flex-row gap-1 justify-center'>
              <Image className='border border-black' src={Schedule1} alt='Schedule1' style={{ width: '45%' }} unoptimized/>
              <Image className='border border-black' src={Schedule2} alt='Schedule2' style={{ width: '45%' }} unoptimized/>
            </div>
            <p className='text-gray-800 text-xl font-bold xl:text-2xl 2xl:text-3xl mt-5'>Calling for Abstract</p>
            <div className='mt-5 flex justify-center'>
              <Image className='border border-black' src={AbstractPoster} alt='Abstract Poster' style={{ width: '75%' }} unoptimized/>
            </div>
        </div>
    </>
  )
}
