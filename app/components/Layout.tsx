'use client'
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface Props{
  children: React.ReactNode;
}

export default function Layout({ children}: Props ) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="pt-16">{children}</main>
    </div>
  );
}