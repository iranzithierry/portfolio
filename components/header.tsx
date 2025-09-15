'use client';
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

export const menus = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Projects',
        link: '/projects'
    },
    {
        title: 'Resume',
        link: '/resume'
    },
    // {
    //     title: 'Articles',
    //     link: '/articles'
    // },
]
export default function Header() {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
    const pathName = usePathname()
    return (
        <header className="fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
            <nav className={`mt-4 relative max-w-xl ${pathName == '/' ? 'w-full md:w-fit' : 'w-full'} bg-white border shadow-md border-gray-200 rounded-[2rem] mx-2 py-1 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-zinc-800 dark:border-neutral-700`}>
                <div className="px-4 md:px-0 flex justify-between items-center">
                    <div className={`${pathName == '/' && 'block  md:hidden'}`}>
                        <Link className={cn(mobileMenuOpened ? "-ml-2 mt-1" : "-ml-3", "flex items-center overflow-hidden h-fit rounded-[2rem]")} href="/" aria-label="Iranzi Thierry Avatar">
                            <Image className="object-cover shrink-0 aspect-square size-8 sm:size-10" src={'/images/iranzithierry.jpg'} width={100} height={100} alt='Iranzi Thierry Avatar' />
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button type="button" className="flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-expanded="false" >
                            <Bars3Icon onClick={() => setMobileMenuOpened(true)} className={`${mobileMenuOpened && 'hidden'} shrink-0 size-3.5`} width="24" height="24" />
                            <XMarkIcon onClick={() => setMobileMenuOpened(false)} className={`${mobileMenuOpened ? 'block' : 'hidden'}  shrink-0 size-4`} width="24" height="24" />
                        </button>
                    </div>
                </div>

                <div className={`${mobileMenuOpened ? 'block' : 'hidden md:block'} overflow-hidden transition-all duration-300 basis-full grow`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
                        {menus.map((menu, idx) => (
                            <Link key={idx} className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 ${pathName == menu.link ? 'border-primary text-primary dark:border-neutral-200 dark:text-neutral-200 font-medium  ' : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'} focus:outline-none`} href={menu.link}>
                                {menu.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}
