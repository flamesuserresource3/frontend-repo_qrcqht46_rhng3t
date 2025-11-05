import { useEffect, useMemo, useState } from "react";
import { Mail, Phone, User, Loader2, CheckCircle2, XCircle } from "lucide-react";

function Field({ label, hint, error, children }) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {children}
      <div className="h-5">
        {error ? (
          <p className="text-xs text-red-600 flex items-center gap-1">
            <XCircle className="w-3.5 h-3.5" /> {error}
          </p>
        ) : hint ? (
          <p className="text-xs text-gray-500">{hint}</p>
        ) : null}
      </div>
    </div>
  );
}

export default function ResponsiveForm() {
  const [values, setValues] = useState({ nama: "", email: "", telepon: "", pesan: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!values.nama.trim()) e.nama = "Nama wajib diisi";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Format email tidak valid";
    if (!/^\+?\d{9,15}$/.test(values.telepon)) e.telepon = "Nomor telepon tidak valid";
    if (values.pesan.trim().length < 10) e.pesan = "Minimal 10 karakter";
    return e;
  }, [values]);

  const isValid = Object.keys(errors).length === 0;

  useEffect(() => {
    if (submitted) {
      const t = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(t);
    }
  }, [submitted]);

  const handleChange = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setValues({ nama: "", email: "", telepon: "", pesan: "" });
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/80 backdrop-blur rounded-xl p-6 shadow-xl border border-gray-100">
        <div className="md:col-span-1">
          <Field label="Nama" hint="Masukkan nama lengkap" error={errors.nama}>
            <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 transition focus-within:ring-2 focus-within:ring-indigo-500 ${errors.nama ? "border-red-300" : "border-gray-200"}`}>
              <User className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={values.nama}
                onChange={handleChange("nama")}
                placeholder="Nama Anda"
                className="w-full bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
                aria-invalid={!!errors.nama}
                aria-describedby="nama-error"
              />
            </div>
          </Field>
        </div>

        <div className="md:col-span-1">
          <Field label="Email" hint="Kami tidak akan membagikan email Anda" error={errors.email}>
            <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 transition focus-within:ring-2 focus-within:ring-indigo-500 ${errors.email ? "border-red-300" : "border-gray-200"}`}>
              <Mail className="w-4 h-4 text-gray-400" />
              <input
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                placeholder="nama@domain.com"
                className="w-full bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
            </div>
          </Field>
        </div>

        <div className="md:col-span-1">
          <Field label="Telepon" hint="Sertakan kode negara bila perlu" error={errors.telepon}>
            <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 transition focus-within:ring-2 focus-within:ring-indigo-500 ${errors.telepon ? "border-red-300" : "border-gray-200"}`}>
              <Phone className="w-4 h-4 text-gray-400" />
              <input
                type="tel"
                value={values.telepon}
                onChange={handleChange("telepon")}
                placeholder="0812xxxxxx atau +62812xxxx"
                className="w-full bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
                aria-invalid={!!errors.telepon}
                aria-describedby="telepon-error"
              />
            </div>
          </Field>
        </div>

        <div className="md:col-span-2">
          <Field label="Pesan" hint="Ceritakan kebutuhanmu secara singkat" error={errors.pesan}>
            <textarea
              value={values.pesan}
              onChange={handleChange("pesan")}
              rows={4}
              placeholder="Tulis pesan di sini..."
              className={`w-full rounded-lg border px-3 py-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-400 transition focus:ring-2 focus:ring-indigo-500 ${errors.pesan ? "border-red-300" : "border-gray-200"}`}
              aria-invalid={!!errors.pesan}
              aria-describedby="pesan-error"
            />
          </Field>
        </div>

        <div className="md:col-span-2 flex items-center justify-between gap-3">
          <div className="text-sm text-gray-500">Semua data aman dan terenkripsi.</div>
          <button
            type="submit"
            disabled={!isValid || loading}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Mengirim...
              </>
            ) : (
              "Kirim"
            )}
          </button>
        </div>
      </form>

      {submitted && (
        <div className="mt-4 flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 px-4 py-2 rounded-lg">
          <CheckCircle2 className="w-5 h-5" />
          <p>Form berhasil dikirim! Kami akan menghubungi Anda segera.</p>
        </div>
      )}
    </div>
  );
}
