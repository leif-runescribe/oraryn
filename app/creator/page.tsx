'use client'
// pages/creator-dashboard.tsx
import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Link from 'next/link';
import { db } from '../db';
import { creatorsTable, usersTable } from '../db/schema';

const CreatorDashboard = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    // Validate form data
    if (!name || !email || !walletAddress) {
      setError('All required fields must be filled.');
      setIsLoading(false);
      return;
    }

    try {
      // Insert data into the database
      const uId = await db.insert(usersTable).values({
        name: name,
        email: email,
        walletAddress: walletAddress
      }).returning(usersTable.id)
      await db.insert(creatorsTable).values({
        userId: uId,
        bio: bio
      })

      // Show success message
      setSuccess('Creator added successfully!');

      // Reset form fields
      setName('');
      setEmail('');
      setWalletAddress('');
      setBio('');
    } catch (err) {
      setError('An error occurred while processing your request.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black items-center  min-h-screen flex flex-col ">
      <header className="w-full flex justify-between items-center p-4 ">
        <Link href='/' className='text-white text-3xl p-6'>home</Link>
        <div className='text-white bg-white rounded-3xl text-3xl p-6'><w3m-button/></div>
      </header>

      <main className="items-center justify-center text-center mt-16">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          create tiers to receive <br />  <span className="text-green-500 font-bold">ora </span><span className='font-bold'>from your lovers</span>
        </h1>
        <div className="bg-green-500 text-black mt-8 px-6 py-3 rounded-full w-64 font-semibold">

        </div>
      </main>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md justify-center items-center">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-4 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter creator's name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-4 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter creator's email"
            required
          />
        </div>

        <div>
          <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700">
            Wallet Address
          </label>
          <input
            type="text"
            id="walletAddress"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="mt-1 p-4 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter wallet address"
            required
          />
        </div>

        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-1 p-4 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter creator's bio"
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md text-white bg-blue-500 hover:bg-blue-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

     </div>
  );
};
  

export default CreatorDashboard;