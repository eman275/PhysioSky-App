import ArrowIcon from '@/shared/components/icons/arrow.svg'

interface HowWeWorkCardProps {
  step: string
  title: string
  description: string
  imageUrl: string
}

const HowWeWorkCard: React.FC<HowWeWorkCardProps> = ({
  step,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-md'>
      <div className='flex flex-col items-center gap-6 p-6 md:flex-row md:p-8 lg:p-10'>
        <div className='text-left'>
          <p className='mb-2 text-base text-gray-500'> step{step}</p>
          <h2 className='lg:text-huge3 mb-3 text-xl font-semibold text-primary-1 flex items-center'>
            {title}{' '}
            <span className='ml-2 inline-block text-lg text-gray-400'>
              {' '}
              <ArrowIcon className='h-11 w-11 text-primary-1 ltr:rotate-180' />
            </span>
          </h2>
          <p className=' w-full  text-xxxl lg:w-[38%]'>{description}</p>
        </div>
        <div className='w-full flex-shrink-0 overflow-hidden rounded-md md:w-1/2 lg:w-1/3'>
          <img
            src={imageUrl}
            alt='Physiotherapist understanding patient'
            className='h-auto w-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default HowWeWorkCard
