'use client'

import { useScopedI18n } from '@/shared/locales/client'
import Link from 'next/link'

type HeaderLinkItem = {
  href: string
  translationKey:
    | 'Services'
    | 'OurTeam'
    | 'AboutUs'
    | 'FAQ'
    | 'ContactUs'
    | 'HowDoWeWork'
}

export const HeaderLinks = () => {
  const t = useScopedI18n('common.header')

  const links: HeaderLinkItem[] = [
    { href: '#about', translationKey: 'AboutUs' },
    { href: '#services', translationKey: 'Services' },
    { href: '#HowDoWeWork', translationKey: 'HowDoWeWork' },
    { href: '/team', translationKey: 'OurTeam' },
  ]

  const baseClass =
    'inset-x-0  m-0 lg:m-auto w-28 text-base font-bold text-primary-1 lg:relative lg:text-base'

  return (
    <div className='flex flex-col items-center gap-3 lg:flex-row'>
      {links.map((linkItem, index) => (
        <Link
          key={linkItem.translationKey}
          href={linkItem.href}
          className={`${baseClass} ${
            index === 2 ? ' me-0 whitespace-nowrap lg:me-6' : ''
          }`}
        >
          {t(linkItem.translationKey)}
        </Link>
      ))}
    </div>
  )
}
