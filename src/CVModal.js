import React from 'react'
import Image from 'next/image'
// import static image
import BlankPhoto from '/public/speakers/blank-profile-picture-973460_1280.png'

function ModalSpeaker({ isOpen, onClose, speaker }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
      <div className="relative top-40 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
            {speaker.photo ? (
              <Image className='rounded-full w-32 h-32 mx-auto' src={speaker.photo} alt='speaker' width={32} height={32} unoptimized/>
            ) : (
              <Image className='rounded-full w-32 h-32 mx-auto' src={BlankPhoto} alt='speaker' width={32} height={32} unoptimized/>
            )}
          <h3 className="text-lg font-medium text-gray-900 mt-2">{speaker.name}</h3>
          <p className="text-sm text-gray-500">{speaker.position}</p>
          <div className="mt-1 px-7 py-3">
            {speaker.degree ? (
            <>
            <p className='text-sm text-center font-bold text-black'>Educational background</p>
            <ul className="list-disc text-start text-gray-700">
            {speaker.degree.map((degree, index) => (
                <li key={index}>{degree}</li>
            ))}
            </ul>
            </>    
            ):(
                <></>
            )}
            <hr class="w-48 h-1 mx-auto mt-3 bg-gray-200 border-0 rounded"></hr>
            <ul className="list-disc text-start mt-2">
              {speaker.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
          <div className="items-center px-4 py-3">
            <button className="px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSpeaker;