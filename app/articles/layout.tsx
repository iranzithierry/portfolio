"use client";
import React from 'react'
import { MDXProvider } from '@mdx-js/react';

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <MDXProvider>
            {children}
        </MDXProvider>
    )
}
