// mark as client component
"use client";
import { SessionProvider } from "next-auth/react"
import { Container } from "postcss";

import React from 'react'

const SessionWrapper = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default SessionWrapper