import React from 'react';
import { Briefcase, Smile, Users, Globe2 } from 'lucide-react';

export default function CounterStats() {
  const stats = [
    {
      icon: <Briefcase size={36} className="text-white" />,
      number: '20+',
      label: "Year's Experience",
    },
    {
      icon: <Smile size={36} className="text-white" />,
      number: '100%',
      label: 'Client Satisfaction',
    },
    {
      icon: <Users size={36} className="text-white" />,
      number: '1000+',
      label: 'Satisfied Clients',
    },
    {
      icon: <Globe2 size={36} className="text-white" />,
      number: '100+',
      label: 'Countries We Export',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#d97706] text-white py-14 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <div key={i} className="pt-6 md:pt-0 px-4 space-y-2 flex flex-col items-center">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm mb-1">
                {stat.icon}
              </div>
              <div className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
                {stat.number}
              </div>
              <div className="w-10 h-0.5 bg-white/40 rounded"></div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
