'use client'
import React from 'react'
import { useState } from 'react'

export default function AbstractsPage() {
    const [isThemesOpen, setIsThemesOpen] = useState(false);
    const [isSubmissionGuidelinesOpen, setIsSubmissionGuidelinesOpen] = useState(false);
    const [isStructureOpen, setIsStructureOpen] = useState(false);
    const [isRegulationsOpen, setIsRegulationsOpen] = useState(false);

  return (
    <div className='bg-gray-100'>
        <div className='py-4 md:px-10 mt-20 m-4'>
            <div className='grid grid-cols-1 md:grid-cols-[auto,1fr]'>
                <div>
                    <div className='p-4 bg-white rounded-lg shadow-md mb-4'>
                        <p className='font-bold text-3xl mb-4'>ส่งบทความ</p>
                        <p className='text-black text-base font-bold'>ส่งบทความผ่าน Google form</p>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfRvES9UdtbMsZJig0bQQrZ2GmPvXYqf8J-IEB_uYBJFOKseQ/viewform?pli=1'><span className='text-gray-500 text-xl font-bold hover:underline'>Click Here</span></a>
                    </div>
                    <div className='p-4 bg-white rounded-lg shadow-md'>
                        <p className='font-bold text-3xl mb-4'>Important Dates</p>
                        <p className='text-black-text-base font-bold'>Call for Abstracts Open</p>
                        <p className='text-gray-700 text-base'>15 April 2024</p>
                        <p className='text-black-text-base font-bold'>Abstracts Submission Deadline</p>
                        <p className='text-gray-700 text-base'>20 May 2024</p>
                        <p className='text-black-text-base font-bold'>Abstracts Result Notification</p>
                        <p className='text-gray-700 text-base'>27 May 2024</p>
                        <p className='text-black-text-base font-bold'>Conference Dates</p>
                        <p className='text-gray-700 text-base'>6 - 7 June 2024</p>
                    </div>
                </div>
                <div className='my-4 xl:my-0 xl:ms-2'>
                    <div className='p-4 bg-white rounded-lg shadow-md'>
                        <button className='font-bold text-2xl mb-4' onClick={() => setIsThemesOpen(!isThemesOpen)}>Abstract Themes & Topics</button>
                        {isThemesOpen && (
                        <>
                        <p className='font-bold text-xl'>Topic</p>
                        <p className='text-base'>The topic of the abstract shoud be relevant to<span className='font-bold ml-1'>Primary Care and/or Family Medicine</span></p>
                        <p className='font-bold text-xl mt-4'>Abstract Themes:</p>
                        <ul className='list-disc list-inside ml-3 mt-2'>
                            <li>
                                Primary Care Innovation & Research
                            </li>
                            <li>
                                Population Health
                            </li>
                            <li>
                                Art of Family Medicine
                            </li>
                            <li>
                                Sustainablity
                            </li>
                        </ul>
                        <p className='font-bold text-xl mt-3'>Sub-themes:</p>
                        <ul className='list-disc list-inside ml-3 mt-2'>
                            <li>
                                Primary Care Organisation/Delivery System
                            </li>
                            <li>
                                Primary Care Workforce issue
                            </li>
                            <li>
                                Digital Primary Care
                            </li>
                            <li>
                                Cultural sensitivity in Family Medicine
                            </li>
                        </ul>
                        </>
                        )}
                    </div>
                    <div className='p-4 bg-white rounded-lg shadow-md mt-5'>
                        <button className='font-bold text-2xl mb-4' onClick={() => setIsSubmissionGuidelinesOpen(!isSubmissionGuidelinesOpen)}>Abstract Submission Guidelines</button>
                        {isSubmissionGuidelinesOpen && (
                        <>
                        <p className='text-base mt-4'><span className='font-bold'>Title: </span>the title should be concise and indicative of the content of the abstract.</p>
                        <ul className='list-disc list-inside ml-3 mt-2'>
                            <li>
                                Please ensure that your title is inputted in title case. For e.g., ‘Population Health Management in Primary Health Care’ and not ‘Population health management in primary health care’. Do not enter the title in all capital or all lowercase letters.
                            </li>
                            <li>
                                Do not use abbreviations in the title.
                            </li>
                            <li>
                                Do not end the title with a period.
                            </li>
                        </ul>
                        <p className='text-base mt-4'><span className='font-bold'>Word Limit: </span>250 words (does not include title and authors)</p>
                        <p className='text-base mt-4'><span className='font-bold'>Language: </span>English, Thai</p>
                        <p className='text-base mt-4'><span className='font-bold'>Tables graphs and images: </span>The use of tables, graphs, and other types of images is not permitted in the abstract.</p>
                        <p className='text-base mt-4'><span className='font-bold'>Abbreviations: </span>The use of standard abbreviations is acceptable. Place special or unusual abbreviations in brackets after the full word the first time it appears. Use numerals to indicate numbers, except to begin sentences.</p>
                        <p className='text-base mt-4'><span className='font-bold'>Fee: </span>No submission fee</p>
                        <p className='text-base mt-4'><span className='font-bold'>Number of Co-authors: </span>No limit on the number of authors as long as they can justify based on the ICMJE authorship criteria.</p>
                        <p className='text-base mt-4'><span className='font-bold'>Abstract Types Accepted: </span></p>
                        <ul className='list-decimal list-inside ml-3 mt-2'>
                            <li>
                               Research: Oral Presentation
                            </li>
                            <li>
                                Research: Poster Presentation
                            </li>
                            <li>
                                Case Report/Series (Poster Only)
                            </li>
                            <li>
                                Quality Improvement (Poster Only)
                            </li>
                        </ul>
                        </>
                        )}
                    </div>
                    <div className='p-4 bg-white rounded-lg shadow-md mt-5'>
                        <button className='font-bold text-2xl mb-4' onClick={() => setIsStructureOpen(!isStructureOpen)}>Abstract Structure</button>
                        {isStructureOpen && (
                        <>
                        <p className='text-base font-bold underline mt-4'>Please prepare your abstract using the following headings:</p>
                        <p className='text-base mt-4'><span className='font-bold'>Research (Oral Presentation/Poster):</span></p>
                        <ul className='list-disc list-inside ml-3 mt-2'>
                            <li>
                                Background (Justify the importance and relevance of this study)
                            </li>
                            <li>
                                Aim (State precisely the purpose of this study)
                            </li>
                            <li>
                                Methods (Describe how you conducted the study, including study design, setting, subjects, research instrument and analysis where appropriate)
                            </li>
                            <li>
                                Results (Summarize the key findings that address the research question)
                            </li>
                            <li>
                                Conclusions (Highlight the key messages, what the study findings add to the existing literature and the implications) 
                            </li>
                        </ul>
                        <p className='text-base mt-4'><span className='font-bold'>Case Report/Series:</span></p>
                        <ul className='list-disc list-inside ml-3 mt-2'>
                            <li>
                                Background (What is the unique or significant problem highlighted by this case?)
                            </li>
                            <li>
                                Case Description
                            </li>
                            <li>
                                Discussion
                            </li>
                            <li>
                                Learning Point (What is the take home message from this report?) 
                            </li>
                        </ul>
                        <p className='text-base mt-4'><span className='font-bold'>Quality Improvement:</span></p>
                        <ul className='list-disc list-inside ml-3 mt-2'>
                            <li>
                                Background (Why was this quality improvement project done?)
                            </li>
                            <li>
                                Short description of quality improvement project
                            </li>
                            <li>
                                Discussion of findings/outcomes of quality improvement project
                            </li>
                            <li>
                                Learning Point (What is the take home message from this quality improvement project?)
                            </li>
                        </ul>
                        </>
                        )}
                    </div>
                    <div className='p-4 bg-white rounded-lg shadow-md mt-5'>
                        <button className='font-bold text-2xl mb-4' onClick={() => setIsRegulationsOpen(!isRegulationsOpen)}>Abstract Regulations</button>
                        {isRegulationsOpen && (
                        <ul className='list-disc list-inside ml-3 mt-2'>
                            <li>
                                Abstract will be reproduced exactly as submitted.
                            </li>
                            <li>
                                Abstract should be submitted by the Presenting Author.
                            </li>
                            <li>
                                Abstract not adhering to the guidelines will not be considered.
                            </li>
                            <li>
                                Abstracts that were previously submitted /presented at other conferences/ meetings will not be accepted.
                            </li>
                            <li>
                                Studies that have been published in journals will not be accepted. Self-declaration is required at the point of submission.
                            </li>
                            <li>
                                <span className='font-bold'>Please do not submit the same abstract multiple times under different presentation types.</span> The final presentation type will be decided by the Scientific Committee and announced in the notification email. 
                            </li>
                        </ul>
                        )}
                    </div>
                    <div className='p-4 bg-white rounded-lg shadow-md mt-5'>
                        <p className='font-bold text-3xl mb-4'>Contact</p>
                        <p className='text-base'>If you have any questions regarding your submitted abstract or the abstract submission process, do not hesitate to reach out to: <a href='#' className='font-bold underline'>pcaric23@gmail.com</a></p>
                        <p className='text-base'>If your inquiry is regarding a particular draft or submission, please include the abstract ID in your email.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
