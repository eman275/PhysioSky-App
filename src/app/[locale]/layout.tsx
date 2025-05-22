import '@/app/globals.css'
// import { Footer } from '@/shared/components/layout/footer/footer'
import { Header } from '@/shared/components/layout/header'
import Providers from '@/routes/_common/providers'
import type { Metadata } from 'next'
import WhatsAppButton from '@/shared/components/layout/WhatsApp-btn'
export const metadata: Metadata = {
  title: 'PhysioSky ',
  description: 'physiotherapy clinic website ',
}
type PageProps = {
  children: React.ReactNode
  params: { locale: string } 
}

export default function RootLayout({ children, params }: PageProps) {
  const { locale } = params

  return (
    <html
      className='h-full'
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <head>{/* <PublicEnvScript /> */}</head>
      <body className='font-cairo flex h-full flex-col text-base text-base-black'>
        <Providers>
          <Header />
          <main className='flex-1'>{children}</main>
          {/* <Footer /> */}
        </Providers>
        <WhatsAppButton />
      </body>
    </html>
  )
}
