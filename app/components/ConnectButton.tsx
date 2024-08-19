'use client'

import React from 'react'
import { useWalletInfo, useWeb3Modal } from "@web3modal/wagmi/react"
import { useAccount, useBalance } from 'wagmi'
const WalletInfoDisplay: React.FC = () => {
    const { walletInfo } = useWalletInfo()
    const acc = useAccount()
    
    console.log(walletInfo)

    return (
        <div>
            {walletInfo ? (
                <div>
                    <h2>Wallet Information</h2>
                    <p>Name: {walletInfo.name}</p>
                    {walletInfo.icon && <img src={walletInfo.icon} alt="Wallet Icon" width={32} height={32} />}

                    <p className='text-white font-bold'>{acc.address}</p>
                </div>
            ) : (
                <p>No wallet connected</p>
            )}
        </div>
    )
}

export default WalletInfoDisplay