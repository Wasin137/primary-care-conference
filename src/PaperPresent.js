import React from 'react'

const papers = [
    {topic:'Doctor Google and Friends: How Technology is Changing Doctor Visits.', author:'Dr.Mike Douglas', institution:'Hatyai Hospital, Thailand'},
    {topic:'Bodyguards Inside You: The Immune System Explained With Tiny Ninjas.', author:'Mr.Ninja Tokyo', institution:'Toyota Hospital, Japan'},
    {topic:'Eat Your Greens or Turn Into a Zombie: The Not-So-Scary Guide to Nutrition', author:'Dr.Veggie Vegatable', institution:'Green Farming, Serbia'}
]

export default function PaperPresent() {
  return (
    <>
        <div className='p-4 bg-white rounded-lg shadow-md'>
            <div>
                <p className='text-xl font-bold'>Paper</p>
                {papers.map((paper, index) => (
                <div key={index} className="mt-4">
                    <div className='flex flex-row items-start me-auto'>
                        <img className='w-4 h-4 sm:w-8 sm:h-8' key={index} src='document-text-svgrepo-com.svg' alt={paper.topic}/>
                        <p className='text-base sm:text-xl ms-1'>{paper.topic}</p>
                    </div>
                    <div className='flex flex-row justify-end mt-2'>
                        <p className='text-sm sm:text-base font-bold'>{paper.author}</p>
                        <p className='text-sm sm:text-base ms-2'>{paper.institution}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}
