'use client'
import { useScopedI18n } from '@/shared/locales/client'
import React from 'react'

const AboutUs = () => {
  const t = useScopedI18n('common.header')
  return (
    <section id="about" className='relative mt-4 lg:mt-12'>
      <img
        src='/images/hero.png' // Replace with the actual path to your image
       alt='About Us'
        className='h-[600px] w-full object-cover'
      />
      <div className='absolute inset-0 flex  items-end justify-start bg-gradient-to-t to-transparent p-6 sm:p-8'>
        <div className='max-w-3xl'>
          <h2 className='  mb-52 lg:mb-2  text-huge1 font-bold text-white lg:text-[124px]'>
            {t('about-us-title')}
          </h2>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
