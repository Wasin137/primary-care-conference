'use client'
import React, { useState, useEffect } from 'react';

export default function Schedule({ roomSchedule }) {
  /* Get time function uncomment on production
  const [currentTime, setCurrentTime] = useState(new Date(new Date().getTime() + (7 * 60 * 60 * 1000)))

  useEffect(() => {
    const timer = setInterval(() => {
      // Update the current time every minute, adjusted to Bangkok time
      setCurrentTime(new Date(new Date().getTime() + (7 * 60 * 60 * 1000)))
    }, 60000); // 60 seconds
    return () => clearInterval(timer)
  }, [])
  */

  // Simulated time for demonstration comment on production
  const simulatedCurrentTime = new Date(2024, 5, 6, 13, 0, 0); // Y, M, D, H, m, s
  // Simulated time for demonstration comment on production
  const [currentTime, setCurrentTime] = useState(simulatedCurrentTime)


  useEffect(() => {
    const timer = setInterval(() => {
      const newSimulatedTime = new Date(currentTime.getTime() + 60000)
      setCurrentTime(newSimulatedTime)
    }, 60000);
    return () => clearInterval(timer)
  }, [currentTime])

  const isCurrentTimeInRange = (dateStr, timeRange) => {
    // Safety check if timeRange is undefined
    if (!timeRange) {
      return false
    }
  
    const [startTimeStr, endTimeStr] = timeRange.split('-')
    const [startHour, startMinutes] = startTimeStr.split('.').map(Number)
    const [endHour, endMinutes] = endTimeStr.split('.').map(Number)
  
    // Parse the session's date
    const [year, month, day] = dateStr.split('-').map(Number)
  
    // Adjust month index to be 0-based for JavaScript Date
    const monthIndex = month - 1
  
    // Date Objects
    const startTime = new Date(year, monthIndex, day, startHour, startMinutes)
    const endTime = new Date(year, monthIndex, day, endHour, endMinutes)
  
    // Avoid conflict with next session
    const adjustedCurrentTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), currentTime.getHours(), currentTime.getMinutes())
  
    return adjustedCurrentTime >= startTime && adjustedCurrentTime < endTime
  }
  
  const hasSessionPassed = (dateStr, timeRange) => {
    if (!timeRange) {
      return false;
    }
  
    const [_, endTimeStr] = timeRange.split('-') // Use "_" for unused variable (startTimeStr)
    const [endHour, endMinutes] = endTimeStr.split('.').map(Number)
  
    const [year, month, day] = dateStr.split('-').map(Number)
    const monthIndex = month - 1
    const endTime = new Date(year, monthIndex, day, endHour, endMinutes)
  
    // Use the adjusted current time similar to how you did in isCurrentTimeInRange
    const adjustedCurrentTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), currentTime.getHours(), currentTime.getMinutes())
  
    return adjustedCurrentTime > endTime // If current time is after session end time
  };

  

  return (
    <>
      <div className='p-4 bg-white rounded-lg shadow-md'>
        <p className='text-center text-4xl font-bold text-gray-900'>{roomSchedule.room}</p>
        <ol className="relative border-l border-gray-200">
        {roomSchedule.schedule.map((item, index) => (
          <li key={index} className={`ml-4 mb-4 ${isCurrentTimeInRange(roomSchedule.date, item.time) ? 'bg-gray-200 rounded-lg' : ''} ${hasSessionPassed(roomSchedule.date, item.time) ? 'text-opacity-50' : ''}`}>
            <div className={`absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white ${isCurrentTimeInRange(item.time) ? 'bg-yellow-600' : 'bg-gray-500'}`}></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">{item.time}</time>
            <h3 className={`text-lg font-semibold ${hasSessionPassed(roomSchedule.date, item.time) ? 'text-gray-400' : 'text-gray-900'}`}>{item.topic}</h3>
            {item.description.map((list, listIndex) => (
              <p key={listIndex} className={`text-base font-normal ${hasSessionPassed(roomSchedule.date, item.time) ? 'text-gray-300' : 'text-gray-500'}`}>{list}</p>
            ))}
          </li>
        ))}
        </ol>
      </div>
    </>
  );
}
