import { Check } from "lucide-react";

export default function ProgressSteps({ current = 1, steps = ["Info","Kontak","Konfirmasi"] }) {
  return (
    <ol className="flex items-center justify-center gap-3 sm:gap-6 mb-8">
      {steps.map((label, idx) => {
        const step = idx + 1;
        const isDone = step < current;
        const isActive = step === current;
        return (
          <li key={label} className="flex items-center">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm transition-all ${
              isActive ? "bg-indigo-600 text-white border-indigo-600" : isDone ? "bg-green-50 text-green-700 border-green-200" : "bg-white text-gray-600 border-gray-200"
            }`}>
              <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs ${
                isDone ? "bg-green-600 text-white" : isActive ? "bg-white/20 border border-white/30" : "bg-gray-100 text-gray-500"
              }`}>
                {isDone ? <Check className="w-3 h-3" /> : step}
              </span>
              <span className="hidden sm:inline">{label}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
