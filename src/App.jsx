import React, { useMemo, useState } from 'react';
import FormHeader from './components/FormHeader';
import ResponsiveForm from './components/ResponsiveForm';
import Stepper from './components/Stepper';
import PreviewCard from './components/PreviewCard';

function App() {
  const steps = ['Informasi', 'Pesan', 'Kirim'];
  const [formData, setFormData] = useState(null);
  const [current, setCurrent] = useState(0);

  const handleSubmit = (data) => {
    setFormData(data);
    setCurrent(2);
  };

  const onTyping = () => {
    if (current === 0) setCurrent(1);
  };

  const gradient = useMemo(
    () => (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200 opacity-50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-200 opacity-50 blur-3xl" />
      </div>
    ),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <div className="relative">
        {gradient}
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
          <div className="mb-8">
            <FormHeader
              title="Formulir Responsif & Interaktif"
              subtitle="Isikan data Anda. Form ini adaptif di semua ukuran layar, dilengkapi validasi, pratinjau, indikator progres, dan animasi halus."
            />
          </div>

          <div className="mb-6">
            <Stepper steps={steps} current={current} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 rounded-xl border bg-white p-6 shadow-sm">
              <ResponsiveForm
                onSubmit={handleSubmit}
                onChangeCapture={onTyping}
              />
            </div>
            <div className="lg:col-span-1">
              <PreviewCard data={formData} />
            </div>
          </div>

          <footer className="mt-10 text-center text-sm text-gray-500">
            Dibuat untuk demo: form modern, ringan, dan mudah dikembangkan.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
