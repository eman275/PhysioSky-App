'use client'

import ArrowIcon from '@/shared/components/icons/arrow.svg'
import { useScopedI18n } from '@/shared/locales/client'
import Image from 'next/image'
import { Button } from '../ui/button'

const Hero = () => {
  const t = useScopedI18n('common.header')

  return (
    <section className='flex flex-col items-start  gap-8 lg:gap-32 px-8 lg:px-28 py-10 lg:flex-row lg:items-center'>
      <div>
        <p className='text-start   text-huge  lg:text-huge1 font-bold leading-tight'>
          {t('Unlock Your')} <span className='text-primary-1'>{t('Peak')}</span>
          <br />
          <span className='inline-flex items-center gap-2 text-primary-1'>
            {t('Performance')}
            <Image
              src='/images/Group.png'
              alt='logo'
              width={30}
              height={30}
              className='inline-block mt-4'
            />
          </span>
        </p>
      </div>

      <div className='max-w-xl'>
        <p className='text-lg'>{t('hero-title')}</p>
        <Button
          onClick={() => {}}
          variant='solid'
          className='text-black-1 mt-6 rounded-[51px] bg-secondary-1 hover:bg-secondary-1 hover:text-white hover:opacity-80 hover:scale-105'
        >
          {t('Book an appointment')}
          <ArrowIcon className='w-8 h-8 ltr:rotate-180'  />
        </Button>
      </div>
    </section>
  )
}

export default Hero
