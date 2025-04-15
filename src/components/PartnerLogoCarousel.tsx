import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface Partner {
  id: number;
  logo: string;
  name: string;
  description: string;
}

const partnerData: Partner[] = [
  {
    id: 1,
    logo: "/src/assets/area (1).png",
    name: "(주)행복사회활동",
    description: "행복한 삶, 행복한 사회라는 생각하는 특별한 날을 선사합니다.",
  },
  {
    id: 2,
    logo: "/src/assets/area.png",
    name: "바른생각 실천연대",
    description: "바른생각 정신으로 이웃사랑 실천에 다합니다.",
  },
  {
    id: 3,
    logo: "/src/assets/Frame 1597882741.png",
    name: "아트리안",
    description:
      "생활미술사업을 통해리안의 재미있는 삶 을 이루침시다 표촌해도.",
  },
  {
    id: 4,
    logo: "/src/assets/Frame 1597882741 (1).png",
    name: "대한민국위원위원회",
    description: "어린이를 위한 위원회 활동, 함께하여 돕겠 습니다.",
  },
  {
    id: 5,
    logo: "/src/assets/Frame 1597882741 (1).png",
    name: "대한민국위원위원회",
    description: "어린이를 위한 위원회 활동, 함께하여 돕겠 습니다.",
  },
  {
    id: 6,
    logo: "/src/assets/Frame 1597882741 (1).png",
    name: "대한민국위원위원회",
    description: "어린이를 위한 위원회 활동, 함께하여 돕겠 습니다.",
  },
];

const PartnerLogoCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1280) {
        setVisibleSlides(4);
      } else if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const maxSlides = Math.max(0, partnerData.length - visibleSlides);

  const nextSlide = React.useCallback(() => {
    if (isTransitioning || maxSlides <= 0) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, maxSlides]);

  const prevSlide = () => {
    if (isTransitioning || maxSlides <= 0) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev === 0 ? maxSlides : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, nextSlide]);

  const slideWidth = 100 / visibleSlides;

  return (
    <div className="relative w-full overflow-hidden bg-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/4 pr-0 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              함께하는
              <br className="hidden md:block" />
              이들
            </h2>

            <div className="flex justify-center lg:justify-start space-x-2 pt-4">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                aria-label="Previous partner"
                disabled={maxSlides <= 0}
              >
                <ChevronLeft
                  size={20}
                  className={maxSlides <= 0 ? "text-gray-400" : "text-gray-700"}
                />
              </button>

              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                aria-label="Next partner"
                disabled={maxSlides <= 0}
              >
                <ChevronRight
                  size={20}
                  className={maxSlides <= 0 ? "text-gray-400" : "text-gray-700"}
                />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-3/4 overflow-hidden" ref={carouselRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * slideWidth}%)` }}
            >
              {partnerData.map((partner) => (
                <div
                  key={partner.id}
                  className="px-4"
                  style={{ width: `${slideWidth}%`, flexShrink: 0 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 h-32 flex items-center justify-center">
                      <img
                        loading="lazy"
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2 text-lg">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoCarousel;
