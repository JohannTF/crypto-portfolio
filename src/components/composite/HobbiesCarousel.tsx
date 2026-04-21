import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { hobbies } from "../../lib/data";
import { SectionContainer } from "../layout/SectionContainer";

export function HobbiesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const currentHobby = hobbies[selectedIndex];

  return (
    <SectionContainer id="hobbies" title="Hobbies" subtitle="Lo que me apasiona fuera del código">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border-primary" ref={emblaRef}>
            <div className="flex">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.id}
                  className="flex-[0_0_100%] min-w-0"
                >
                  <div className="aspect-[4/3] bg-bg-secondary">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface/80 backdrop-blur-sm border border-border-primary flex items-center justify-center hover:bg-surface transition-colors cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface/80 backdrop-blur-sm border border-border-primary flex items-center justify-center hover:bg-surface transition-colors cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {hobbies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === selectedIndex
                    ? "bg-text-primary w-6"
                    : "bg-border-primary hover:bg-text-secondary"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHobby.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs font-mono text-text-secondary">
                {String(selectedIndex + 1).padStart(2, "0")} / {String(hobbies.length).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-bold text-text-primary mt-2">
                {currentHobby.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mt-4 max-w-md">
                {currentHobby.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionContainer>
  );
}
