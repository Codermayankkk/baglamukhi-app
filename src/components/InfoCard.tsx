import { type ReactNode } from 'react';

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const InfoCard = ({ icon, title, description, className = '' }: InfoCardProps) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
              {icon}
            </div>
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-600 rounded-full" />
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-600 rounded-full" />
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold text-red-700 text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;
