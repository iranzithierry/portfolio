"use client";
import Link from 'next/link'
import React from 'react'
import { menus } from './header'
import { ThemeToggle } from './theme-toggle'

export default function Footer() {
    return (
        <footer className="mx-auto pt-12 mb-auto">
                <div className="flex lg:flex-row flex-col-reverse lg:flex-wrap justify-center lg:justify-between items-center gap-2">
                    <div>
                        <p className="text-xs text-gray-600 dark:text-neutral-400">
                            © 2024 @iranzithierry. All rights reserved.
                        </p>
                    </div>
                    <ul className="flex flex-wrap items-center">
                        {menus.map((menu, idx) => (
                            <li key={idx} className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                                <Link className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href={menu.link}>
                                    {menu.title}
                                </Link>
                            </li>
                        ))}
                        <li className="inline-block">
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
        </footer>
    )
}
