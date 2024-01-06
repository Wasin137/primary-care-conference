import React from 'react'

export default function Speaker() {
  return (
    <>
        <div className='p-4 bg-white rounded-lg shadow-md'>
            <p className='text-xl font-bold'>Speaker</p>
            <div className='flex flex-row mt-3 md:mt-5'>
                <img className='rounded-full w-16 h-16' src="/pexels-christina-morillo-1181686.jpg" alt='speaker'/>
                <div className='flex flex-col mx-auto'>
                    <p className='text-base font-bold md:text-lg'>Prof.John Doe</p>
                    <p className='text-base md:text-lg mx-auto'>University of ABC, Thailand</p>
                </div>
            </div>
            <div className='mt-3 md:mt-5'>
                <p className='text-base'>Sit consectetur nostrud deserunt elit est commodo aliquip dolore culpa labore. Laborum magna tempor enim consectetur id voluptate esse dolor consequat. Nulla ipsum duis do est in anim ad laborum nulla. Cupidatat tempor eiusmod cupidatat magna dolore sint elit eiusmod.</p>
            </div>
        </div>
    </>
  )
}
