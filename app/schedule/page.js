'use client'
import React from 'react'
import { useState } from 'react'
import Schedule from '@/src/Schedule'
import Speaker from '@/src/Speaker'

const day1GrandHall = {
    room:'Grand Hall',
    schedule:[
        {
            time:'8.00',
            topic:'Registration',
            description:'ลงทะเบียนเข้างาน'
        },
        {
            time:'8.30',
            topic:'Opening Ceremony',
            description:'พิธีเปิดโดย ผู้อำนวยการโรงพยาบาลหาดใหญ่'
        },
        {
            time:'9.00',
            topic:'Welcome speech',
            description:'พญ.หทัยทิพย์ ธรรมวิริยะกุล'
        },
        {
            time:'11.00',
            topic:'Asthma: Primary Care Guideline',
            description:'ผศ.พิเศษ นพ.ณรงวิทย์ นาขวัญ'
        },
        {
            time:'12.00',
            topic:'Lunch Symposium: DM Remission',
            description:'Roche'
        }
    ]
}

const day1Room1 = {
    room:'ห้องที่ 1',
    schedule:[
        {
            time:'13.00',
            topic:'Workshop: Geriatric Syndrome',
            description:'พญ.พงศ์วิไล วิลัยพงศ์'
        },
        {
            time:'15.00',
            topic:'Workshop: Comprehensive Geriatric Assessment with MDT',
            description:'พญ.พงศ์วิไล วิลัยพงศ์'
        }
    ]
}

const day1Room2 = {
    room:'ห้องที่ 2',
    schedule:[
        {
            time:'13.00',
            topic:'Parenting in Digital World',
            description:'ดร.นพ.ศรวัส แสงแก้ว',
        },
        {
            time:'15.00',
            topic:'Workshop: DM Remission',
            description:'นพ.เอกพล'
        }
    ]
}

const day1Room3 = {
    room:'ห้องที่ 3',
    schedule:[
        {
            time:'13.00',
            topic:'Primary QI and Research Competition',
            description:'นำเสนอผลงานทางวิชาการ'
        }
    ]
}

const day2GrandHall = {
    room:'Grand Hall',
    schedule:[
        {
            time:'8.30',
            topic:'Kratom: What we need to know?',
            description:'ภก. อดิศักดิ์ เมฆตรง'
        },
        {
            time:'14.30',
            topic:'Smooth Transitioning Palliative care from hospital to Home and community.',
            description:'นพ.คณิน ล่องเซ้ง'
        },
        {
            time:'15.30',
            topic:'Closing Ceremony',
            description:'พิธีมอบรางวัล Oral/Poster presentation'
        }
    ]
}

const day2Room1 = {
    room:'Room 1',
    schedule:[
        {
            time:'9.45',
            topic:'Lesson Learn in Adolescent Psychiatric disorders',
            description:'ดร.นพ.ศรวัส แสงแก้ว'
        },
        {
            time:'11.00',
            topic:'Comprehensive approach and case management of constipation in primary care practices',
            description:'นพ.ทรงเกียรติ กาญจนแก้ว'
        },
        {
            time:'13.00',
            topic:'Workshop: Syringe driver and Palliative devices',
            description:'พญ.นวลจันทร์'
        }
    ]
}

const day2Room2 = {
    room:'Room 2',
    schedule:[
        {
            time:'9.45',
            topic:'Nutritional management in Long term care patient',
            description:'นพ.ณัฐกานต์ ดำนิล'
        },
        {
            time:'11.00',
            topic:'Home Ward',
            description:'พว.อมรรัตน์ ลิ่มเฮง'
        },
        {
            time:'13.00',
            topic:'Discussion: Wellness center Hatyai model',
            description:'พว.อมรรัตน์ ลิ่มเฮง'
        }
    ]
}

const day2Room3 = {
    room:'Room 3',
    schedule:[
        {
            time:'9.45',
            topic:'Global boiling and effect on Health',
            description:'พญ.หทัยทิพย์ ธรรมวิริยะกุล'
        },
        {
            time:'11.00',
            topic:'Cancer Prevention',
            description:'พญ.นิศจรา'
        },
        {
            time:'13.00',
            topic:'Essential Adult Vaccines',
            description:'พญ.นิศจรา'
        }
    ]
}

export default function Page() {
    const [openScheduleDay1, setOpenScheduleDay1] = useState(true)
    const [openScheduleDay2, setOpenScheduleDay2] = useState(false)

    const handleDay1Click = () => {
        setOpenScheduleDay1(true)
        setOpenScheduleDay2(false)
    }

    const handleDay2Click = () => {
        setOpenScheduleDay1(false)
        setOpenScheduleDay2(true)
    }


  return (
    <>
        <div className='bg-gray-100'>
        <div className='p-4 mt-20 m-4 flex flex-row justify-center'>
            <button className='rounded-lg p-4 mx-4 bg-gray-800 shadow-md' onClick={handleDay1Click}>
                <p className='text-white'>21 March 2024</p>
            </button>
            <button className='rounded-lg p-4 mx-4 bg-gray-800 shadow-md' onClick={handleDay2Click}>
                <p className='text-white'>22 March 2024</p>
            </button>
        </div>
            { openScheduleDay1 ? (
                <>
                <div className='grid grid-cols-1 xl:grid-cols-12 gap-4'>
                    <div className='xl:col-span-8 p-4'>
                        <Schedule roomSchedule={day1GrandHall}/>
                    </div>
                    <div className='hidden xl:block xl:col-span-4 p-4 '>
                        <Speaker />
                    </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 p-4'>
                    <Schedule roomSchedule={day1Room1} />
                    <Schedule roomSchedule={day1Room2} />
                    <Schedule roomSchedule={day1Room3} />
                </div>
                </>
            ):(
                <>
                <div className='grid grid-cols-1 xl:grid-cols-12 gap-4'>
                    <div className='xl:col-span-8 p-4'>
                        <Schedule roomSchedule={day2GrandHall}/>
                    </div>
                    <div className='hidden xl:block xl:col-span-4 p-4 '>
                        <Speaker />
                    </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 p-4'>
                    <Schedule roomSchedule={day2Room1} />
                    <Schedule roomSchedule={day2Room2} />
                    <Schedule roomSchedule={day2Room3} />
                </div>
                </>
            )}
        </div>
    </>
  )
}
