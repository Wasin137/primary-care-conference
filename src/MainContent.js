import React from 'react'
import Image from 'next/image'
import HotelImg from '/public/Hotel_image1.jpg'
import Link from 'next/link'
import SongkhlaLake from '/public/Songkhla_lake-800x530.webp'

export default function MainContent() {
  return (
    <>
        <div className='p-4 bg-white rounded-lg shadow-md'>
            <p className='text-black-1000 text-3xl xl:text-4xl 2xl:text-6xl mt-5'>&quot;Health Horizons: Bridging Global Health with Local Solutions in Primary Care&quot;</p>
            <p className='text-gray-800 text-2xl xl:text-3xl 2xl:text-4xl mt-2'>งานประชุมวิชาการประจำปี 2564 กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่</p>
            <p className='text-gray-800 text-base xl:text-lg mt-5'>งานประชุมวิชาการ กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่ จัดทุก 2 ปี โดยในปีนี้ มาในชื่อ &quot;Health Horizons: Bridging Global Health with Local Solutions in Primary Care&quot; ที่โรงแรม Laguna Grand Hotel and Spa Songkhla วันที่ 6 - 7 มิถุนายน 2564 ระยะเวลา 2 วัน</p>
            <div className='mt-5'>
                <p className='text-gray-800 text-base font-bold xl:text-lg 2xl:text-xl'>จองที่พัก</p>
                <p className='text-black-1000 text-base xl:text-lg 2xl:text-xl'>โรงแรมสงขลาลากูน่า Laguna Grand Hotel and Spa Songkhla</p>
                <p className='text-gray-400 text-base xl:text-lg 2xl:text-xl'><Link href='https://www.lagunagrandsongkhla.com/'>Website โรงแรม</Link></p>
                <Image src={HotelImg} alt='Hotel'/>
            </div>
        </div>
    </>
  )
}
