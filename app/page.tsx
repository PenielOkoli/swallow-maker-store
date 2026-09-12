'use client'

import CheckoutForm from '@/components/CheckoutForm';
import { useState, useEffect } from 'react';

export default function Home() {
  const [notification, setNotification] = useState<string | null>(null);

  // Fake purchase notification system
  useEffect(() => {
    const names = ['Amaka C.', 'Adebayo O.', 'Chukwuemeka N.', 'Zainab B.', 'Ngozi A.', 'Kelechi A.', 'Chioma E.'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setNotification(`${names[currentIndex]} just ordered a Syinix Swallow Maker`);
      currentIndex = (currentIndex + 1) % names.length;
      
      // Hide the notification after 4 seconds
      setTimeout(() => setNotification(null), 4000);
    }, 15000); // Show a new notification every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans relative">
      
      {/* Pop-up Notification */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 bg-white border border-green-200 shadow-lg rounded-md p-4 flex items-center gap-3 animate-slide-in-right max-w-xs">
          <div className="bg-green-500 rounded-full p-1">
             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <p className="text-sm text-gray-700 font-medium">{notification}</p>
        </div>
      )}

      {/* Header */}
      <header className="bg-white py-6 px-4 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="font-bold text-2xl text-orange-600 tracking-tighter">TC Store</div>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                <a href="#features" className="hover:text-orange-600">Features</a>
                <a href="#reviews" className="hover:text-orange-600">Reviews</a>
            </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                    Stop Stressing in the Kitchen. Make Perfect Swallow with One Button.
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    The Syinix Swallow Maker cooks and pounds at the same time. No stress, no sweat, no lumps. Just hot, flexible swallow ready whenever you need it. Save your hands and enjoy your meals with less effort every single day.
                </p>
                <a href="#form-section" className="inline-block bg-[#6B46C1] text-white font-bold py-4 px-10 rounded-lg shadow-md hover:bg-[#553C9A] transition duration-300">
                    Shop Now
                </a>
            </div>
            <div className="md:w-1/2 w-full">
               <img src="/swallow-maker.webp" alt="Syinix Swallow Maker" className="w-full rounded-xl shadow-lg"/>
            </div>
        </div>
      </section>

      {/* Feature & Video 1 Section */}
      <section id="features" className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 w-full">
                {/* YouTube Embed 1 - Amala */}
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/4-vXugmBgnc?autoplay=0" 
                        title="Hot Amala swallow with Syinix Swallow Maker" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
            <div className="md:w-1/2 space-y-6">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                
                <div className="flex gap-4">
                    <div className="text-[#6B46C1] mt-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                    <div>
                        <h3 className="font-bold text-lg">Fully Automated Process</h3>
                        <p className="text-gray-600 mt-1">Cooks and pounds simultaneously. No need to preheat water or struggle with a heavy pestle.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="text-[#6B46C1] mt-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                    <div>
                        <h3 className="font-bold text-lg">Perfect Consistency (No Lumps)</h3>
                        <p className="text-gray-600 mt-1">Whether it is Amala, Pounded Yam, or Fufu, enjoy a smooth, flexible texture that beats manual pounding.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="text-[#6B46C1] mt-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                    <div>
                        <h3 className="font-bold text-lg">Family Sized Capacity</h3>
                        <p className="text-gray-600 mt-1">With its large capacity, you can prepare enough swallow to feed up to 5 people at once.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Reviews & Video 2 Section */}
      <section id="reviews" className="py-16 px-4 bg-gray-50 border-t border-gray-100">
         <h2 className="text-3xl font-bold text-center mb-12">Reviews</h2>
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            
            <div className="md:w-1/2 w-full space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-700 italic">"I bought this two months ago and honestly I don't know how I survived without it. My children say the pounded yam is softer than when I do it manually. Easy to use, very clean results."</p>
                    <div className="mt-4 font-bold text-sm">Adaeze O. — Lagos ⭐️⭐️⭐️⭐️⭐️</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-700 italic">"I was skeptical at first, but making Amala is now a breeze. It literally takes 10 minutes and no sweat. Best purchase of the year."</p>
                    <div className="mt-4 font-bold text-sm">Tunde M. — Abuja ⭐️⭐️⭐️⭐️⭐️</div>
                </div>
            </div>

            <div className="md:w-1/2 w-full">
                {/* YouTube Embed 2 - Potato Souffle */}
                 <div className="aspect-[9/16] w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/VZ3ZlzB2pHs?autoplay=0" 
                        title="Syinix Swallow Maker - Potato Souffle" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
         </div>
      </section>

      {/* Trust & How We Work Section */}
      <section className="py-16 px-4 bg-white border-t border-gray-100 text-center">
         <div className="max-w-4xl mx-auto space-y-4">
             <h2 className="text-2xl font-bold text-red-600 mb-8">WHY SHOULD YOU ORDER FROM US NOW?</h2>
             <ul className="text-left space-y-4 inline-block">
                <li className="flex items-center gap-3"><span className="text-[#6B46C1]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> We deliver straight to your doorstep at no extra cost. Yes, you get <strong>FREE delivery!</strong></li>
                <li className="flex items-center gap-3"><span className="text-[#6B46C1]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> Your purchase is completely risk-free. Every order comes with a warranty.</li>
                <li className="flex items-center gap-3"><span className="text-[#6B46C1]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> We have dedicated delivery agents across all states in Nigeria.</li>
             </ul>

             <h2 className="text-2xl font-bold text-red-600 mt-12 mb-8">How we work</h2>
             <ul className="text-left space-y-4 inline-block">
                <li className="flex items-center gap-3"><span className="text-[#6B46C1]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> Place an order by filling the form below</li>
                <li className="flex items-center gap-3"><span className="text-[#6B46C1]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> Our customer care rep will call you to confirm delivery</li>
                <li className="flex items-center gap-3"><span className="text-[#6B46C1]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> You receive your package within 3-5 days</li>
             </ul>
         </div>
      </section>

      {/* Checkout Section */}
      <section id="form-section" className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-2 uppercase">Order Your Swallow Maker Today</h2>
          <p className="text-gray-800 font-medium">Place Your Order Now and Enjoy Free Delivery Nationwide</p>
        </div>
        
        <CheckoutForm />
      </section>

      {/* Footer */}
      <footer className="bg-[#6B46C1] text-white text-center py-6 text-sm">
        <p>© 2026 TC store ltd | Disclaimer | Terms & Conditions | Contact Us</p>
      </footer>

      {/* Animation Styles for the Popup */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide-in-right {
          0% { transform: translateX(100%); opacity: 0; }
          10% { transform: translateX(0); opacity: 1; }
          90% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-slide-in-right {
          animation: slide-in-right 4s ease-in-out forwards;
        }
      `}} />
    </div>
  );
}