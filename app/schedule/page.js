'use client'
import React from 'react'
import { useState } from 'react'
import Schedule from '@/src/Schedule'
import PaperPresent from '@/src/PaperPresent'

const day1GrandHall = {
    room:'Grand Hall',
    schedule:[
        {
            time:'8.00',
            topic:'Registration',
            description:['ลงทะเบียนเข้างาน']
        },
        {
            time:'8.30',
            topic:'Opening Ceremony',
            description:['พิธีเปิดโดย ผู้อำนวยการโรงพยาบาลหาดใหญ่']
        },
        {
            time:'9.00',
            topic:'Innovative Approaches in Primary Care: Global Persepctives and Local Solutions',
            description:['นพ.อภิสรรค์ บุญประดับ ผู้อำนวยการกองปฐมภูมิ',
                'พญ.สุพัตรา ศรีวณิชชากร ประธานราวชวิทยาลัยแพทย์เวชศาสตร์ครอบครัวประเทศไทย',
                'พญ.จัสมี โนะ แพทย์เวชศาสตร์ครอบครัว โรงพยาบาลระแงะ จ.ปัตตานี',
                'คุณชาคริต โภชะเรือง มูลนิธิชุมชนสงขลา และประธานสมัชชาสุขภาพจังหวัดสงขลา',
                'พญ.หทัยทิพย์ ธรรมวิริยะกุล :ผู้ดำเนินรายการ']
        },
        {
            time:'10.30',
            topic:'รับประทานอาหารว่าง',
            description:[]
        },
        {
            time:'11.00',
            topic:'Empowering Primary Care: The Bedrock of Resilient Health Systems',
            description:['พญ.อรวรรณ ตะเวทิพงศ์ ผู้อำนวยการ รพ.เขาย้อย จ.เพชรบุรี รองผู้อำนวยการกองปฐมภูมิ กระทรวงสาธารณสุข']
        },
        {
            time:'12.00',
            topic:'รับประทานอาหารกลางวัน',
            description:[]
        }
    ]
}

const day1Room1 = {
    room:'ห้องที่ 1',
    schedule:[
        {
            time:'13.00',
            topic:'Smooth Transitions: Enhancing Palliative Care Continuity from Hospital to Home and Community',
            description:['นพ.คณิน ล่องเซ่ง']
        },
        {
            time:'14.30',
            topic:'รับประทานอาหารว่าง',
            description:[]
        },
        {
            time:'15.00',
            topic:'Workshop: Syringe driver and Palliative devices',
            description:['พญ.นวลจันทร์ หวังศุภดิลก', 'นพ.คณิน ล่องเซ้ง', 'พว.ภาเอื้ออันน์ สิรินทรโสภณ', 'พว.สุดใจ เรืองสุข']
        }
    ]
}

const day1Room2 = {
    room:'ห้องที่ 2',
    schedule:[
        {
            time:'13.00',
            topic:'Workshop: DM remission I',
            description:['นพ.เอกพล พิศาล ผู้อำนวยการ รพ.บ้านตาขุน']
        },
        {
            time:'14.30',
            topic:'รับประทานอาหารว่าง',
            description:[]
        },
        {
            time:'15.00',
            topic:'Workshop: DM Remission II',
            description:['นพ.เอกพล พิศาล ผู้อำนวยการ รพ.บ้านตาขุน']
        }
    ]
}

const day1Room3 = {
    room:'ห้องที่ 3',
    schedule:[
        {
            time:'13.00',
            topic:'QI in Primary Care and Research competition I',
            description:['รศ.นพ.กฤษณะ สุวรรณภูมิ', 'ดร.นพ.ศรวัส แสงแก้ว', 'พญ.จัสมี โนะ']
        },
        {
            time:'14.30',
            topic:'รับประทานอาหารว่าง',
            description:[]
        },
        {
            time:'13.00',
            topic:'QI in Primary Care and Research competition II',
            description:['รศ.นพ.กฤษณะ สุวรรณภูมิ', 'ดร.นพ.ศรวัส แสงแก้ว', 'พญ.จัสมี โนะ']
        }
    ]
}

const day2GrandHall = {
    room:'Grand Hall',
    schedule:[
        {
            time:'8.30-9.30',
            topic:'Kratom: Understanding the Facts and Implications',
            description:['ภก.อดิศักดิ์ เมฆตรง']
        },
        {
            time:'14.30-15.30',
            topic:'Enhancing Care with Comprehensive Geriatric Assessment: A Multidisciplinary Approach',
            description:['ศ.นพ.วีรศักดิ์ เมืองไพศาล', 'พญ.นิศาชล ทองคำ']
        },
        {
            time:'15.30-16.00',
            topic:'มอบรางวัล Oral Presentation และ พิธีปิด',
            description:[]
        }
    ]
}

const day2Room1 = {
    room:'Room 1',
    schedule:[
        {
            time:'9.45-10.45',
            topic:'Asthma Management in Primary Care: Guidelines and Best Practices',
            description:['นพ.ณรงค์วิทย์ นาขวัญ']
        },
        {
            time:'10.45-11.00',
            topic:'รับประทานอาหารว่าง',
            description:[]
        },
        {
            time:'11.00-12.00',
            topic:'Constipation Management in Primary Care: A Comprehensive Approach and Case-Based Strategies',
            description:['พญ.กีรติ อครปฏิมา', 'นพ.ทรงเกียรติ กาญจนแก้ว']
        },
        {
            time:'12.00-13.00',
            topic:'รับประทานอาหารกลางวัน',
            description:[]
        },
        {
            time:'13.00-14.00',
            topic:'Addressing Geriatric Syndromes in Primary Care: Strategies for Comprehensive Management',
            description:['ศ.นพ.วีรศักดิ์ เมืองไพศาล', 'พญ.นิศาชล ทองคำ']
        }
    ]
}

const day2Room2 = {
    room:'Room 2',
    schedule:[
        {
            time:'9.45-10.45',
            topic:'Digital Health Revolution: AI Integration in Primary Care for Global Challenges',
            description:['รศ.นพ.กฤษณะ สุวรรณภูมิ', 'นพ.วศิน คัมภีระ']
        },
        {
            time:'10.45-11.00',
            topic:'รับประทานอาหารว่าง',
            description:[]
        },
        {
            time:'11.00-12.00',
            topic:'Parenting in Digital World',
            description:['พญ.ธัญลักษณ์ วันเลี่ยง', 'พญ.หทัยทิพย์ ธรรมวิริยะกุล']
        },
        {
            time:'12.00-13.00',
            topic:'รับประทานอาหารกลางวัน',
            description:[]
        },
        {
            time:'13.00-14.00',
            topic:'The Hatyai Model: A Paradigm for Wellness Centers',
            description:['พญ.นิศจรา กุณาฑลต์', 'พว.อมรรัตน์ ลิ่มเฮง', 'คุณจุฑานันท์ พรหมอินทร์']
        }
    ]
}

const day2Room3 = {
    room:'Room 3',
    schedule:[
        {
            time:'9.45-10.45',
            topic:'Unveiling the Health Implacts of Global Warming: Evidence and Insights',
            description:['ผศ.ดร.นพ.ธรรมสินธ์ อิงวิยะ', 'พญ.หทัยทิพย์ ธรรมวิริยะกุล']
        },
        {
            time:'10.45-11.00',
            topic:'รับประทานอาหารว่าง',
            description:[]
        },
        {
            time:'11.00-12.00',
            topic:'Cancer Prevention Strategies: Empowering Health Through Awareness and Action',
            description:['ดร.พญ.ภูเงิน คงทอง']
        },
        {
            time:'12.00-13.00',
            topic:'รับประทานอาหารกลางวัน',
            description:[]
        },
        {
            time:'13.00-14.00',
            topic:'Essential Adult Vaccines: Protecting Health Across the Lifespan',
            description:['นพ.นพพร ส่องอำไพ', 'ดร.นพ.ศรวัส แสงแก้ว']
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
                <p className='text-white'>6 June 2024</p>
            </button>
            <button className='rounded-lg p-4 mx-4 bg-gray-800 shadow-md' onClick={handleDay2Click}>
                <p className='text-white'>7 June 2024</p>
            </button>
        </div>
            { openScheduleDay1 ? (
                <>
                <div className='grid grid-cols-1 xl:grid-cols-12 gap-4'>
                    <div className='xl:col-span-8 p-4'>
                        <Schedule roomSchedule={day1GrandHall}/>
                    </div>
                    <div className='hidden xl:block xl:col-span-4 p-4'>
                        <PaperPresent />
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
                    <div className='hidden xl:block xl:col-span-4 p-4'>
                        <PaperPresent />
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
