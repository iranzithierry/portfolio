"use client";
import * as React from 'react'
import StyledImage from './styled-image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
export function Header() {
  const pathname = usePathname()
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const menuRef = React.useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };
  return (
    <nav className="top-0 z-10 h-16 pt-6 w-full flex justify-between items-center mx-5 sm:mx-auto max-w-2xl lg:max-w-5xl">
      <div className="w-20">
        <a href="/">
          <StyledImage src='/app/logo.png' size="sm" />
        </a>
      </div>
      <div className='flex fixed top-0 left-0 right-0 z-50 w-full justify-center'>
        <ul className="rounded-full flex sticky top-0 mt-12  bg-white z-50 px-2 sm:px-3 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
          <Link href="/about" className={`relative block p-2 md:p-3 transition hover:text-primary-hover ${pathname === '/about' ? 'text-primary' : 'text-zinc-800'}`}>
            <p className="capitalize text-xs sm:text-sm md:text-md">about</p>
            {pathname === '/about' && (
              <span className="absolute inset-x-1 -bottom-px h-[1px] rounded-xl bg-primary"></span>
            )}
          </Link>
          <Link  href={'/projects'} className={`relative block p-2 md:p-3 transition hover:text-primary-hover ${pathname === '/projects' ? 'text-primary' : 'text-zinc-800'}`}>
            <p className="capitalize text-xs sm:text-sm md:text-md">projects</p>
            {pathname === '/projects' && (
              <span className="absolute inset-x-2 -bottom-px h-[1px] rounded-xl bg-primary"></span>
            )}
          </Link>
        </ul>
      </div>
      {/* <div>
        <nav className={`inset-0 w-full min-h-screen z-50 sm:w-fit hidden ${isMenuVisible && 'bg-white fixed'}`}>
          <ul
            ref={menuRef}
            className={`absolute ${isMenuVisible ? '' : 'hidden'} w-full px-10 py-16`}
            onClick={closeMenu}
          >
            <li className={`border-b border-gray-300 py-5 ${isMenuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link className={`flex w-full font-semibold capitalize hover:text-primary-hover ${pathname === '/about' ? 'text-primary' : 'text-zinc-800'}`} href={'/about'}>
                about
              </Link>
            </li>
            <li className={`border-b border-gray-300 py-5 ${isMenuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link className={`flex w-full font-semibold capitalize hover:text-primary-hover ${pathname === '/projects' ? 'text-primary' : 'text-zinc-800'}`} href={'/projects'}>
                projects
              </Link>
            </li>
          </ul>
          <button className="pointer-events-auto absolute top-8 right-6" onClick={toggleMenu}>
            <span className="sr-only">Open Menu</span>
            {!isMenuVisible ?
              <svg width="23" height="23" viewBox="0 0 23 23">
                <path fill="transparent" strokeWidth="2" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" d="M 2 2.5 L 20 2.5"></path>
                <path fill="transparent" strokeWidth="2" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" d="M 2 9.423 L 20 9.423" opacity="1"></path>
                <path fill="transparent" strokeWidth="2" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" d="M 2 16.346 L 20 16.346"></path>
              </svg>
              :
              <svg width="23" height="23" viewBox="0 0 23 23">
                <path fill="transparent" strokeWidth="2" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" d="M 3 16.5 L 17 2.5"></path>
                <path fill="transparent" strokeWidth="2" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" d="M 2 9.423 L 20 9.423" opacity="1"></path>
                <path fill="transparent" strokeWidth="2" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" d="M 3 2.5 L 17 16.346"></path>
              </svg>
            }
          </button>
        </nav>
      </div> */}
    </nav>
  )
}
