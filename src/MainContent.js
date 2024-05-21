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
              <br/>
              <Link href={'https://hatyaihospital.go.th/primary-care-conference/docs/Project.pdf'} className='text-gray-400 text-lg font-bold xl:text-xl 2xl:text-2xl hover:underline'>เอกสารโครงการประชุมและปฏิทิน</Link>
            </div>
            <p className='text-gray-800 text-xl font-bold xl:text-2xl 2xl:text-3xl mt-5'>Calling for Abstract</p>
            <div className='mt-5 flex justify-center'>
              <Image className='border border-black' src={AbstractPoster} alt='Abstract Poster' style={{ width: '75%' }} unoptimized/>
            </div>
            <div className='mt-5'>
              <Link href={'/abstracts'} className='text-gray-500 text-lg font-bold xl:text-xl 2xl:text-2xl hover:underline'>ร่วมส่งผลงาน</Link>
            </div>
        </div>
    </>
  )
}
