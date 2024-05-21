import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='bg-gray-100'>
        <div className='py-4 md:px-10 mt-20 m-4'>
            <div className='grid grid-cols-1 md:grid-cols-[auto,1fr]'>
                <div>
                    <div className='p-4 bg-white rounded-lg shadow-md'>
                        <p className='font-bold text-3xl mb-4'>เปิดรับลงทะเบียน</p>
                        <p className='text-black text-base font-bold'>ลงทะเบียนผ่าน Google form</p>
                        <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSc_UGXAOFJFHqT_2XyjHSuK9yXIuIqRrw2_Dq5uaT7kJt4Hhg/viewform?usp=sf_link'}><span className='text-gray-500 text-xl font-bold hover:underline'>Click Here</span></Link>
                        <p className='text-black text-base font-bold mt-4'>มีปัญหาในการลงทะเบียนกรุณาติดต่อ</p>
                        <p className='text-gray-700 text-base mt-1'>074-273100 ต่อ 5510</p>
                        <p className='text-gray-700 text-base italic'>กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่</p>
                    </div>
                </div>
                <div className='my-4 xl:my-0 xl:ms-2'>
                    <div className='p-4 bg-white rounded-lg shadow-md'>
                        <p className='text-black font-bold text-base xl:text-xl 2xl:text-xl mb-4'>อัตราค่าลงทะเบียน</p>
                        <p className='text-black text-base mb-2'>ค่าลงทะเบียน <span className='text-xl font-bold'>1,500</span> บาท</p>
                        <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSc_UGXAOFJFHqT_2XyjHSuK9yXIuIqRrw2_Dq5uaT7kJt4Hhg/viewform?usp=sf_link'}><span className='text-gray-500 text-xl font-bold hover:underline'>ลงทะเบียนผ่าน Google form Click Here</span></Link>
                        <br/>
                        <Link href={'https://hatyaihospital.go.th/primary-care-conference/docs/Project.pdf'}><span className='text-gray-400 text-xl font-bold hover:underline'>เอกสารโครงการประชุมและปฏิทิน</span></Link>
                        <p className='text-black font-bold text-base xl:text-xl 2xl:text-xl mt-4'>โรงแรมสงขลาลากูน่า Laguna Grand Hotel and Spa Songkhla</p>
                        <p className='text-gray-400 text-base xl:text-lg 2xl:text-3xl mt-2'>Location (Google Maps)</p>
                        <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full border-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.00557281763!2d100.5539031103155!3d7.125349615847764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d2d0fe55ae283%3A0x55a2cd31371eb734!2sLaguna%20Grand%20Hotel%20%26%20Spa%20Songkhla!5e0!3m2!1sen!2sth!4v1712935548059!5m2!1sen!2sth"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
