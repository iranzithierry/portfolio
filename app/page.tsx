import Container from '@/components/container'
import Profile from '@/components/profile'
import { redirect } from 'next/navigation'
import React from 'react'

export default function Page() {
  return (
    <Container>
      <Profile />
    </Container>
  )
}
