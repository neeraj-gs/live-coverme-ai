"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypeWriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter)=>{
        typewriter.typeString("| Get Your Customized AI Generated Cover Letter |")
        .pauseFor(2000).deleteAll()
        .typeString("| Our Scrapes the Job Description and Mixes your Uploaded Resume |")
        .pauseFor(2000).deleteAll()
        .typeString("| Increased Chances of Getting Hired |")
        .pauseFor(2000).deleteAll()
        .start()
      }}
    />
  )
}

export default TypeWriterTitle