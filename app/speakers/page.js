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
import NarongwitPhoto from '/public/speakers/narongwit.jpeg'
import KiratiPhoto from '/public/speakers/kirati.jpg'
import PhungeunPhoto from '/public/speakers/phungeun.jpeg'
import NoppornPhoto from '/public/speakers/nopporn.jpg'
import HathaitipPhoto from '/public/speakers/hathaitip.png'
import KaninPhoto from '/public/speakers/kanin.png'
import WasinPhoto from '/public/speakers/wasin.png'
// import NisachonPhoto from '/public/speakers/nisachon.jpg'
import JustmePhoto from '/public/speakers/justme.jpg'
import CharchristPhoto from '/public/speakers/charchrist.jpg'
import AekaponPhoto from '/public/speakers/aekapon.jpg'
import PokinPhoto from '/public/speakers/pokin.jpg'
import ThawiratPhoto from '/public/speakers/thawirat.png'
import NijaraPhoto from '/public/speakers/nijara.jpg'
import SongkiatPhoto from '/public/speakers/songkiat.png'
import JutananPhoto from '/public/speakers/jutanan.jpg'
import ManeewanPhoto from '/public/speakers/maneewan.jpg'
import ChanadaPhoto from '/public/speakers/chanada.jpeg'
import ChayanapatPhoto from '/public/speakers/chayanapat.jpeg'
import AmornratPhoto from '/public/speakers/amornrat.jpeg'
import SorawatPhoto from '/public/speakers/sorawat.jpg'
import ApinanPhoto from '/public/speakers/apinan.png'
import ChariniPhoto from '/public/speakers/charini.jpg'

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
        description:['Innovative Approaches in Primary Care: Global Perspectives and Local Solutions', 'QI in Primary Care and Research'],
        degree:['Doctor of Medicine degree at Prince of Songkhla University, Songkhla', 'Diploma of Thai Board of Family Medicine, The Royal College of Family Physicians of Thailand']
    },
    {
        photo: CharchristPhoto,
        name:'ชาคริต โภชะเรือง',
        position:'เลขานุการคณะกรรมการเขตสุขภาพเพื่อประชาชน(กขป.) เขต 12 และผู้จัดการมูลนิธิชุมชนสงขลา',
        description:['Innovative Approaches in Primary Care: Global Perspectives and Local Solutions'],
        degree:['ปริญญาโท การจัดการระบบสุขภาพ สถาบันการจัดการระบบสุขภาพ มหาวิทยาลัยสงขลานครินทร์']
    },
    {
        photo:VeerasakPhoto,
        name:'ศ.นพ.วีรศักดิ์ เมืองไพศาล',
        position:'หัวหน้าสาขาวิชาเวชศาสตร์ผู้สูงอายุ คณะแพทยศาสตร์ ศิริราชพยาบาล มหาวิทยาลัยมหิดล',
        description:['Addressing Geriatric Syndromes in Primary Care: Strategies for Comprehensive Management', 'Enhancing Care with Comprehensive Geriatric Assessment: A Multidisciplinary Approach'],
        degree:['แพทยศาสตร์บัณฑิตเกียตินิยมอันดับ 1 (พบ.) คณะแพทยศาสตร์ศิริราชพยาบาล', 'วุฒิบัตรแพทย์ (วว.) เฉพาะทางด้านอายุรศาสตร์ คณะแพทยศาสตร์ศิริราชพยาบาล', 'วุฒิบัตรแพทย์เฉพาะทางต่อยอด (วว.) ด้านประสาทวิทยา คณะแพทยศาสตร์ศิริราชพยาบาล', 'แพทย์เฉพาะทางด้านระบบประสาทผู้สูงอายุ มหาวิทยาลัยออกฟอร์ด ประเทศอังกฤษ', 'วุฒิบัตรด้านเวชศาสตร์ผู้สูงอายุ ราชวิทยาลัยอายุรแพทย์ ลอนดอน ประเทศอังกฤษ', 'ปริญญาโทระบาดวิทยา มหาวิทยาลัยเคมบริดจ์ ประเทศอังกฤษ']
    },
    {
        photo: ApinanPhoto,
        name:'ผศ.ดร.นพ.อภินันท์ อร่ามรัตน์',
        position:'ประธานมูลนิธิศูนย์วิชาการสารเสพติดและหัวหน้าโครงการศูนย์วิชาการเวชศาสตร์ครอบครัว',
        description:['QI in Primary Care and Research competition']
    },
    {
        photo: KrisanaPhoto,
        name:'ผศ.นพ.กฤษณะ สุวรรณภูมิ',
        position:'คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
        description:['QI in Primary Care and Research competition'],
        degree:['Doctor of Medicine (M.D.) Prince of Songkhla University' ,'Diploma Thai Board of Family Medicine Prince of Songkhla University', 'Fellowship Certificate in Academic Family Medicine University of Toronto, Canada', 'Master of Science in Medical Education Cardiff University, United Kingdom', 'Doctor of Education (Ed.D.)(Education Administration) Hatyai University']
    },
    {
        photo: OrawanPhoto,
        name:'พญ.อรวรรณ ตะเวทิพงศ์',
        position:'ผู้อำนวยการ รพ.เขาย้อย, รองผู้อำนวยการกองปฐมภูมิ กระทรวงสาธารณสุข',
        description:['Empowering Primary Care: The Bedrock of Resilient Health Systems'],
        degree:['แพทยศาสตร์บัณฑิต คณะแพทยศาสตรศิริราชพยาบาล มหาวิทยาลัยมหิดล' ,'Master of Health Sciences (Family Medicine) University of Toronto, Canada', 'อนุมัติบัตรแพทย์เฉพาะทางสาขาเวชปฏิบัติครอบครัว', 'Master of Sciences (Health System and Disease Control) Institute of Tropical Medicine, Antwerp, Belgium']
    },
    {
        photo:AekaponPhoto,
        name:'นพ.เอกพล พิศาล',
        position:'ผู้อำนวยการ รพ.บ้านตาขุน',
        description:['การดำเนินงานคลินิกเบาหวานระยะสงบ “บทเรียนจาก จ.สุราษฏร์ธานี”', 'การขับเคลื่อนระบบการจัดการโรคเรื้อรังระดับอำเภอ: จากแนวคิดสู่การเปลี่ยนแปลงและการส่งเสริมป้องกันโรคเรื้อรังในระดับปฐมภูมิ NCD prevention service in primary care'],
        degree:['ปริญญาตรีแพทยศาสตร์บัณฑิต มหาวิทยาลัยสงขลานครินทร์' ,'ปริญญาเวชศาสตร์ป้องกัน แขนงสุขภาพจิตชุมชน แพทยสภา']
    },
    {
        photo: ChanadaPhoto,
        name:'พญ.ชนัดดา สมคง',
        position:'นายแพทย์ชำนาญการ รพ.กาญจนดิษฐ์',
        description:['การดำเนินงานคลินิกเบาหวานระยะสงบ “บทเรียนจาก จ.สุราษฏร์ธานี”'],
        degree:['แพทยศาสตร์บัณฑิต คณะแพทยศาสตร์ มหาวิทยาลัยนเรศวร', 'วุฒิบัตรเวชศาสตร์ครอบครัว สถาบันหลักโรงพยาบาลสุราษฎร์ธานี']
    },
    {
        photo:ChariniPhoto,
        name:'พว.ชาลิณี บุญช่วยรอด',
        position:'พยาบาลวิชาชีพ รพ.บ้านตาขุน',
        description:['การดำเนินงานคลินิกเบาหวานระยะสงบ “บทเรียนจาก จ.สุราษฏร์ธานี”', 'การขับเคลื่อนระบบการจัดการโรคเรื้อรังระดับอำเภอ: จากแนวคิดสู่การเปลี่ยนแปลงและการส่งเสริมป้องกันโรคเรื้อรังในระดับปฐมภูมิ NCD prevention service in primary care'],
        degree:['ประกาศนียบัตรพยาบาลศาสตร์ วิทยาลัยพยาบาลบรมราชชนนี สุราษฎร์ธานี', 'การพยาบาลเฉพาะทางสาขาการพยาบาลผู้จัดการรายกรณีโรคเรื้อรัง (เบาหวานและความดันโลหิตสูง)']
    },
    {
        photo:'',
        name:'คุณหทัยชนก เดชะ',
        position:'ผู้อำนวยการ รพ.สต.เขาพัง',
        description:['การขับเคลื่อนระบบการจัดการโรคเรื้อรังระดับอำเภอ: จากแนวคิดสู่การเปลี่ยนแปลงและการส่งเสริมป้องกันโรคเรื้อรังในระดับปฐมภูมิ NCD prevention service in primary care']
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
        description:['Discussion: From Cells to Communities : A Holistic Approach to Global Prison Health and Primary Care Solutions'],
        degree:['แพทยศาสตรบัณฑิต (เกียรตินิยมอันดับสอง) มหาวิทยาลัยเชียงใหม่',
            'ประกาศนียบัตรวิชาอาชีวอนามัยและความปลอดภัย มหาวิทยาลัยสุโขทัยธรรมาธิราช',
            'ประกาศนียบัตรบัณฑิตวิทยาศาสตร์การแพทย์คลินิก (เวชศาสตร์ครอบครัว) มหาวิทยาลัยเชียงใหม่',
            'ประกาศนียบัตรแพทย์อาชีวเวชศาตร์ กรมการแพทย์ กระทรวงสาธารณสุข',
            'ประกาศนียบัตรการอบรมหลักสูตรการฝังเข็ม กระทรวงสาธารณสุข',
            'วุฒิบัตรแสดงความรู้ความชํานาญในการประกอบวิชาชีพเวชกรรม สาขาเวชศาสตร์ครอบครัว แพทยสภา',
            'มนุษยนิเวศศาสตร์มหาบัณฑิต มหาวิทยาลัยสุโขทัยธรรมาธิราช',
            'สาธารณสุขศาสตร์บัณฑิต (อาชีวอนามัยและความปลอดภัย) มหาวิทยาลัยสุโขทัยธรรมาธิราช',
            'หนังสืออนุมัติแสดงความรู้ความชํานาญในการประกอบวิชาชีพเวชกรรมสาขาเวชศาสตร์ป้องกัน แขนงอาชีวเวชศาสตร์ แพทยสภา',
            'หนังสืออนุมัติแสดงความรู้ความชํานาญในการประกอบวิชาชีพเวชกรรมสาขาเวชศาสตร์ป้องกัน แขนงระบาดวิทยา แพทยสภา',
            'หนังสืออนุมัติแสดงความรู้ความชํานาญในการประกอบวิชาชีพเวชกรรมสาขาเวชศาสตร์ป้องกัน แขนงสุขภาพจิตชุมชน แพทยสภา',
            'หนังสืออนุมัติแสดงความรู้ความชํานาญในการประกอบวิชาชีพเวชกรรมสาขาเวชศาสตร์ป้องกัน แขนงสาธารณสุขศาสตร์ แพทยสภา',
            'หนังสืออนุมัติแสดงความรู้ความชํานาญในการประกอบวิชาชีพเวชกรรมสาขาเวชศาสตร์ป้องกัน แขนงเวชศาสตร์ป้องกันคลินิก แพทยสภา',
            'หนังสืออนุมัติแสดงความรู้ความชํานาญในการประกอบวิชาชีพเวชกรรมสาขาเวชศาสตร์ป้องกัน แขนงเวชศาสตร์วิถีชีวิต แพทยสภา',
            'ประกาศนียบัตรวิชาชีพเวชกรรมด้านเวชศาสตร์ครอบครัวการเสพติด แพทยสภา'
        ]
    },
    {
        photo: ThammasinPhoto,
        name:'ผศ.ดร.นพ.ธรรมสินธ์ อิงวิยะ',
        position:'ผู้ช่วยคณบดีฝ่ายวิเคราะห์ข้อมูล และนวัตกรรมดิจิตอล คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
        description:['Unveiling the Health Impacts of Global Warming: Evidence and Insights'],
        degree:["Doctor of Medicine degree, Faculty of Medicine, Prince of Songkhla University", 'Master of Health Science in Enviromental Health Science Department, Johns Hopkins Bloomberg School of Public Health', 'Ph.D. in Environmental Health and Engineering (PhD Track in Exposure Sciences and Environmental Epidemiology), Johns Hopkins Bloomberg School of Public Health']
    },
    {
        photo: KritPhoto,
        name:'ดร.กฤต จารุพานิช',
        position:'ชีวเวชศาสตร์และวิศวกรรมชีวการแพทย์ คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
        description:['Digital Health Revolution: AI Integration in Primary Care for Global Challenges'],
        degree:["B.S. in Physics(1's Class honor) Prince of Songkla University, Songkhla", 'M.S. in Material Science and Engineering Mahidol University, Bangkok', 'M.S. in Biomedical Engineering University of California, Irvine, USA', 'Ph.D. in Biomedical Engineering University of California, Irvine, USA']
    },
    {
        photo: ThawiratPhoto,
        name:'นพ.ทวิรัศม์ จุ่งรุ่งเรือง',
        position:'ชีวเวชศาสตร์และวิศวกรรมชีวการแพทย์ คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
        description:['Digital Health Revolution: AI Integration in Primary Care for Global Challenges'],
        degree:['แพทยศาสตร์บัณฑิต (พ.บ.) คณะแพทยศาสตร์ศิริราชพยาบาล มหาวิทยาลัยมหิดล']
    },
    {
        photo: NarongwitPhoto,
        name:'รศ.นพ.ณรงค์วิทย์ นาขวัญ',
        position:'นายแพทย์ชำนาญการพิเศษ กลุ่มงานอายุรกรรม โรงพยาบาลหาดใหญ่',
        description:['Asthma Management in Primary Care: Guidelines and Best Practices'],
        degree:['แพทยศาสตร์บัณฑิต เกียรตินิยมอันดับ 1 คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล', 'อายุรแพทย์โรคระบบทางเดินหายใจและภาวะวิกฤตการหายใจ มหาวิทยาลัยสงขลานครินทร์']
    },
    {
        photo: KiratiPhoto,
        name:'ผศ.พญ.กีรติ อัครปฏิมา',
        position:'นายแพทย์ชำนาญการ กลุ่มงานอายุรกรรม โรงพยาบาลหาดใหญ่',
        description:['Constipation Management in Primary Care: A Comprehensive Approach and Case-Based Strategies'],
        degree:['แพทยศาสตร์บัณฑิต เกียรตินิยมอันดับ 1 คณะแพทยศาสตร์ศิริราชพยาบาล', 'วุฒิบัตรแสดงความรู้ความชำนาญในการประกอบวิชาชีพเวชกรรม สาขาอายุรศาสตร์', 'วุฒิบัตรแสดงความรู้ความชำนาญในการประกอบวิชาชีพเวชกรรม อนุสาขาอายุรศาสตร์ โรคระบบทางเดินอาหารและตับ']
    },
    {
        photo:'',
        name:'พญ.ธัญลักษณ์ วั่นเลี่ยง',
        position:'หัวหน้ากลุ่มงานจิตเวชและยาเสพติด โรงพยาบาลหาดใหญ่',
        description:['Parenting in Digital World'],
        degree:['ปริญญาตรี แพทยศาสตร์บัณฑิต คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์' ,'วุฒิบัตรผู้เชี่ยวชาญสาขาจิตเวชศาสตร์เด็กและวัยรุ่น จุฬาลงกรณ์มหาวิทยาลัย']
    },
    {
        photo: PhungeunPhoto,
        name:'ดร.พญ.ภูเงิน คงทอง',
        position:'ผู้อำนวยการศูนย์มะเร็ง รพ.หาดใหญ่-นาหม่อม',
        description:['Cancer Prevention Strategies: Empowering Health Through Awareness and Action'],
        degree: ['Doctor of Medicine Prince of Songkhla University', 'Internal Medicine (Diploma) Siriraj Hospital, Mahidol University, Bangkok', 'Medical Oncology (Clinical fellow) Rajavithi Hospital, Bangkok', 'MSc (Merit) Cancer Sciences and precision oncology University of Glasgow, UK', 'PhD Breast Cancer Research University of Glasgow, UK']
    },
    {
        photo: NoppornPhoto,
        name:'นพ.นพพร ส่งอำไพ',
        position:'นายแพทย์ชำนาญการ กลุ่มงานอายุรกรรม รพ.หาดใหญ่',
        description:['Essential Adult Vaccines: Protecting Health Across the Lifespan'],
        degree:['แพทยศาสตร์บัณฑิต คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์' ,'วุฒิบัตรผู้เชี่ยวชาญสาขาอายุรศาสตร์ โรงพยาบาลหาดใหญ่' ,'วุฒิบัตรอนุสาขาอายุรศาสตร์โรคติดเชื้อ คณะแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย']
    },
    {
        photo: HathaitipPhoto,
        name:'พญ.หทัยทิพย์ ธรรมวิริยะกุล',
        position:'นายแพทย์ชำนาญการพิเศษ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['Innovative Approaches in Primary Care: Global Perspectives and Local Solutions', 'Unveiling the Health Impacts of Global Warming: Evidence and Insights', 'Parenting in Digital World'],
        degree:['Doctor of Medicine degree, Chiangmai  University, Chiangmai', 'Diploma of the Thai Board of Family Medicine ,the Royal College of Family Physicians of Thailand', 'Master in Epidemiology from London School of Hygiene and Tropical Medicine, London, United Kingdom', 'Certificate of Academic Fellowship in Family Medicine, DFCM University of Toronto', 'Clinical Research Certificate, DFCM University of Toronto']
    },
    {
        photo: SorawatPhoto,
        name:'ดร.นพ.ศรวัส แสงแก้ว',
        position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['QI in Primary Care and Research competition', 'Essential Adult Vaccines: Protecting Health Across the Lifespan'],
        degree:['Doctor of Medicine (First Class Honours), Prince of Songkhla University', 'MSc in Epidemiology (Merit), School of Public Health, Imperial College London, United Kingdom', 'PhD in Clinical Medicine Research, Department of Infectious Disease, Faculty of Medicine, Imperial College London, United Kingdom']
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
        description:['Workshop: Syringe driver and Palliative devices'],
        degree: ['แพทยศาสตร์บัณฑิต คณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์' ,'วุฒิบัตรเวชศาสตร์ครอบครัว ภาควิชาเวชศาสตร์ชุมชนและครอบครัว', 'ประกาศนียบัตรแพทย์ฝังเข็ม กรมการแพทย์แผนไทยการแพทย์ทางเลือก กระทรวงสาธารณสุข', 'ประกาศนียบัตรแพทย์เวชศาสตร์ครอบครัวบริบาลผู้ป่วยประคับประคอง (Palliative care in family medicine)']
    },
    {
        photo: WasinPhoto,
        name:'นพ.วศิน คัมภีระ',
        position:'นายแพทย์ชำนาญการพิเศษ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['Digital Health Revolution: AI Integration in Primary Care for Global Challenges'],
        degree:['Thai board of Family Medicine', 'B.S. in Medical Doctor']
    },
    {
        photo: SongkiatPhoto,
        name:'นพ.ทรงเกียรติ กาญจนแก้ว',
        position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['Constipation Management in Primary Care: A Comprehensive Approach and Case-Based Strategies']
    },
    // {
    //     photo: NisachonPhoto,
    //     name:'พญ.นิศาชล ทองคำ',
    //     position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
    //     description:['Addressing Geriatric Syndromes in Primary Care: Strategies for Comprehensive Management', 'Enhancing Care with Comprehensive Geriatric Assessment: A Multidisciplinary Approach']
    // },
    {
        photo: NijaraPhoto,
        name:'พญ.นิศจรา กุณาฑลต์',
        position:'นายแพทย์ชำนาญการ กลุ่มงานเวชกรรมสังคม รพ.หาดใหญ่',
        description:['The Hatyai Model: A Paradigm for Wellness Centers'],
        degree:['แพทยศาสตร์บัณฑิต โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล', 'วุฒิบัตรฯ สาขาเวชศาสตร์ครอบครัว']
    },
    {
        photo:'',
        name:'ภก.อดิศักดิ์ เมฆตรง',
        position:'เภสัชกรชำนาญการ กลุ่มงานเวชกรรมสังคม โรงพยาบาลหาดใหญ่',
        description:['Kratom: Understanding the Facts and Implications'],
        degree:['เภสัชศาสตร์บัณฑิต มหาวิทยาลัยสงขลานครินทร์' , 'ประกาศนียบัตรวิชาชีพเภสัชกรรมระบาดวิทยาในงานคุ้มครองผู้บริโภค วิทยาลัยคุ้มครองผู้บริโภคด้านยาและสุขภาพแห่งประเทศไทย สภาเภสัชกรรม' ,'ประกาศนียบัตรวิชาชีพเภสชักรรมการจัดการความเสี่ยงในงานคุ้มครองผู้บริโภค วิทยาลัยคุ้มครองผู้บริโภคด้านยาและสุขภาพแห่งประเทศไทย สภาเภสัชกรรม']
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
        photo: AmornratPhoto,
        name:'พว.อมรรัตน์ ลิ่มเฮง',
        position:'หัวหน้ากลุ่มงานการพยาบาลชุมชน โรงพยาบาลหาดใหญ่',
        description:['The Hatyai Model: A Paradigm for Wellness Centers'],
        degree:['วิทยาศาสตร์บัณฑิต (สาขาการพยาบาลและการผดุงครรภ์)', 'วิทยาศาสตร์มหาบัณฑิต (พยาบาลศาสตร์) มหาวิทยาลัยมหิดล', 'พยาบาลผู้ปฏิบัติการขั้นสูง สาขาการพยาบาลชุมชน','ประกาศนียบัตรการพยาบาลเฉพาะทาง สาขาเวชปฏิบัติทั่วไป (การรักษาโรคเบื้องต้น) มหาวิทยาลัยสงขลานครินทร์']
        
    },
    {
        photo: JutananPhoto,
        name:'คุณจุฑานันท์ พรหมอินทร์',
        position:'นักกายภาพบำบัดปฏิบัติการ รพ.หาดใหญ่',
        description:['The Hatyai Model: A Paradigm for Wellness Centers'],
        degree:['วิทยาศาสตร์บัณฑิต (กายภาพบำบัด) มหาวิทยาลัยสงขลานครินทร์']
    },
    {
        photo: ManeewanPhoto,
        name:'คุณมณีวรรณ ทองอ่อน',
        position:'หัวหน้ากลุ่มงานโภชนศาสตร์ รพ.หาดใหญ่',
        description:['The Hatyai Model: A Paradigm for Wellness Centers'],
        degree:['ปริญญาตรี คหกรรมศาสตร์ศึกษา สาขาอาหารและโภชนาการ สถาบันเทคโนโลยีราชมงคลจักรพงษ์ภูวนารถ กทม.', 'หลักสูตรเฉพาะทางโภชนบำบัด คณะเเพทย์ศาสตร์รามาธิบดี']
    },
    {
        photo: ChayanapatPhoto,
        name:'คุณชญานภัส จิตตรัตน์',
        position:'นักจิตวิทยาคลินิก ชำนาญการ รพ.หาดใหญ่',
        description:['The Hatyai Model: A Paradigm for Wellness Centers'],
        degree:['วิทยาศาสตร์บัณฑิต (จิตวิทยาคลินิกและชุมชน) มหาวิทยาลัยรามคำแหง' ,'ศิลปศาสตร์มหาบัณฑิต (จิตวิทยาการปรึกษา) มหาวิทยาลัยธรรมศาสตร์']
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
