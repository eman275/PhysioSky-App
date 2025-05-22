import AboutUs from '@/shared/components/sections/about-us';
import Hero from '@/shared/components/sections/hero';
import HowWeWorkCard from '@/shared/components/sections/how-we-work';
import OurServices from '@/shared/components/sections/our-services';

export default async function Home() {
  return (
    <div className='relative min-h-screen py-4'>
      <Hero />
      <AboutUs />
      <OurServices />
      <HowWeWorkCard />
    </div>
  )
}
