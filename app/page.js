'use client'
import React, { useState, useEffect } from 'react'
import Carousel from "@/src/Carousel"
import CountdownTimer from "@/src/Timer"
import ConferenceDate from "@/src/ConferenceDate"
import MainContent from "@/src/MainContent"
import Speaker from "@/src/Speaker"
import Contact from "@/src/Contact"
import Sponsor from "@/src/Sponsor"
// Import Speaker photos
import ApisanPhoto from '/public/speakers/apisan.png'
import SupatraPhoto from '/public/speakers/supatra.png'
import CharchristPhoto from '/public/speakers/charchrist.jpg'
import VeerasakPhoto from '/public/speakers/veerasak.png'
import OrawanPhoto from '/public/speakers/orawan.jpg'
import AekaponPhoto from '/public/speakers/aekapon.jpg'
import KraisornPhoto from '/public/speakers/kraisorn.png'
import PokinPhoto from '/public/speakers/pokin.jpg'
import ApinanPhoto from '/public/speakers/apinan.png'


export default function Home() {
  const speakers = [
    {
      photo: ApisanPhoto,
      name: 'นพ.อภิสรรค์ บุญประดับ',
      position: 'ผู้อำนวยการกองสนับสนุนระบบสุขภาพปฐมภูมิ กระทรวงสาธารณสุข',
      description: ['Innovative Approaches in Primary Care: Global Perspectives and Local Solutions']
    },
    {
      photo: SupatraPhoto,
      name: 'พญ.สุพัตรา ศรีวณิชชากร',
      position: 'ประธานราชวิทยาลัยแพทย์เวชศาสตร์ครอบครัวประเทศไทย',
      description: ['Innovative Approaches in Primary Care: Global Perspectives and Local Solutions']
    },
    {
      photo: CharchristPhoto,
      name:'ชาคริต โภชะเรือง',
      position:'เลขานุการคณะกรรมการเขตสุขภาพเพื่อประชาชน(กขป.) เขต 12 และผู้จัดการมูลนิธิชุมชนสงขลา',
      description:['Innovative Approaches in Primary Care: Global Perspectives and Local Solutions']
    },
    {
      photo:VeerasakPhoto,
      name:'ศ.นพ.วีรศักดิ์ เมืองไพศาล',
      position:'หัวหน้าสาขาวิชาเวชศาสตร์ผู้สูงอายุ คณะแพทยศาสตร์ ศิริราชพยาบาล มหาวิทยาลัยมหิดล',
      description:['Addressing Geriatric Syndromes in Primary Care: Strategies for Comprehensive Management', 'Enhancing Care with Comprehensive Geriatric Assessment: A Multidisciplinary Approach']
    },
    {
      photo: ApinanPhoto,
      name:'ผศ.ดร.นพ.อภินันท์ อร่ามรัตน์',
      position:'ประธานมูลนิธิศูนย์วิชาการสารเสพติดและหัวหน้าโครงการศูนย์วิชาการเวชศาสตร์ครอบครัว',
      description: ['QI in Primary Care and Research competition']
    },
    {
      photo: OrawanPhoto,
      name:'พญ.อรวรรณ ตะเวทิพงศ์',
      position:'ผู้อำนวยการ รพ.เขาย้อย, รองผู้อำนวยการกองปฐมภูมิ กระทรวงสาธารณสุข',
      description:['Empowering Primary Care: The Bedrock of Resilient Health Systems']
    },
    {
      photo:AekaponPhoto,
      name:'นพ.เอกพล พิศาล',
      position:'ผู้อำนวยการ รพ.บ้านตาขุน',
      description:['Discussion: การดำเนินงานคลินิกเบาหวานระยะสงบ “บทเรียนจากสุราษฏร์ธานี”']
    },
    {
      photo: KraisornPhoto,
      name:'นพ.ไกรสร โตทับเที่ยง',
      position:'ผู้อำนวยการกองวัณโรค กรมควบคุมโรค',
      description:['Discussion: From Cells to Communities : A Holistic Approach to Global Prison Health and Primary Care Solutions']
    },
    {
      photo:PokinPhoto,
      name:'นพ.โภคิน ศักรินทร์กุล',
      position:'นายแพทย์เชี่ยวชาญ รพ.ลำพูน',
      description:['Discussion: From Cells to Communities : A Holistic Approach to Global Prison Health and Primary Care Solutions']
   },
  ]

  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeakerIndex(currentIndex => (currentIndex + 1) % speakers.length);
    }, 5000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, [speakers.length]);

  return (
    <>
      <div className="relative">
        <Carousel />
        <div className="hidden xl:block absolute inset-x-0 top-[12%] px-20">
          <CountdownTimer targetDate="2024-06-06" />
        </div>
        <div className="absolute left-5 right-5 top-20 sm:top-[10%] sm:left-12 sm:right-12 md:top-[20%] md:left-24 md:right-24 xl:left-36 xl:right-36 xl:top-[30%] xl:px-20">
          <ConferenceDate />
        </div>
        <div className="absolute inset-x-0 top-[50%] sm:top-[25%] sm:left-4 sm:right-4 md:top-[45%] xl:top-[50%] xl:left-20 xl:right-20 px-4 py-6 z-20">
          <div className="flex flex-col xl:flex-row w-full">
            <div className="w-full xl:w-8/12 2xl:w-9/12 p-4">
              <MainContent />
            </div>
            <div className="w-full xl:w-4/12 2xl:w-3/12 p-4">
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <Speaker {...speakers[currentSpeakerIndex]} />
                <Sponsor />
              </div>
            </div>
          </div>
          <div className="p-4">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
