'use client'
import React from 'react'
import Speaker from '@/src/Speaker'
import ModalSpeaker from '@/src/CVModal'
import { useState } from 'react'

const speakers = [
    {
        photo:'speakers/apisan.png',
        name:'นพ.อภิสรรค์ บุญประดับ',
        position:'ผู้อำนวยการ กองปฐมภูมิ',
        description:['Innovative Approaches in Primary Care: Global Persepctives and Local Solutions']
    },
    {
        photo:'speakers/supatra.png',
        name:'พญ.สุพัตรา ศรีวณิชชากร',
        position:'ประธานราชวิทยาลัยแพทย์เวชศาสตร์ครอบครัวประเทศไทย',
        description:['Innovative Approaches in Primary Care: Global Persepctives and Local Solutions']
    },
    {
        name:'พญ.จัสมี โนะ',
        position:'นายแพทย์ชำนาญการพิเศษ รพ.ระแงะ',
        description:['Innovative Approaches in Primary Care: Global Persepctives and Local Solutions', 'QI in Primary Care and Research']
    },
    {
        name:'ชาคริต โภชะเรือง',
        position:'ประธานสมัชชาสุขภาพจังหวัดสงขลา',
        description:['Innovative Approaches in Primary Care: Global Persepctives and Local Solutions']
    },
    {
        photo:'speakers/veerasak.png',
        name:'ศ.นพ.วีรศักดิ์ เมืองไพศาล',
        position:'อาจารย์คณะแพทยศาสตร์ศิริราชพยาบาล',
        description:['Addressing Geriatric Syndromes in Primary Care: Strategies for Comprehensive Management', 'Enhancing Care with Comprehensive Geriatric Assessment: A Multidisciplinary Approach']
    },
    {
        photo:'speakers/krisana.png',
        name:'รศ.นพ.กฤษณะ สุวรรณภูมิ',
        position:'อาจารย์คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
        description:['QI in Primary Care and Research competition', 'Digital Health Revolution: AI Integration in Primary Care for Global Challenges']
    },
    {
        photo:'speakers/orawan.png',
        name:'พญ.อรวรรณ ตะเวทิพงศ์',
        position:'ผู้อำนวยการ รพ.เขาย้อย',
        description:['Empowering Primary Care: The Bedrock of Resilient Health Systems']
    },
    {
        photo:'',
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
        photo:'speakers/kraisorn.png',
        name:'นพ.ไกรสร โตทับเที่ยง',
        position:'ผู้อำนวยการกองวัณโรค กรมควบคุมโรค',
        description:['Discussion: From Cells to Communities : A Holistic Approach to Global Prison Health and Primary Care Solutions']
    },
    {
        photo:'',
        name:'นพ.โภคิน ศักรินทร์กุล',
        position:'หัวหน้ากลุ่มภารกิจด้านการบริการปฐมภูมิ รพ.ลำพูน',
        description:['Discussion: From Cells to Communities : A Holistic Approach to Global Prison Health and Primary Care Solutions']
    },
    {
        photo:'speakers/thammasin.png',
        name:'ผศ.ดร.นพ.ธรรมสินธ์ อิงวิยะ',
        position:'ผู้ช่วยคณบดีฝ่ายวิเคราะห์ข้อมูล และนวัตกรรมดิจิตอล คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
        description:['Unveiling the Health Impacts of Global Warming: Evidence and Insights']
    },
    {
        photo:'speakers/krit.png',
        name:'ดร.กฤต จารุพานิช',
        position:'ชีวเวชศาสตร์และวิศวกรรมชีวการแพทย์ คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
        description:['Digital Health Revolution: AI Integration in Primary Care for Global Challenges'],
        degree:["B.S. in Physics(1's Class honor)", 'M.S. in Material Science and Engineering', 'M.S. in Biomedical Engineering', 'Ph.D. in Biomedical Engineering']
    },
    {
        photo:'speakers/narongwit.png',
        name:'รศ.นพ.ณรงค์วิทย์ นาขวัญ',
        position:'นายแพทย์ชำนาญการพิเศษ กลุ่มงานอายุรกรรม โรงพยาบาลหาดใหญ่',
        description:['Asthma Management in Primary Care: Guidelines and Best Practices']
    },
    {
        photo:'speakers/kirati.png',
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
        photo:'speakers/phungeun.png',
        name:'ดร.พญ.ภูเงิน คงทอง',
        position:'ผู้อำนวยการศูนย์มะเร็ง รพ.หาดใหญ่-นาหม่อม',
        description:['Cancer Prevention Strategies: Empowering Health Through Awareness and Action']
    },
    {
        photo:'speakers/nopporn.png',
        name:'นพ.นพพร ส่งอำไพ',
        position:'นายแพทย์ชำนาญการ กลุ่มงานอายุรกรรม รพ.หาดใหญ่',
        description:['Essential Adult Vaccines: Protecting Health Across the Lifespan']
    },
    {
        photo:'speakers/hathaitip.png',
        name:'พญ.หทัยทิพย์ ธรรมวิริยะกุล',
        position:'นายแพทย์ชำนาญการพิเศษ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['Innovative Approaches in Primary Care: Global Persepctives and Local Solutions', 'Unveiling the Health Impacts of Global Warming: Evidence and Insights', 'Parenting in Digital World']
    },
    {
        photo:'',
        name:'ดร.นพ.ศรวัส แสงแก้ว',
        position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['QI in Primary Care and Research competition', 'Essential Adult Vaccines: Protecting Health Across the Lifespan']
    },
    {
        photo:'speakers/kanin.png',
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
        photo:'speakers/wasin.png',
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
        photo:'',
        name:'พญ.นิศาชล ทองคำ',
        position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['Addressing Geriatric Syndromes in Primary Care: Strategies for Comprehensive Management', 'Enhancing Care with Comprehensive Geriatric Assessment: A Multidisciplinary Approach']
    },
    {
        photo:'',
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
        position:'',
        description:['The Hatyai Model: A Paradigm for Wellness Centers']
    },
    {
        photo:'',
        name:'คุณมณีวรรณ ทองอ่อน',
        position:'หัวหน้ากลุ่มงานโภชนศาสตร์ รพ.หาดใหญ่',
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
