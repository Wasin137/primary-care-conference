import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-100'>
        <div className='py-4 md:px-10 mt-20 m-4'>
            <div className='grid grid-cols-1 md:grid-cols-[auto,1fr]'>
                <div>
                    <div className='p-4 bg-white rounded-lg shadow-md'>
                        <p className='font-bold text-3xl mb-4'>เปิดรับลงทะเบียน</p>
                        <p className='text-black text-base font-bold'>ลงทะเบียนผ่าน Google form</p>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSc_UGXAOFJFHqT_2XyjHSuK9yXIuIqRrw2_Dq5uaT7kJt4Hhg/viewform?usp=sf_link'><span className='text-gray-500 text-xl font-bold hover:underline'>Click Here</span></a>
                        <p className='text-black text-base font-bold mt-4'>มีปัญหาในการลงทะเบียนกรุณาติดต่อ</p>
                        <p className='text-gray-700 text-base mt-1'>074-273100 ต่อ 5510</p>
                        <p className='text-gray-700 text-base italic'>กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่</p>
                    </div>
                </div>
                <div className='my-4 xl:my-0 xl:ms-2'>
                    <div className='p-4 bg-white rounded-lg shadow-md'>
                        <p className='font-bold text-3xl mb-4'>อัตราค่าลงทะเบียน</p>
                        <p className='text-black-text-base font-bold'>ลงทะเบียนและชำระเงินก่อนวันที่ 14 พฤษภาคม 2567 (Early Bird)</p>
                        <p className='text-gray-500 text-base mb-4'>ค่าลงทะเบียน <span className='text-xl font-bold'>2,000</span> บาท</p>
                        <p className='text-black-text-base font-bold'>ลงทะเบียนและชำระเงินหลังวันที่ 14 พฤษภาคม 2567</p>
                        <p className='text-gray-500 text-base'>ค่าลงทะเบียน <span className='text-xl font-bold'>2,500</span> บาท</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
