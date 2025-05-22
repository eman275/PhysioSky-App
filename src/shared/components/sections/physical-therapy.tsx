import { useScopedI18n } from '@/shared/locales/client'
import TherapyCard from '../ui/therapy-card'

const PhysicalTherapySection = () => {
  const t = useScopedI18n('common.header.OurServices')
  return (
    <section className=' py-12 md:py-20'>
      <div className=' mx-auto px-6'>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2'>
          <TherapyCard
            title={t('title1')}
            description={t('desc1')}
            imageUrl='/images/Container.png'
            isDark
          />
          <TherapyCard
            title={t('title2')}
            description={t('desc2')}
            imageUrl='/images/Container1.png'
            isDark
          />
        </div>
        <div className='mt-8 grid grid-cols-2 gap-6 lg:grid-cols-12'>
  <TherapyCard
    title={t('title3')}
    description={t('desc3')}
    imageUrl='/images/Container2.png'
    isDark={true}
    className='col-span-12 lg:col-span-3 lg:h-[923px]'
    imgHeight='h-[640px]'
  />

  <div className='col-span-12 lg:col-span-6 flex flex-col items-center justify-center overflow-hidden rounded-lg bg-primary-1 shadow-lg transition-transform hover:scale-105 lg:h-[923px]'>
    <TherapyCard
      title={t('title4')}
      description={t('desc4')}
      imageUrl='/images/Container3.png'
      isDark={true}
    />
    <TherapyCard
      title={t('title5')}
      description={t('desc5')}
      imageUrl='/images/Container3.png'
      isDark={true}
    />
  </div>

  <TherapyCard
    title={t('title6')}
    description={t('desc6')}
    imageUrl='/images/Container5.png'
    isDark={true}
    className='col-span-12 lg:col-span-3 lg:h-[923px]'
    imgHeight='h-[640px]'
  />
</div>

      </div>
    </section>
  )
}

export default PhysicalTherapySection
