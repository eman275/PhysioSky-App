'use client'
import ArrowIcon from '@/shared/components/icons/arrow.svg'
import { useScopedI18n } from '@/shared/locales/client'
import { Button } from '../ui/button'
import HowWeWorkCard from '../ui/how-we-work-card'

const HowWeWork = () => {
  const t = useScopedI18n('common.header')

  const howWeWorkSteps = [
    {
      step: '1',
      title: 'Understanding',
      description:
        'We assess your lifestyle, habits, and challenges to create a complete picture of your needs.',
      imageUrl: '/images/howwework1.png',
    },
    {
      step: '2',
      title: 'Planning',
      description: 'Together, we craft a tailored roadmap based on your goals.',
      imageUrl: '/images/howwework2.png',
    },
    {
      step: '3',
      title: 'Rehabilitation',
      description:
        'Our programs focus on functional exercises for lasting results.',
      imageUrl: '/images/howwework3.png',
    },
    {
      step: '4',
      title: 'Treatment',
      description:
        'We offer in-house therapies and expert support to accelerate recovery.',
      imageUrl: '/images/howwework4.png',
    },
    {
      step: '5',
      title: 'Integration',
      description:
        'We work with your coaches and trainers to ensure a seamless return to peak performance.',
      imageUrl: '/images/howwework5.png',
    },
  ]

  return (
    <div>
      <section
        id='HowDoWeWork'
        className='flex flex-col items-start  gap-1 px-8 py-10 lg:flex-row lg:items-center lg:gap-32 lg:px-28'
      >
        <div>
          <p className='text-start   text-huge leading-tight  lg:text-[128px] '>
            {t('How do we works')}
          </p>
        </div>

        <div className='max-w-xl'>
          <p className='text-huge font-bold'>{t('HowWeWorkTitle')}</p>
          <p className='mt-3 text-xl'>{t('HowWeWorkDesc')}</p>

          <Button
            onClick={() => {}}
            variant='solid'
            className='mt-6 rounded-[51px] bg-secondary-1 text-black-1 hover:scale-105 hover:bg-secondary-1 hover:text-white hover:opacity-80'
          >
            {t('Book an appointment')}
            <ArrowIcon className='h-8 w-8 ltr:rotate-180' />
          </Button>
        </div>
      </section>
      {/* <div className='flex min-h-screen items-center justify-center bg-gray-100 py-10'> */}
      <div className=' mx-auto px-4'>
        {/* <HowWeWorkCard
          step=' 1'
          title='Understanding'
          description='We assess your lifestyle, habits, and challenges to create a complete picture of your needs.'
          imageUrl='/images/howwework1.png'
        /> */}

        {howWeWorkSteps.map((step, index) => (
          <HowWeWorkCard
            key={index}
            step={step.step}
            title={step.title}
            description={step.description}
            imageUrl={step.imageUrl}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  )
}

export default HowWeWork
