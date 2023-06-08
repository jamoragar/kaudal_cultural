import React, { useState, useEffect } from 'react'
import { CountdownProps } from '../types/Countdown'

const Countdown: React.FC<CountdownProps> = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = +new Date(date) - +new Date()
      setTimeLeft(formatTime(difference))
    }, 1000)
    return () => clearInterval(interval)
  }, [date])

  const formatTime = (time: number): string => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const seconds = Math.floor((time / 1000) % 60)

    return `${days.toString().padStart(2, '0')}d ${hours
      .toString()
      .padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds
      .toString()
      .padStart(2, '0')}s`
  }

  return (
    <div className="flex items-center bg-transparent p-4">
      {timeLeft.split(' ').map((time, index) => (
        <div
          key={index}
          className="mx-2 flex flex-row items-center justify-center rounded-md border border-black bg-transparent p-2"
        >
          <p className="text-3xl font-bold">{time.slice(0, -1)}</p>
          <span className="ml-2">{time.slice(-1)}</span>
        </div>
      ))}
    </div>
  )
}

export default Countdown
