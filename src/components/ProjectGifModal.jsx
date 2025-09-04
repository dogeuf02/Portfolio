import { motion } from "framer-motion";

export default function ProjectGifModal({ gif, onClose }) {
  if (!gif) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <motion.img
        src={gif}
        alt="Demo GIF"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-lg"
      />
      {/* Botón de cerrar */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-bold"
      >
        ✕
      </button>
    </div>
  );
}
