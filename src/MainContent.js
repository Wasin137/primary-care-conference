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
            <div className='mt-10 md:mx-10 border shadow-md border-gray-800 rounded-md px-4 py-6'>
              <p className='text-gray-600 font-bold italic text-2xl xl:text-3xl 2xl:text-4xl text-center'>&quot;Thank you for being with us at 'Health Horizons.' We hope you found it as inspiring and informative as we did!&quot;</p>
              <p className='text-gray-400 font-bold text-xl text-end mt-3'>Primary Care Conference 2024</p>
              <p className='text-gray-400 italic text-xl text-end'>- Department of Social Medicine, Hatyai Hospital -</p>
            </div>
            <div className='mt-10'>
              <p className='text-gray-800 font-bold text-2xl xl:text-3xl 2xl:text-4xl text-center'>ขอบคุณผู้ให้ความสนใจเข้าร่วมงานประชุมประจำปีพ.ศ. 2567 ทุกท่าน</p>
              <div className='flex justify-center m-4 gap-4'>
                <Link href='https://www.youtube.com/embed/ZdQDNT-y5rk' className='py-2 px-8 rounded-md text-xl md:text-2xl text-white bg-gray-600 text-center hover:bg-gray-800'>วีดีโอประมวลภาพงานประชุม</Link>
                <Link href='https://drive.google.com/drive/folders/1bw1VhRL_pSmAyKgFxTaiddSGpwWUzCyD' className='py-2 px-8 rounded-md text-xl md:text-2xl text-white bg-gray-600 text-center hover:bg-gray-800'>ภาพถ่ายงานประชุม (Google Drive)</Link>
              </div>
              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }} className='flex justify-center'>
                <iframe
                  src="https://www.youtube.com/embed/ZdQDNT-y5rk"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  className='border rounded-xl border-black'
                ></iframe>
              </div>
            </div>
        </div>
    </>
  )
}
