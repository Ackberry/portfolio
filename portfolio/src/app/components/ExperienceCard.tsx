import React from 'react';
import { MapPin } from 'lucide-react';

// --- FONT USAGE NOTE ---
// This component uses 'font-mono', 'font-oxygen', and 'font-oxygen-mono'.
// Make sure you have these fonts (e.g., from Google Fonts)
// configured in your global CSS or Tailwind config for them to apply correctly.

type ExperienceCardProps = {
  company: string;
  timeline: string;
  position: string;
  location: string;
  descriptionPoints: string[];
};

export default function ExperienceCard({
  company,
  timeline,
  position,
  location,
  descriptionPoints,
}: ExperienceCardProps) {
  return (
    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 w-full h-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all border border-white/20 group">
      {/* Row 1: Company and Timeline */}
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 font-mono flex items-center gap-3">
          {company}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-oxygen-mono">{timeline}</p>
      </div>

      {/* Row 2: Position and Location */}
      <div className="flex justify-between items-baseline mb-4">
        <h4 className="text-md md:text-lg font-semibold text-gray-700 dark:text-gray-300 font-oxygen">{position}</h4>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-oxygen-mono flex items-center gap-1.5">
          <MapPin className="w-3 h-3" />
          {location}
        </p>
      </div>

      {/* Description Bullet Points */}
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 font-oxygen">
        {descriptionPoints.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
