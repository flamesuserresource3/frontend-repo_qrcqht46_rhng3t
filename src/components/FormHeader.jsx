import { Sparkles } from "lucide-react";

export default function FormHeader({ title = "Form Interaktif", subtitle = "Isi data di bawah ini. Responsif di semua perangkat." }) {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 text-indigo-600 border border-indigo-200">
        <Sparkles className="w-4 h-4" />
        <span className="text-xs font-medium tracking-wide">Responsive & Interactive</span>
      </div>
      <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
        {title}
      </h1>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
