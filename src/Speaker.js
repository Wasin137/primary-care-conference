import React from 'react'

export default function Speaker({index, photo, name, position, description}) {
    return (
      <div className='flex flex-col h-full'> {/* Add flex and flex-col */}
        <div className='p-4 bg-white rounded-lg shadow-md flex flex-col h-full'> {/* Ensure full height */}
          <p className='text-xl font-bold'>Speaker</p>
          <div className='flex flex-row mt-3 md:mt-5'>
            {photo ? (
              <img className='rounded-full w-16 h-16' src={photo} alt='speaker' />
            ) : (
              <img className='rounded-full w-16 h-16' src='speakers/blank-profile-picture-973460_1280.png' alt='speaker' />
            )}
            <div className='flex flex-col mx-auto px-1'>
              <p className='text-base font-bold md:text-lg'>{name}</p>
              <p className='text-sm md:text-base mx-auto'>{position}</p>
            </div>
          </div>
          <hr class="w-48 h-1 mx-auto my-2 bg-gray-200 border-0 rounded"></hr>
          <div className='flex-grow'> {/* This pushes everything else down */}
            {description.map((list, listIndex) => (
              <li key={listIndex} className='text-sm md:text-base mt-1'>{list}</li>
            ))}
          </div>
        </div>
      </div>
    )
  }
