'use client'

import CheckoutForm from '@/components/CheckoutForm';
import { useState, useEffect } from 'react';

export default function Home() {
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const names = ['Amaka C.', 'Adebayo O.', 'Chukwuemeka N.', 'Zainab B.', 'Ngozi A.', 'Kelechi A.', 'Chioma E.'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setNotification(`${names[currentIndex]} just ordered a Syinix Swallow Maker`);
      currentIndex = (currentIndex + 1) % names.length;
      setTimeout(() => setNotification(null), 4000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-gray-900 font-sans relative bg-gray-50 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px]">
      {/* Notice the new radial-gradient classes here that create the subtle dot pattern */}
      
      {/* Pop-up Notification */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 bg-white border border-green-200 shadow-lg rounded-md p-4 flex items-center gap-3 animate-slide-in-right max-w-xs">
          <div className="bg-green-500 rounded-full p-1">
             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <p className="text-sm text-gray-700 font-medium">{notification}</p>
        </div>
      )}

      {/* Header */}
      <header className="bg-white py-6 px-4 shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="font-bold text-2xl text-orange-600 tracking-tighter">TC Store</div>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                <a href="#features" className="hover:text-orange-600 transition-colors">Features</a>
                <a href="#reviews" className="hover:text-orange-600 transition-colors">Reviews</a>
            </nav>
        </div>
      </header>

      {/* Hero Section - Transparent background to let the pattern show through */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 bg-white/70 backdrop-blur-sm p-6 -ml-6 rounded-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-gray-900">
                    Stop Stressing in the Kitchen. Make Perfect Swallow with One Button.
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    The Syinix Swallow Maker cooks and pounds at the same time. No stress, no sweat, no lumps. Just hot, flexible swallow ready whenever you need it. Save your hands and enjoy your meals with less effort every single day.
                </p>
                <a href="#form-section" className="inline-block bg-orange-600 text-white font-bold py-4 px-10 rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
                    Shop Now
                </a>
            </div>
            <div className="md:w-1/2 w-full">
               {/* Added a subtle border to separate the image from the pattern background */}
               <img src="/swallow-maker.webp" alt="Syinix Swallow Maker" className="w-full rounded-xl shadow-xl border border-gray-200 bg-white"/>
            </div>
        </div>
      </section>

      {/* Feature & Video 1 Section - Solid White Background to create clean contrast */}
      <section id="features" className="py-16 px-4 bg-white border-y border-gray-200 shadow-sm relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 w-full">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
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
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Features</h2>
                
                <div className="flex gap-4">
                    <div className="text-orange-600 mt-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-900">Fully Automated Process</h3>
                        <p className="text-gray-600 mt-1">Cooks and pounds simultaneously. No need to preheat water or struggle with a heavy pestle.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="text-orange-600 mt-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-900">Perfect Consistency (No Lumps)</h3>
                        <p className="text-gray-600 mt-1">Whether it is Amala, Pounded Yam, or Fufu, enjoy a smooth, flexible texture that beats manual pounding.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="text-orange-600 mt-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-900">Family Sized Capacity</h3>
                        <p className="text-gray-600 mt-1">With its large capacity, you can prepare enough swallow to feed up to 5 people at once.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Reviews Section - Pattern shows through here */}
      <section id="reviews" className="py-20 px-4">
         <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 bg-white/80 backdrop-blur-sm w-fit mx-auto px-6 py-2 rounded-full border border-gray-200">Reviews</h2>
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 w-full space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 relative">
                    <p className="text-gray-700 italic">"I bought this two months ago and honestly I don't know how I survived without it. My children say the pounded yam is softer than when I do it manually. Easy to use, very clean results."</p>
                    <div className="mt-4 font-bold text-sm text-gray-900">Adaeze O. — Lagos <span className="text-orange-500">⭐️⭐️⭐️⭐️⭐️</span></div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 relative">
                    <p className="text-gray-700 italic">"I was skeptical at first, but making Amala is now a breeze. It literally takes 10 minutes and no sweat. Best purchase of the year."</p>
                    <div className="mt-4 font-bold text-sm text-gray-900">Tunde M. — Abuja <span className="text-orange-500">⭐️⭐️⭐️⭐️⭐️</span></div>
                </div>
            </div>

            <div className="md:w-1/2 w-full">
                 <div className="aspect-[9/16] w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
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

      {/* Trust Section - Solid White */}
      <section className="py-16 px-4 bg-white border-y border-gray-200 text-center shadow-sm relative z-10">
         <div className="max-w-4xl mx-auto space-y-4">
             <h2 className="text-2xl font-bold text-red-600 mb-8">WHY SHOULD YOU ORDER FROM US NOW?</h2>
             <ul className="text-left space-y-4 inline-block">
                <li className="flex items-center gap-3"><span className="text-orange-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> <span className="text-gray-800">We deliver straight to your doorstep at no extra cost. Yes, you get <strong>FREE delivery!</strong></span></li>
                <li className="flex items-center gap-3"><span className="text-orange-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> <span className="text-gray-800">Your purchase is completely risk-free. Every order comes with a warranty.</span></li>
                <li className="flex items-center gap-3"><span className="text-orange-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> <span className="text-gray-800">We have dedicated delivery agents across all states in Nigeria.</span></li>
             </ul>

             <h2 className="text-2xl font-bold text-red-600 mt-12 mb-8">How we work</h2>
             <ul className="text-left space-y-4 inline-block">
                <li className="flex items-center gap-3"><span className="text-orange-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> <span className="text-gray-800">Place an order by filling the form below</span></li>
                <li className="flex items-center gap-3"><span className="text-orange-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> <span className="text-gray-800">Our customer care rep will call you to confirm delivery</span></li>
                <li className="flex items-center gap-3"><span className="text-orange-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> <span className="text-gray-800">You receive your package within 3-5 days</span></li>
             </ul>
         </div>
      </section>

      {/* Checkout Section - Pattern shows through here, making the white form card pop! */}
      <section id="form-section" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
          <h2 className="text-3xl font-extrabold mb-2 uppercase text-gray-900">Order Your Swallow Maker Today</h2>
          <p className="text-gray-700 font-medium">Place Your Order Now and Enjoy Free Delivery Nationwide</p>
        </div>
        
        {/* Your checkout form component remains exactly the same, but it will look incredibly premium sitting on top of this dot pattern! */}
        <div className="drop-shadow-xl">
           <CheckoutForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-600 text-white text-center py-6 text-sm border-t border-orange-700 relative z-10">
        <p>© 2026 TC Store Ltd | Disclaimer | Terms & Conditions | Contact Us</p>
      </footer>

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