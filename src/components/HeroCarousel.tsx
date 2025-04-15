import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bannerImage from "../assets/image 273.png";
import { cn } from "../utils";
interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description?: string;
}

const carouselData: CarouselSlide[] = [
  {
    id: 1,
    image: bannerImage,
    title: "함께하는 마음이 만드는 소중한 변화",
    subtitle: "오늘 나눔에 함께 하세요",
    description: "특별한 나눔",
  },
  {
    id: 2,
    image: bannerImage,
    title: "새로운 관점으로 세상을 바라보세요",
    subtitle: "함께 성장하는 여정",
    description: "특별한 나눔",
  },
  {
    id: 3,
    image: bannerImage,
    title: "더 나은 미래를 위한 첫걸음",
    subtitle: "당신의 동참이 변화를 만듭니다",
    description: "특별한 나눔",
  },
];

const HeroCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = React.useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, nextSlide]);

  return (
    <div className="relative w-full overflow-hidden bg-white rounded-2xl px-4 md:px-8">
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out",
              activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute bottom-0 right-0 w-52 h-12 bg-white rounded-tl-full z-10"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-[5]">
                <div className="max-w-4xl text-center px-4 flex flex-col items-center space-y-5">
                  <p className="text-sm md:text-base mb-2 opacity-90">
                    {slide.description}
                  </p>
                  <img
                    loading="lazy"
                    src="/src/assets/Line 1.svg"
                    alt="Decorative line"
                    className=""
                  />
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 mt-2">
                    {slide.title}
                  </h2>
                  <p className="text-xs md:text-sm lg:text-base">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 right-8 z-20 flex items-center gap-3">
        <div className="flex gap-2 items-center">
          {carouselData.map((_, index) => (
            <button
              title="o"
              key={index}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setActiveSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeSlide === index ? "bg-blue-600 w-8" : "bg-gray-300"
              )}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
