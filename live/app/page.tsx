"use client"
import Progress from '@/components/Progress'
import Image from 'next/image'
import logo from './favicon.ico'

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen grainy from-rose-50 to-slate-100">
      <div className='p-10'>
      <Image  src={logo} alt='Logo' width={70} height={70} />
      </div>
      
      <Progress />
    </div>
  )
}
