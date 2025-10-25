import React from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
];

export default function App() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10 tracking-wide text-center"
      >
        ✨ Beautiful Photo Carousel ✨
      </motion.h1>

      <div className="overflow-hidden w-[90%] md:w-[70%] rounded-2xl shadow-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="flex-[0_0_100%] relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={`${src}?auto=format&fit=crop&w=1400&q=80`}
                alt=""
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-slate-300 text-sm">
        Сделано с ❤️ на React, Tailwind и Framer Motion
      </p>
    </div>
  );
}
