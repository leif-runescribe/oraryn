'use client'
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function HeroSection() {
  return (
    <div className="bg-black  py-80 flex flex-col">
      

      <main className="z-10 flex-grow gap-y-32 text-4xl flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      {/* <div className="fixed inset-0  z-[-1] overflow-hidden pointer-events-none">
  <DotLottieReact
    src="/b.json"
    loop
    autoplay
    className="h-64 mt-32 object-cover"
  />
</div> */}
        <h1 className="text-xl sm:text-4xl  text-white mb-6">
        
          <span className="text-8xl font-extrabold">connects creators <br/>with <br/>their fans</span>
          <br/><span className="text-7xl text-green-400">through crypto</span>
        </h1>

        <div className="px-20">
        <p className="mt-20 text-gray-400 hover:text-green-300 max-w-3xl mx-auto mb-8">fueling creators with the love of their followers
        </p>
        <p className="mt-20 text-green-300 hover:text-gray-400 max-w-3xl mx-auto mb-8"><br/>seamlessly managing subscriptions, 
          engage your audience, and unlocking new revenue streams through crypto payments.
        </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <button className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300">
            get Started
          </button>
          <button className="border border-green-500 text-green-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-500 hover:text-black transition duration-300">
            learn more
          </button>
        </div>

        <h2 className="px-20 text-3xl sm:text-4xl font-bold text-white mb-6">
          your social payments contact @ <span className="font-extrabold text-green-500">oraryn</span>
        </h2>

        <p className="px-20 text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          create, manage, and grow your crypto-powered community. with oraryn, you can:
        </p>

        <ul className="px-20 text-2xl text-gray-300 max-w-2xl mx-auto mb-12 space-y-2">
          <li>• offer tiered subscription plans</li>
          <li>• distribute exclusive content</li>
          <li>• engage with subscribers through token-gated experiences</li>
          <li>• receive payments in various cryptocurrencies</li>
        </ul>

        <div className="px-20  bg-white p-20 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-black mb-4">what users say</h3>
          <p className="text-black ">
            "oraryn has transformed the way I monetize my content.<br/> the flexibility and security 
            it offers are unmatched in the world of crypto subscriptions."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <button className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300">
            create plans
          </button>
          <button className="border border-green-500 text-green-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-500 hover:text-black transition duration-300">
            learn more
          </button>
        </div>
      </main>
    </div>
  );
}