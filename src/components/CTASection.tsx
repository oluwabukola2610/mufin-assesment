export default function CTASection() {
  return (
    <section className="bg-[#F8F4F3] py-10 px-5 text-center w-full">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium mb-8 text-gray-800">
          기부를 통해 따뜻한 마음을 보내고 싶다면,
        </h2>

        <div className="mb-8">
          <p className="text-base text-gray-600 mb-2">후원계좌 안내</p>
          <p className="text-base text-gray-600">
            국민 924501-01-351204 / 사단법인 사색의향기
          </p>
        </div>

        <div className="flex justify-center gap-3 flex-wrap">
          <button className="py-3 px-6 rounded-full border border-gray-400 bg-transparent text-gray-700 text-base cursor-pointer hover:bg-gray-100 transition-colors">
            후원 참여
          </button>
          <button className="py-3 px-6 rounded-full border border-gray-400 bg-transparent text-gray-700 text-base cursor-pointer hover:bg-gray-100 transition-colors">
            문의 후원
          </button>
        </div>
      </div>
    </section>
  );
}
