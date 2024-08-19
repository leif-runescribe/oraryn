import Link from "next/link";

export default function Navbar({ onMenuClick }) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              return (
      <nav className="fixed bg-black top-0 h-28 items-center left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
       
            <div className="flex  items-center"><Link href="/">
              <h1 className="text-green-500 font-bold text-6xl ">oraryn</h1></Link>
             
            </div>
            
            <div className="flex items-center">
              <button
                className="p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={onMenuClick}
              >
                <svg className="h-16 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>


              <div className="hidden md:flex md:items-center md:space-x-10 text-xl">
                <a href="#" className="text-white hover:text-indigo-600">Home</a>
                <Link className='text-white' href = "/subscriber">Subscriber</Link>
                <Link className='text-white' href = "/creator">Creator</Link>
                <a href="#" className="text-white hover:text-indigo-600"></a>
                <w3m-button size="md" balance="hide"/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  