'use client'
import React from 'react'
import { useState } from 'react'
import Schedule from '@/src/Schedule'

const day1GrandHall = {
    date: "2024-06-06",
    room:'Laguna Queen A',
    schedule:[
        {
            time:'8.00-8.30',
            topic:'Registration',
            description:['ลงทะเบียนเข้างาน']
        },
        {
            time:'8.30-9.00',
            topic:'Opening Ceremony',
            description:['พิธีเปิด']
        },
        {
            time:'9.00-10.30',
            topic:'Innovative Approaches in Primary Care: Global Perspectives and Local Solutions',
            description:['นพ.อภิสรรค์ บุญประดับ',
                'พญ.สุพัตรา ศรีวณิชชากร',
                'พญ.จัสมี โนะ',
                'คุณชาคริต โภชะเรือง',
                'พญ.หทัยทิพย์ ธรรมวิริยะกุล']
        },
        {
            time:'10.30-11.00',
            topic:'Coffee break',
            description:['BERLIN']
        },
        {
            time:'11.00-12.00',
            topic:'Empowering Primary Care: The Bedrock of Resilient Health Systems',
            description:['พญ.อรวรรณ ตะเวทิพงศ์']
        },
        {
            time:'12.00-13.15',
            topic:'Lunch symposium',
            description:['AstraZeneca']
        }
    ]
}

const day1Room1 = {
    date: "2024-06-06",
    room:'Laguna Queen A',
    schedule:[ 
        {
            time:'13.15-14.45',
            topic:'การดำเนินงานคลินิกเบาหวานระยะสงบ “บทเรียนจาก จ.สุราษฏร์ธานี”',
            description:['นพ.เอกพล พิศาล', 'พญ.ชนัดดา สมคง', 'พว.ชาลิณี บุญช่วยรอด']
        },       
        {
            time:'14.45-15.00',
            topic:'Coffee break',
            description:[]
        },
        {
            time:'15.00-16.30',
            topic:'การขับเคลื่อนระบบการจัดการโรคเรื้อรังระดับอำเภอ: จากแนวคิดสู่การเปลี่ยนแปลงและการส่งเสริมป้องกันโรคเรื้อรังในระดับปฐมภูมิ NCD prevention service in primary care',
            description:['นพ.เอกพล พิศาล', 'พว.ชาลิณี บุญช่วยรอด', 'คุณหทัยชนก เดชะ']
        }
    ]
}

const day1Room2 = {
    date: "2024-06-06",
    room:'Azure',
    schedule:[
        {
            time:'13.15-14.45',
            topic:'Smooth Transitions: Enhancing Palliative Care Continuity from Hospital to Home and Community',
            description:['นพ.คณิน ล่องเซ่ง']
        },
        {
            time:'14.45-15.00',
            topic:'Coffee break',
            description:[]
        },
        {
            time:'15.00-16.30',
            topic:'Workshop: Syringe driver and Palliative devices',
            description:['พญ.นวลจันทร์ หวังศุภดิลก', 'นพ.คณิน ล่องเซ้ง', 'พว.ภาเอื้ออันน์ สิรินทรโสภณ', 'พว.สุดใจ เรืองสุข']
        }
    ]
}

const day1Room3 = {
    date: "2024-06-06",
    room:'CRIMSON',
    schedule:[
        {
            time:'13.15-14.45',
            topic:'Discussion: Parenting in Digital World',
            description:['พญ.ธัญลักษณ์ วันเลี่ยง', 'พญ.หทัยทิพย์ ธรรมวิริยะกุล']
        },
        {
            time:'14.45-15.00',
            topic:'Coffee break',
            description:[]
        },
        {
            time:'15.00-16.30',
            topic:'Discussion: Quality Improvement in Primary Care and Research competition',
            description:['ผศ.ดร.นพ.อภินันท์ อร่ามรัตน์', 'ผศ.นพ.กฤษณะ สุวรรณภูมิ', 'ดร.นพ.ศรวัส แสงแก้ว', 'พญ.จัสมี โนะ']
        }
    ]
}

const day2GrandHall = {
    date: "2024-06-07",
    room:'Laguna Queen A',
    schedule:[
        {
            time:'8.30-9.30',
            topic:'Kratom: Understanding the Facts and Implications',
            description:['ภก.อดิศักดิ์ เมฆตรง']
        },
        {
            time:'12.00-13.00',
            topic:'Lunch symposium',
            description:['PROSP PHARMA อุดม เมดิคอล อิควิปเม้นท์']
        },
        {
            time:'14.00-14.30',
            topic:'รับประทานอาหารว่าง',
            description:[]
        },
        {
            time:'14.30-15.30',
            topic:'Enhancing Care with Comprehensive Geriatric Assessment: A Multidisciplinary Approach',
            description:['ศ.นพ.วีรศักดิ์ เมืองไพศาล']
        },
        {
            time:'15.30-16.00',
            topic:'มอบรางวัล Oral Presentation และ พิธีปิด',
            description:[]
        }
    ]
}

const day2Room1 = {
    date: "2024-06-07",
    room:'Laguna Queen A',
    schedule:[
        {
            time:'9.45-10.45',
            topic:'Asthma Management in Primary Care: Guidelines and Best Practices',
            description:['รศ.นพ.ณรงค์วิทย์ นาขวัญ']
        },
        {
            time:'10.45-11.00',
            topic:'Coffee break',
            description:[]
        },
        {
            time:'11.00-12.00',
            topic:'Constipation Management in Primary Care: A Comprehensive Approach and Case-Based Strategies',
            description:['ผศ.พญ.กีรติ อครปฏิมา', 'นพ.ทรงเกียรติ กาญจนแก้ว']
        },
        {
            time:'12.00-13.00',
            topic:'Lunch symposium',
            description:[]
        },
        {
            time:'13.00-14.00',
            topic:'Addressing Geriatric Syndromes in Primary Care: Strategies for Comprehensive Management',
            description:['ศ.นพ.วีรศักดิ์ เมืองไพศาล']
        }
    ]
}

const day2Room2 = {
    date: "2024-06-07",
    room:'Azure',
    schedule:[
        {
            time:'9.45-10.45',
            topic:'Discussion: Digital Health Revolution: AI Integration in Primary Care for Global Challenges',
            description:['ผศ.ดร.กฤต จารุพานิช','นพ.วศิน คัมภีระ', 'นพ.ทวิรัศม์ จุ่งรุ่งเรือง']
        },
        {
            time:'10.45-11.00',
            topic:'Coffee break',
            description:[]
        },
        {
            time:'11.00-12.00',
            topic:'Discussion: From Cells to Communities : A Holistic Approach to Global Prison Health and Primary Care Solutions',
            description:['นพ.ไกรสร โตทับเที่ยง', 'นพ.โภคิน ศักรินทร์กุล']
        },
        {
            time:'12.00-13.00',
            topic:'Lunch symposium',
            description:[]
        },
        {
            time:'13.00-14.00',
            topic:'Discussion: The Hatyai Model: A Paradigm for Wellness Centers',
            description:['พญ.นิศจรา กุณาฑลต์', 'พว.อมรรัตน์ ลิ่มเฮง', 'คุณจุฑานันท์ พรหมอินทร์', 'คุณมณีวรรณ ทองอ่อน', 'คุณชญานภัส จิตตรัตน์']
        }
    ]
}

const day2Room3 = {
    date: "2024-06-07",
    room:'CRIMSON',
    schedule:[
        {
            time:'9.45-10.45',
            topic:'Discussion: Unveiling the Health Implacts of Global Warming: Evidence and Insights',
            description:['ผศ.ดร.นพ.ธรรมสินธ์ อิงวิยะ', 'พญ.หทัยทิพย์ ธรรมวิริยะกุล']
        },
        {
            time:'10.45-11.00',
            topic:'Coffee break',
            description:[]
        },
        {
            time:'11.00-12.00',
            topic:'Cancer Prevention Strategies: Empowering Health Through Awareness and Action',
            description:['ดร.พญ.ภูเงิน คงทอง']
        },
        {
            time:'12.00-13.00',
            topic:'Lunch symposium',
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
