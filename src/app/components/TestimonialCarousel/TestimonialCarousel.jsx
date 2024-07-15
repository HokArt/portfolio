"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import applicationWeb from '../../Images/applicationWeb.png'
import codeQr from '../../Images/codeQr.png'
import newsLetter from '../../Images/newsLetter.png'

const testimonials = [
  {
    text: 'Challenge by Frontend Mentor (Age Calculator). Coded by Kokou Hoka.',
    author: 'Kokou Hoka',
    image:
      applicationWeb,
  },
  {
    text: 'Challenge by Frontend Mentor (Qr Code). Coded by Kokou Hoka.',
    author: 'Kokou Hoka',

    image:
      codeQr,
  },
  {
    text: 'Challenge by Frontend Mentor (Newsletter). Coded by Kokou Hoka.',
    author: 'Kokou Hoka',
    image:
      newsLetter,
  },
]

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length,
      )
    }, 5000) // Change Time here

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const { text, author, image } = testimonials[currentTestimonial]

  const variants = {
    initial: { opacity: 0, y: '50%', scale: 0.1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: '50%', scale: 0.1 },
  }
  const dotVariants = {
    active: { scale: 1.2, backgroundColor: '#3f3f46' },
    inactive: { scale: 1, backgroundColor: '#D1D5DB' },
  }

  return (
    <section className="absolute bottom-0 right-0 w-2/4 h-[95%] py-12 md:py-24 flex justify-center">
      <div className=" w-full max-w-2xl">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentTestimonial}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex w-full flex-col items-center justify-center"
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              duration: 0.5,
            }}
          >
            <Image
              src={image} 
              alt={author} 
              className="m-0 w-5/6 h-5/6"
              priority
            />
            <p className="m-0 text-center text-2xl font-medium tracking-tight ">
              &quot;{text}&quot;
            </p>
            <div className="mx-auto mt-5 ">
              <div className="flex flex-col items-center justify-center space-x-3">
                <div className="font-regular text-sm text-gray-900/80">
                  {author}
                </div>
              </div>
            </div>
          </motion.div>
          <div className="mt-5 flex justify-center">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                className="mx-1 h-1 w-1 cursor-pointer rounded-full "
                variants={dotVariants}
                animate={index === currentTestimonial ? 'active' : 'inactive'}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default TestimonialCarousel