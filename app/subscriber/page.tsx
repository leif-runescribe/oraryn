
import Link from 'next/link';
import React from 'react';
import ConnectButton from '../components/ConnectButton';
import { db } from '../db';
import { usersTable } from '../db/schema';

const HomePage: React.FC = () => {
  
  return (
    <div className="bg-black min-h-screen flex flex-col ">
      <header className="w-full flex justify-between items-center p-4 ">
        <Link href='/' className='text-white text-3xl p-6'>home</Link>
        <div className='text-white bg-white rounded-3xl text-3xl p-6'><w3m-button/></div>
      </header>

      <main className="items-center justify-center text-center mt-16">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          now go give some <br />  <span className="text-green-500 font-bold">ora </span><span className='font-bold'>to your fav creators</span>
        </h1>
        <div className="bg-green-500 text-black mt-8 px-6 py-3 rounded-full w-64 font-semibold">
          <ConnectButton/>
        </div>
      </main>

      <form action={async()=>{
        'use server';
        await db.insert(usersTable).values({
          
          name: "sahasdau",
          email: "ada@dadsfasfg.xm",
          walletAddress: "0xgD47",

        });
      }}><div className="bg-green-500 text-black mt-8 px-6 py-3 rounded-full w-64 font-semibold">
         
        
        <button>
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
