import React from 'react';

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 text-left shadow-lg">
      <div className="text-4xl mb-4 text-[#E8B923]">{icon}</div>
      <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};