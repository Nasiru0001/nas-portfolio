import { section } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'


const Gallery = () => {

    const images = [
  { src: '/gallery-images/Image1.png', span: 'col-span-4 row-span-2' },
  { src: '/gallery-images/Image2.jpg', span: 'col-span-2 row-span-2' },
  { src: '/gallery-images/Image3.jpeg', span: 'col-span-2 row-span-2' },
  { src: '/gallery-images/Image4.png', span: 'col-span-2 row-span-2' },
  { src: '/gallery-images/Image5.jpg', span: 'col-span-2 row-span-1' },
  { src: '/gallery-images/Image6.jpg', span: 'col-span-2 row-span-1' },
  { src: '/gallery-images/Image7.jpg', span: 'col-span-2 row-span-2' },
  { src: '/gallery-images/Image8.png', span: 'col-span-2 row-span-2' }
]

  return (
   <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 md:auto-rows-[180px] auto-rows-[90px] grid-flow-dense gap-4 p-6">
      {images.map((img, i) => (
        <div
          key={i}
          className={`relative ${img.span} group overflow-hidden rounded-2xl object-contain`}
        >
          <Image
            src={img.src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery