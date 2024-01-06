import React from 'react'
import Image from 'next/image'
import SongkhlaLake from '/public/Songkhla_lake-800x530.webp'

export default function MainContent() {
  return (
    <>
        <div className='p-4 bg-white rounded-lg shadow-md'>
            <p className='text-black-1000 text-3xl xl:text-4xl 2xl:text-6xl mt-5'>"Quality of Life, Quality  of Care"</p>
            <p className='text-gray-800 text-2xl xl:text-3xl 2xl:text-4xl mt-2'>Hatyai Primary Care Conference 2024</p>
            <p className='text-gray-800 text-base xl:text-lg mt-5'>Fugiat dolor nostrud cillum commodo ut amet. Occaecat dolore pariatur esse aliquip velit nisi commodo et consectetur anim dolore nostrud officia minim. Qui magna culpa nisi elit consectetur irure. Ad voluptate nisi sunt amet id veniam. Esse Lorem eu cupidatat sit Lorem deserunt commodo. Cillum ad ut eiusmod pariatur.</p>
            <div className='mt-5'>
                <p className='text-gray-800 text-base font-bold xl:text-lg 2xl:text-xl'>แนะนำสถานที่ท่องเที่ยว</p>
                <p className='text-black-1000 text-base xl:text-lg 2xl:text-xl'>ทะเลสาบสงขลา</p>
                <Image src={SongkhlaLake} alt='Songkhla lake'/>
            </div>
        </div>
    </>
  )
}
