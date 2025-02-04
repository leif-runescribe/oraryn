'use client'

import React, { ReactNode } from 'react'
import { config, projectId, metadata } from '@/config'

import { createWeb3Modal } from '@web3modal/wagmi/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { State, WagmiProvider } from 'wagmi'

// Setup queryClient
const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

// Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  allowUnsupportedChain: true,
  enableSwaps: true,
  enableOnramp: true,
  themeMode: "light",
  allWallets: "SHOW",
  themeVariables: {
    '--w3m-color-mix': '#00BB7F',
    '--w3m-color-mix-strength': 40
  },
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export default function AppKitProvider({
  children,
  initialState
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}