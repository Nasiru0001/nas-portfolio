import React from 'react'

const Contact = () => {
  return (
    <section className='w-full mb-20'>
    <div className='flex flex-col items-center justify-center md:mx-40'>
        <p className="px-10 py-2 rounded-full text-center bg-[#091928] border-[#1a3448] border ">
          Available for Hire
        </p>

        <h3 className='font-extrabold md:text-7xl text-5xl text-center mt-10 text-white'> {"Let's"} Build <br /> The Future Together.</h3>

        <p className='md:text-xl text-[17px] text-center md:mt-10 mt-5 md:leading-9 text-gray-400'>Have a project in mind or just want to chat about turning ideas into clean, <br className='md:block hidden' /> fast, and beautiful web experiences.
          <br className='md:block hidden' />
        </p>

        <p className='md:text-xl text-[17px]  text-center mt-1 text-gray-400'>

        {"I'm"} always open to a good conversation. <br className='md:hidden block' />
Drop me a message and {"let's"} see what we can create.
        </p>

        <div className='flex gap-4 mt-10'>
            <button>
              <a  href="https://mail.google.com/mail/?view=cm&to=adamunasiru935@gmail.com" target="_blank" rel="noopener noreferrer" className='bg-white text-black py-3 px-6 rounded-full text-xl'>Email Me</a>
            </button>

            <button>
              <a href={`https://wa.me/${2348107053801}`} target="_blank" rel="noopener noreferrer" className=' text-white py-3 px-6 rounded-full text-xl bg-slate-900 border-white border'>Whatsapp</a>
            </button>
        </div>


    </div>
    </section>
  )
}

export default Contact
