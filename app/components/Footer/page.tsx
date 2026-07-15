import React from 'react'
import { FaWhatsapp, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <section className='w-full'>
        <div className='border-t border-gray-400 mb-10 '>
               <p className='text-center mt-5 text-white'>
                @ 2026. Adamu Nasiru Zakari. Alrights Reserved
                </p> 


                <div className='w-full flex justify-center items-center mt-5 gap-5'>
                    <a href="https://x.com/Nasintech" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={25} className='text-gray-400 hover:text-blue-400 transition transition-normal duration-200 ease-in  hover:-translate-y-3  ' />
                    </a>
                    <a href="">
                      <FaLinkedin size={25} className='text-gray-400 hover:text-blue-400 transition transition-normal duration-200 ease-in  hover:-translate-y-3' />
                    </a>
                    <a href={`https://wa.me/${2348107053801}`} target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp size={25} className='text-gray-400 hover:text-blue-400 transition transition-normal duration-200 ease-in  hover:-translate-y-3' />
                    </a>
                    <a href="https://github.com/Nasiru0001" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={25} className='text-gray-400 hover:text-blue-400 transition transition-normal duration-200 ease-in  hover:-translate-y-3' />
                    </a>
                </div>
        </div>
    </section>
  )
}

export default Footer