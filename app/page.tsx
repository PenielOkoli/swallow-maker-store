import Script from 'next/script';
import CheckoutForm from '@/components/CheckoutForm';

const features = [
  ['Keeps You Online Automatically', 'No manual switching. Backup power kicks in when power cuts and your router keeps running.'],
  ['Quiet, Compact, and Simple', 'No noise, fuel, or generator maintenance. Plug it in once and forget it is there.'],
  ['Works With Your Existing Router', 'Compatible with most home routers and modems that use a standard power adapter.'],
];

function CheckIcon() {
  return <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px]">
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white px-4 py-6 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-orange-600">TC Store</div>
          <nav className="hidden gap-6 text-sm font-medium text-gray-600 md:flex"><a href="#features" className="hover:text-orange-600">Features</a><a href="#how-it-works" className="hover:text-orange-600">How It Works</a></nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-20"><div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="rounded-2xl bg-white/80 p-6 backdrop-blur-sm md:w-1/2">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Stay connected through every outage</p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">When NEPA Takes the Light, Your Wi-Fi Does Not Have to Go With It.</h1>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">The Mini DC UPS keeps your router and modem running through every power cut. No frozen calls, no dead Wi-Fi, and no waiting for light to come back.</p>
            <div className="mb-8 flex items-baseline gap-3"><span className="text-3xl font-extrabold text-orange-600">₦50,000</span><span className="text-lg text-gray-400 line-through">₦55,000</span></div>
            <a href="#form-section" className="inline-block rounded-lg bg-orange-600 px-10 py-4 font-bold text-white shadow-md hover:bg-orange-700">Shop Now</a>
          </div>
          <div className="w-full md:w-1/2"><img src="/mini-ups-ports.jpg" alt="Mini DC UPS for routers and modems" className="w-full rounded-xl border border-gray-200 bg-white shadow-xl" /></div>
        </div></section>

        <section id="features" className="relative z-10 border-y border-gray-200 bg-white px-4 py-16 shadow-sm"><div className="mx-auto max-w-6xl"><h2 className="mb-8 text-center text-2xl font-bold">Features</h2><div className="grid gap-8 md:grid-cols-3">
          {features.map(([title, description]) => <div key={title} className="flex gap-4"><div className="mt-1 text-orange-600"><CheckIcon /></div><div><h3 className="text-lg font-bold">{title}</h3><p className="mt-1 text-gray-600">{description}</p></div></div>)}
        </div></div></section>

        <section className="px-4 py-16"><div className="mx-auto max-w-4xl text-center"><h2 className="mb-8 text-2xl font-bold">See It in Action</h2><div className="mx-auto max-w-sm overflow-hidden rounded-xl border-4 border-white bg-gray-100 shadow-xl">
          <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@arinzaay/video/7594010015447502087" data-video-id="7594010015447502087" style={{ maxWidth: '605px', minWidth: '325px' }}><section /></blockquote>
          <Script async src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />
        </div></div></section>

        <section className="px-4 py-16"><div className="mx-auto max-w-4xl rounded-xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm md:p-8"><h2 className="mb-8 text-center text-2xl font-bold">What You&apos;re Getting</h2><div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-2/5"><img src="/mini-ups.webp" alt="Mini DC UPS ports and connections" className="w-full rounded-lg border border-gray-200 shadow-sm" /></div>
          <ul className="w-full divide-y divide-gray-200 text-sm md:w-3/5 md:text-base"><li className="flex justify-between py-3"><span className="text-gray-500">Battery capacity</span><strong>20,000 mAh</strong></li><li className="flex justify-between py-3"><span className="text-gray-500">Output voltage</span><strong>5V / 9V / 12V</strong></li><li className="flex justify-between py-3"><span className="text-gray-500">Battery type</span><strong>Rechargeable lithium</strong></li><li className="flex justify-between py-3"><span className="text-gray-500">Compatible with</span><strong>Most home routers and modems</strong></li><li className="flex justify-between py-3"><span className="text-gray-500">Delivery</span><strong>Nationwide</strong></li></ul>
        </div></div></section>

        <section id="how-it-works" className="relative z-10 border-y border-gray-200 bg-white px-4 py-16 text-center shadow-sm"><div className="mx-auto max-w-4xl"><h2 className="mb-8 text-2xl font-bold text-red-600">WHY ORDER FROM US NOW?</h2><ul className="inline-block space-y-4 text-left">{['We deliver straight to your doorstep at no extra cost.', 'Your purchase is risk-free and comes with a replacement warranty.', 'We have delivery agents reaching customers across Nigeria.'].map((text) => <li key={text} className="flex items-center gap-3 text-gray-800"><span className="text-orange-600"><CheckIcon /></span>{text}</li>)}</ul><h2 className="mb-8 mt-12 text-2xl font-bold text-red-600">How We Work</h2><ol className="inline-block space-y-4 text-left text-gray-800"><li>1. Place an order by filling the form below.</li><li>2. We call to confirm your order and delivery details.</li><li>3. You receive your package within 3-5 days.</li></ol></div></section>

        <section id="form-section" className="px-4 py-20"><div className="mx-auto mb-10 max-w-3xl rounded-xl border border-gray-200 bg-white/80 p-4 text-center"><h2 className="mb-2 text-3xl font-extrabold uppercase">Order Your Mini DC UPS Today</h2><p className="font-medium text-gray-700">Place your order now and pay only when it is delivered to you.</p></div><div className="drop-shadow-xl"><CheckoutForm /></div></section>
      </main>
      <footer className="relative z-10 border-t border-orange-700 bg-orange-600 py-6 text-center text-sm text-white"><p>&copy; 2026 TC Store Ltd | Disclaimer | Terms &amp; Conditions | Contact Us</p></footer>
    </div>
  );
}
