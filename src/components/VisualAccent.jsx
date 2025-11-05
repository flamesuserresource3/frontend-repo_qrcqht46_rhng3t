import { motion } from "framer-motion";

export default function VisualAccent() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/30 via-purple-400/30 to-pink-400/30 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-[-10%] left-[-10%] h-80 w-80 rounded-full bg-gradient-to-br from-amber-300/20 via-rose-300/20 to-indigo-300/20 blur-3xl"
      />
    </div>
  );
}
