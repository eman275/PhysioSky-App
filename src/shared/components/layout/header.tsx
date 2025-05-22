import Image from 'next/image'
import BurgerMenu from './burger-menu'
import ChangeLangButton from './change-lang-button'
import { HeaderLinks } from './header-links'
import SocialMediaLinks from './social-media'

export const Header = async () => {
  return (
    <header className='bg-white lg:border-b lg:border-neutral-2 '>
      <div className=''>
        <div className='relative flex h-14 items-center justify-between lg:h-20'>
          <Image
            className='absolute inset-x-0 m-auto  w-36 px-5 lg:relative  lg:m-0 lg:w-52'
            alt={'logo'}
            src='/images/PhysioSky-Logo.png'
            width={144}
            height={30}
          />
          <BurgerMenu />

          <div className='hidden lg:block'>
            <HeaderLinks />
          </div>

          <div className=' hidden  lg:flex '>
            <SocialMediaLinks />
          </div>

          <ChangeLangButton />
        </div>
      </div>
    </header>
  )
}
