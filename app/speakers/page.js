'use client'
import React from 'react'
import Speaker from '@/src/Speaker'
import ModalSpeaker from '@/src/CVModal'
import { useState } from 'react'

//Import Speaker's photo individually
import ApisanPhoto from '/public/speakers/apisan.png'
import SupatraPhoto from '/public/speakers/supatra.png'
import VeerasakPhoto from '/public/speakers/veerasak.png'
import KrisanaPhoto from '/public/speakers/krisana.png'
import OrawanPhoto from '/public/speakers/orawan.jpg'
import KraisornPhoto from '/public/speakers/kraisorn.png'
import ThammasinPhoto from '/public/speakers/thammasin.png'
import KritPhoto from '/public/speakers/krit.png'
import NarongwitPhoto from '/public/speakers/narongwit.png'
import KiratiPhoto from '/public/speakers/kirati.jpg'
import PhungeunPhoto from '/public/speakers/phungeun.png'
import NoppornPhoto from '/public/speakers/nopporn.jpg'
import HathaitipPhoto from '/public/speakers/hathaitip.png'
import KaninPhoto from '/public/speakers/kanin.png'
import WasinPhoto from '/public/speakers/wasin.png'
import NisachonPhoto from '/public/speakers/nisachon.jpg'
import JustmePhoto from '/public/speakers/justme.jpg'
import CharchristPhoto from '/public/speakers/charchrist.jpg'
import AekaponPhoto from '/public/speakers/aekapon.jpg'
import PokinPhoto from '/public/speakers/pokin.jpg'
import ThawiratPhoto from '/public/speakers/thawirat.png'
import NijaraPhoto from '/public/speakers/nijara.jpg'

const speakers = [
    {
        photo: ApisanPhoto,
        name:'นพ.อภิสรรค์ บุญประดับ',
        position:'ผู้อำนวยการกองสนับสนุนระบบสุขภาพปฐมภูมิ กระทรวงสาธารณสุข',
        description:['Innovative Approaches in Primary Care: Global Perspectives and Local Solutions']
    },
    {
        photo: SupatraPhoto,
        name:'พญ.สุพัตรา ศรีวณิชชากร',
        position:'ประธานราชวิทยาลัยแพทย์เวชศาสตร์ครอบครัวประเทศไทย',
        description:['Innovative Approaches in Primary Care: Global Perspectives and Local Solutions']
    },
    {
        photo: JustmePhoto,
        name:'พญ.จัสมี โนะ',
        position:'นายแพทย์ชำนาญการพิเศษ รพ.ระแงะ',
        description:['Innovative Approaches in Primary Care: Global Perspectives and Local Solutions', 'QI in Primary Care and Research']
    },
    {
        photo: CharchristPhoto,
        name:'ชาคริต โภชะเรือง',
        position:'ผู้ประสานงานเครือข่ายแผนสุขภาพจังหวัดสงขลา, ผู้จัดการมูลนิธิชุมชน สงขลา',
        description:['Innovative Approaches in Primary Care: Global Perspectives and Local Solutions'],
        degree:['M.Sc. Health System Management']
    },
    {
        photo:VeerasakPhoto,
        name:'ศ.นพ.วีรศักดิ์ เมืองไพศาล',
        position:'อาจารย์คณะแพทยศาสตร์ศิริราชพยาบาล',
        description:['Addressing Geriatric Syndromes in Primary Care: Strategies for Comprehensive Management', 'Enhancing Care with Comprehensive Geriatric Assessment: A Multidisciplinary Approach']
    },
    {
        photo: KrisanaPhoto,
        name:'รศ.นพ.กฤษณะ สุวรรณภูมิ',
        position:'อาจารย์คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
        description:['QI in Primary Care and Research competition']
    },
    {
        photo: OrawanPhoto,
        name:'พญ.อรวรรณ ตะเวทิพงศ์',
        position:'ผู้อำนวยการ รพ.เขาย้อย',
        description:['Empowering Primary Care: The Bedrock of Resilient Health Systems']
    },
    {
        photo:AekaponPhoto,
        name:'นพ.เอกพล พิศาล',
        position:'ผู้อำนวยการ รพ.บ้านตาขุน',
        description:['Discussion: การดำเนินงานคลินิกเบาหวานระยะสงบ “บทเรียนจากสุราษฏร์ธานี”']
    },
    {
        photo:'',
        name:'พญ.ชนัดดา สมคง',
        position:'นายแพทย์ชำนาญการ รพ.กาญจนดิษฐ์',
        description:['Discussion: การดำเนินงานคลินิกเบาหวานระยะสงบ “บทเรียนจากสุราษฏร์ธานี”']
    },
    {
        photo:'',
        name:'พว.ชาลิณี บุญช่วยรอด',
        position:'พยาบาลวิชาชีพ รพ.บ้านตาขุน',
        description:['การขับเคลื่อนระบบการจัดการโรคเรื้อรังระดับอำเภอ: จากแนวคิดสู่การเปลี่ยนแปลงและการส่งเสริมป้องกันโรคเรื้อรังในระดับปฐมภูมิ NCD preventionservice in primary care']
    },
    {
        photo:'',
        name:'คุณหทัยชนก เดชะ',
        position:'ผู้อำนวยการ รพ.สต.เขาพัง',
        description:['การขับเคลื่อนระบบการจัดการโรคเรื้อรังระดับอำเภอ: จากแนวคิดสู่การเปลี่ยนแปลงและการส่งเสริมป้องกันโรคเรื้อรังในระดับปฐมภูมิ NCD preventionservice in primary care']
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
    {
        photo: ThammasinPhoto,
        name:'ผศ.ดร.นพ.ธรรมสินธ์ อิงวิยะ',
        position:'ผู้ช่วยคณบดีฝ่ายวิเคราะห์ข้อมูล และนวัตกรรมดิจิตอล คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
        description:['Unveiling the Health Impacts of Global Warming: Evidence and Insights']
    },
    {
        photo: KritPhoto,
        name:'ดร.กฤต จารุพานิช',
        position:'ชีวเวชศาสตร์และวิศวกรรมชีวการแพทย์ คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
        description:['Digital Health Revolution: AI Integration in Primary Care for Global Challenges'],
        degree:["B.S. in Physics(1's Class honor)", 'M.S. in Material Science and Engineering', 'M.S. in Biomedical Engineering', 'Ph.D. in Biomedical Engineering']
    },
    {
        photo: ThawiratPhoto,
        name:'นพ.ทวิรัศม์ จุ่งรุ่งเรือง',
        position:'ชีวเวชศาสตร์และวิศวกรรมชีวการแพทย์ คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
        description:['Digital Health Revolution: AI Integration in Primary Care for Global Challenges'],
        degree:['B.S. in Medical Doctor']
    },
    {
        photo: NarongwitPhoto,
        name:'รศ.นพ.ณรงค์วิทย์ นาขวัญ',
        position:'นายแพทย์ชำนาญการพิเศษ กลุ่มงานอายุรกรรม โรงพยาบาลหาดใหญ่',
        description:['Asthma Management in Primary Care: Guidelines and Best Practices']
    },
    {
        photo: KiratiPhoto,
        name:'ผศ.พญ.กีรติ อัครปฏิมา',
        position:'นายแพทย์ชำนาญการ กลุ่มงานอายุรกรรม โรงพยาบาลหาดใหญ่',
        description:['Constipation Management in Primary Care: A Comprehensive Approach and Case-Based Strategies']
    },
    {
        photo:'',
        name:'พญ.ธัญลักษณ์ วั่นเลี่ยง',
        position:'หัวหน้ากลุ่มงานจิตเวชและยาเสพติด โรงพยาบาลหาดใหญ่',
        description:['Parenting in Digital World']
    },
    {
        photo: PhungeunPhoto,
        name:'ดร.พญ.ภูเงิน คงทอง',
        position:'ผู้อำนวยการศูนย์มะเร็ง รพ.หาดใหญ่-นาหม่อม',
        description:['Cancer Prevention Strategies: Empowering Health Through Awareness and Action']
    },
    {
        photo: NoppornPhoto,
        name:'นพ.นพพร ส่งอำไพ',
        position:'นายแพทย์ชำนาญการ กลุ่มงานอายุรกรรม รพ.หาดใหญ่',
        description:['Essential Adult Vaccines: Protecting Health Across the Lifespan']
    },
    {
        photo: HathaitipPhoto,
        name:'พญ.หทัยทิพย์ ธรรมวิริยะกุล',
        position:'นายแพทย์ชำนาญการพิเศษ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['Innovative Approaches in Primary Care: Global Perspectives and Local Solutions', 'Unveiling the Health Impacts of Global Warming: Evidence and Insights', 'Parenting in Digital World']
    },
    {
        photo:'',
        name:'ดร.นพ.ศรวัส แสงแก้ว',
        position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['QI in Primary Care and Research competition', 'Essential Adult Vaccines: Protecting Health Across the Lifespan']
    },
    {
        photo: KaninPhoto,
        name:'นพ.คณิน ล่องเซ่ง',
        position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['Smooth Transitions: Enhancing Palliative Care Continuity from Hospital to Home and Community', 'Workshop: Syringe driver and Palliative devices']
    },
    {
        photo:'',
        name:'พญ.นวลจันทร์ หวังศุภดิลก',
        position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['Workshop: Syringe driver and Palliative devices']
    },
    {
        photo: WasinPhoto,
        name:'นพ.วศิน คัมภีระ',
        position:'นายแพทย์ชำนาญการพิเศษ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['Digital Health Revolution: AI Integration in Primary Care for Global Challenges'],
        degree:['Thai board of Family Medicine', 'B.S. in Medical Doctor']
    },
    {
        photo:'',
        name:'นพ.ทรงเกียรติ กาญจนแก้ว',
        position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['Constipation Management in Primary Care: A Comprehensive Approach and Case-Based Strategies']
    },
    {
        photo: NisachonPhoto,
        name:'พญ.นิศาชล ทองคำ',
        position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['Addressing Geriatric Syndromes in Primary Care: Strategies for Comprehensive Management', 'Enhancing Care with Comprehensive Geriatric Assessment: A Multidisciplinary Approach']
    },
    {
        photo: NijaraPhoto,
        name:'พญ.นิศจรา กุณาฑลต์',
        position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['The Hatyai Model: A Paradigm for Wellness Centers']
    },
    {
        photo:'',
        name:'ภก.อดิศักดิ์ เมฆตรง',
        position:'เภสัชกรชำนาญการ กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่',
        description:['Kratom: Understanding the Facts and Implications']
    },
    {
        photo:'',
        name:'พว.ภาเอื้ออันน์ สิรินทรโสภณ',
        position:'พยาบาลวิชาชีพชำนาญการ กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่',
        description:['Workshop: Syringe driver and Palliative devices']
    },
    {
        photo:'',
        name:'พว.สุดใจ เรืองสุข',
        position:'พยาบาลวิชาชีพชำนาญการ กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่',
        description:['Workshop: Syringe driver and Palliative devices']
    },
    {
        photo:'',
        name:'พว.อมรรัตน์ ลิ่มเฮง',
        position:'หัวหน้ากลุ่มงานการพยาบาลชุมชน โรงพยาบาลหาดใหญ่',
        description:['The Hatyai Model: A Paradigm for Wellness Centers']
    },
    {
        photo:'',
        name:'คุณจุฑานันท์ พรหมอินทร์',
        position:'นักกายภาพบำบัดปฏิบัติการ รพ.หาดใหญ่',
        description:['The Hatyai Model: A Paradigm for Wellness Centers']
    },
    {
        photo:'',
        name:'คุณมณีวรรณ ทองอ่อน',
        position:'หัวหน้ากลุ่มงานโภชนศาสตร์ รพ.หาดใหญ่',
        description:['The Hatyai Model: A Paradigm for Wellness Centers']
    },
    {
        photo:'',
        name:'คุณชญานภัส จิตตรัตน์',
        position:'นักจิตวิทยาคลินิก ชำนาญการ รพ.หาดใหญ่',
        description:['The Hatyai Model: A Paradigm for Wellness Centers']
    },
]

export default function PageSpeakers() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const handleOpenModal = (speaker) => {
        setSelectedSpeaker(speaker);
        setIsModalOpen(true);
    };

    return (
        <div className='bg-gray-100'>
            <div className='p-4 mt-20 m-4 flex flex-row justify-center'>
                <div className='mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
                    {speakers.map((speaker, index) =>(
                        <div key={index} className='m-4' onClick={() => handleOpenModal(speaker)}>
                        <Speaker index={index} photo={speaker.photo} name={speaker.name} position={speaker.position} description={speaker.description}/>
                        </div>
                    ))}
                </div>
            </div>
            <ModalSpeaker isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} speaker={selectedSpeaker || {}} />
        </div>
    );
}
