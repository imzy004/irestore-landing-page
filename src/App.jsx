import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 tracking-tight">
          iRestore 
        </div>
        <div className="space-x-6 hidden md:block font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md">
          Book Repair
        </button>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-8 py-20 text-center flex flex-col items-center mt-8">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Fast, Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Apple Device</span> Repairs.
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl">
          Don't let a cracked screen or a dying battery slow you down. We specialize in bringing your devices back to life with premium parts and expert service.
        </p>
        <div className="flex gap-4">
          <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-lg">
            Get a Quote
          </button>
          <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors shadow-sm">
            View Services
          </button>
        </div>
      </header>
    </div>
  );
}