import React from 'react';
import { Settings, Truck, DollarSign, Send } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Settings size={36} className="text-white" />,
      text: 'Leading Gold Miners in Cameroon.',
    },
    {
      icon: <Truck size={36} className="text-white" />,
      text: 'Express Delivery to any part of the world.',
    },
    {
      icon: <DollarSign size={36} className="text-white" />,
      text: 'No mediator. Guarantees low price costing.',
    },
    {
      icon: <Send size={36} className="text-white" />,
      text: 'Export to worldwide by Air and ship.',
    },
  ];

  return (
    <section className="py-16 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 tracking-wide">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-[#d97706] mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center border border-neutral-100 group hover:-translate-y-1.5"
            >
              {/* Orange Circle Icon */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#ea580c] via-[#f59e0b] to-[#fbbf24] flex items-center justify-center shadow-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>

              {/* Feature Description */}
              <p className="text-sm font-semibold text-neutral-700 group-hover:text-neutral-900 transition-colors leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
