import React from 'react';

export default function Stepper({ steps = [], current = 0 }) {
  return (
    <div className="w-full">
      <ol className="flex items-center w-full text-sm">
        {steps.map((label, idx) => {
          const active = idx === current;
          const completed = idx < current;
          return (
            <li key={label} className="flex-1 flex items-center">
              <div className="relative flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300 
                  ${completed ? 'bg-emerald-500 border-emerald-500 text-white' : active ? 'border-emerald-500 text-emerald-600' : 'border-gray-300 text-gray-400'}`}
                >
                  {completed ? (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <span className="text-sm font-medium">{idx + 1}</span>
                  )}
                </div>
                <div className="hidden sm:block">
                  <p className={`text-xs uppercase tracking-wide ${active || completed ? 'text-emerald-700' : 'text-gray-500'}`}>{label}</p>
                </div>
              </div>
              {idx !== steps.length - 1 && (
                <div className={`mx-2 h-0.5 flex-1 transition-colors duration-300 ${completed ? 'bg-emerald-400' : 'bg-gray-200'}`} />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
