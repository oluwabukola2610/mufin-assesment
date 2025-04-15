import Navbar from "./components/Navbar";
import BookImage from "../src/assets/Culture Image Container.png";
import ChairmanSection from "./components/Chairmansection";
import ActivitiesSection from "./components/ActivitiesSection";
import AppSection from "./components/AppSection";
import HeroCarousel from "./components/HeroCarousel";
import PartnerLogoCarousel from "./components/PartnerLogoCarousel";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
function App() {
  return (
    <main className="h-full w-full  ">
      <Navbar />
      <HeroCarousel />
      <div className="w-full py-16 md:py-20 px-8 max-w-6xl mx-auto ">
        <div className="text-center mb-12 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-5xl font-bold ">
            새로운 문화 나눔을 만들어갑니다.
          </h1>
          <div className="flex items-center justify-center ">
            <span className="text-4xl font-bold">우리는</span>
            <div className="mx-4 w-36 h-12 rounded-full overflow-hidden">
              <img
                src={BookImage}
                alt="Book"
                  loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6">사색의향기입니다.</h2>

          <p className="text-sm max-w-3xl mx-auto">
            사색의향기는 문학안팎의 커뮤니티로서 "책혹성 문화 나눔"을 통해 시와
            공연과 선친워이고 간현한 시의 컨텐츠 만들어나가기 위해 노력하는
            비영리 단체입니다.
          </p>
        </div>
      </div>
      <ChairmanSection />
      <ActivitiesSection />
      <CTASection />
      <AppSection />
      <PartnerLogoCarousel />
      <Footer />
    </main>
  );
}

export default App;
