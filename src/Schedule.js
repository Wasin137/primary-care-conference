import React from 'react'

export default function Schedule({ roomSchedule }) {

  return (
    <>
        <div className='p-4 bg-white rounded-lg shadow-md'>
            <p className='text-center text-4xl font-bold text-gray-900'>{roomSchedule.room}</p>
            <ol className="relative border-s border-gray-200">                 
              {roomSchedule.schedule.map((item, index) => (
              <li key={index} className="ml-4 mb-4">
                  <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500">{item.time}</time>
                  <h3 className="text-lg font-semibold text-gray-900">{item.topic}</h3>
                  <p className="text-base font-normal text-gray-500">{item.description}</p>
              </li>
              ))}
            </ol>
        </div>
    </>
  )
}
