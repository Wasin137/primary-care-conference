import React from 'react'
import Image from 'next/image'
// import static image
import BlankPhoto from '/public/speakers/blank-profile-picture-973460_1280.png'

export default function Speaker({index, photo, name, position, description}) {
    return (
      <div className='flex flex-col h-full'> 
        <div className='p-4 bg-white rounded-lg shadow-md flex flex-col h-full'> 
          <p className='text-xl font-bold'>Speaker</p>
          <div className='flex flex-row mt-3 md:mt-5'>
            {photo ? (
              <Image className='rounded-full w-16 h-16' src={photo} alt='speaker' width={16} height={16} unoptimized/>
            ) : (
              <Image className='rounded-full w-16 h-16' src={BlankPhoto} alt='speaker' width={16} height={16} unoptimized/>
            )}
            <div className='flex flex-col mx-auto px-1'>
              <p className='text-base font-bold md:text-lg'>{name}</p>
              <p className='text-sm md:text-base mx-auto'>{position}</p>
            </div>
          </div>
          <hr class="w-48 h-1 mx-auto mt-3 bg-gray-200 border-0 rounded"></hr>
          <div className='flex-grow'>
            {description.map((list, listIndex) => (
              <li key={listIndex} className='text-sm md:text-base mt-1'>{list}</li>
            ))}
          </div>
        </div>
      </div>
    )
  }
