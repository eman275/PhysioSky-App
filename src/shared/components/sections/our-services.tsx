'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useScopedI18n } from '@/shared/locales/client'
import PhysicalTherapySection from './physical-therapy'

const OurServices = () => {
  const t = useScopedI18n('common.header')
  return (

    <section id='services' className=' mt-12 flex flex-col items-center justify-center'>
      

      <Button
        variant='solid'
        className=' mt-6 rounded-[51px] bg-primary-1 hover:bg-primary-1 hover:text-white hover:opacity-80'
      >
        {t('Our Services')}
      </Button>
      <p className=' text-xl lg:text-huge2 mt-3 font-bold text-primary-1'>
        {t('our-services-title')}
      </p>
      <p className='mt-2 text-base text-base-gray'>
        {t('our-services-subtitle')}
      </p>
      <PhysicalTherapySection/>
      
    </section>
  )
}

export default OurServices
