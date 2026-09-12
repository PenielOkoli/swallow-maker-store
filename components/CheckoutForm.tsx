'use client';

import { useState } from 'react';

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xgaebwaj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        alert('There was a problem submitting your order. Please try again.');
      }
    } catch (error) {
      console.error('Order submission failed:', error);
      alert('There was a problem submitting your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success Message UI
  if (isSuccess) {
    return (
      <div className="w-full max-w-xl mx-auto p-6 bg-green-50 rounded-xl border border-green-200 text-center shadow-sm">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Order Received!</h3>
        <p className="text-gray-600">Thank you for your order. Our customer care representative will call you shortly to confirm your delivery.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto p-0 md:p-8 bg-transparent md:bg-white text-left">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Info */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Your name</label>
          <input 
            type="text" 
            name="Full Name"
            required
            placeholder="Your Name"
            className="w-full p-3 border border-[#B794F4] rounded-lg focus:ring-2 focus:ring-[#6B46C1] outline-none bg-white text-gray-800 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Your phone number</label>
          <input 
            type="tel" 
            name="Phone Number"
            required
            placeholder="08012345678"
            className="w-full p-3 border border-[#B794F4] rounded-lg focus:ring-2 focus:ring-[#6B46C1] outline-none bg-white text-gray-800 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Alternative phone number (Optional)</label>
          <input 
            type="tel" 
            name="Alternative Phone"
            placeholder="08012345678"
            className="w-full p-3 border border-[#B794F4] rounded-lg focus:ring-2 focus:ring-[#6B46C1] outline-none bg-white text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Location Info */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Your state of delivery</label>
          <select 
            name="State"
            required
            className="w-full p-3 border border-[#B794F4] rounded-lg focus:ring-2 focus:ring-[#6B46C1] outline-none bg-white text-gray-800"
          >
            <option value="">Select your state</option>
            <option value="Abia">Abia</option>
            <option value="Adamawa">Adamawa</option>
            <option value="Akwa Ibom">Akwa Ibom</option>
            <option value="Anambra">Anambra</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Bayelsa">Bayelsa</option>
            <option value="Benue">Benue</option>
            <option value="Borno">Borno</option>
            <option value="Cross River">Cross River</option>
            <option value="Delta">Delta</option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Edo">Edo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="Enugu">Enugu</option>
            <option value="FCT - Abuja">FCT - Abuja</option>
            <option value="Gombe">Gombe</option>
            <option value="Imo">Imo</option>
            <option value="Jigawa">Jigawa</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Kogi">Kogi</option>
            <option value="Kwara">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Nasarawa">Nasarawa</option>
            <option value="Niger">Niger</option>
            <option value="Ogun">Ogun</option>
            <option value="Ondo">Ondo</option>
            <option value="Osun">Osun</option>
            <option value="Oyo">Oyo</option>
            <option value="Plateau">Plateau</option>
            <option value="Rivers">Rivers</option>
            <option value="Sokoto">Sokoto</option>
            <option value="Taraba">Taraba</option>
            <option value="Yobe">Yobe</option>
            <option value="Zamfara">Zamfara</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Your city</label>
          <input 
            type="text" 
            name="City"
            required
            placeholder="Your city"
            className="w-full p-3 border border-[#B794F4] rounded-lg focus:ring-2 focus:ring-[#6B46C1] outline-none bg-white text-gray-800 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Detailed delivery address</label>
          <input 
            type="text"
            name="Address"
            required
            placeholder="House number, street, landmark..."
            className="w-full p-3 border border-[#B794F4] rounded-lg focus:ring-2 focus:ring-[#6B46C1] outline-none bg-white text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Package Selection */}
        <div className="pt-4">
          <h3 className="font-bold text-xl text-center mb-6">Select your quantity</h3>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[#6B46C1] transition-colors bg-white">
              <div className="flex items-center gap-3">
                <input type="radio" name="Quantity" value="1 Unit (₦85,000)" required className="w-4 h-4 text-[#6B46C1]" defaultChecked />
                <span className="font-medium text-sm md:text-base text-gray-700 uppercase">Buy 1 Unit OF Automatic Swallow Maker</span>
              </div>
              <span className="font-bold text-[#6B46C1]">₦85,000</span>
            </label>

            <label className="flex items-center justify-between p-3 md:p-4 border border-[#B794F4] rounded-lg cursor-pointer hover:border-[#6B46C1] transition-colors relative bg-purple-50/30">
              <div className="flex items-center gap-3">
                <input type="radio" name="Quantity" value="2 Units (₦165,000)" required className="w-4 h-4 text-[#6B46C1]" />
                <span className="font-medium text-sm md:text-base text-gray-700 uppercase">Buy 2 Units OF Automatic Swallow Maker</span>
              </div>
              <div className="flex items-center gap-2">
                 <span className="text-xs bg-[#E9D8FD] text-[#6B46C1] font-bold px-2 py-1 rounded-full hidden md:inline-block">Most Popular</span>
                 <span className="font-bold text-[#6B46C1]">₦165,000</span>
              </div>
            </label>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#6B46C1] text-white font-bold py-4 rounded-lg hover:bg-[#553C9A] transition-colors disabled:opacity-70 mt-6 shadow-md"
        >
          {isSubmitting ? 'Processing Order...' : 'Order Now — Free Delivery'}
        </button>
      </form>
    </div>
  );
}