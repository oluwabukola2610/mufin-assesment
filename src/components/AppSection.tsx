// components/AppSection.jsx
const AppSection = () => {
  return (
    <div className="w-full px-10 py-12 flex flex-col md:flex-row justify-around items-start gap-12">
      <div className="w-full lg:w-1/3 flex flex-col items-start">
        <div className="flex items-center mb-8">
          <div className="bg-[#7D5A43] w-14 h-14 rounded-lg flex items-center justify-center mr-4">
            <img   loading="lazy" src="/src/assets/appicon.svg" alt="App icon" className="w-full h-full"/>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-2">더 나은 세상을</h2>
        <h2 className="text-4xl font-bold mb-8">만들어 가기 위한 노력.</h2>

        <p className="mb-4">
          바쁜 일상의 생활과 고민하며 살며 나누는 활동을 통해 세대와
          나이를\n초월한 커뮤니티를 만들어가려고 노력하고 있습니다.
        </p>
        <p className="mb-4">
          작은 일상의 변화 처해가 일어남시 모든 활동을 원합니다.
        </p>
        <p className="mb-8">
          책의 이야기 그리고 인문의 본질속에 접근 도움을 드리며다. 인문학이야나
          개인적으로 책정이 기 어디에 문제점이 항상했다면 소규 사회자드애에게
          도움을 전달해주세요.
        </p>

        <div className="mb-8">
          <p className="font-medium">
            2025. 6. 출시 예정 커뮤니티 APP '소소담담'
          </p>
        </div>

        <button className="border border-black rounded-full px-5 py-2 flex items-center">
          앱 다운로드
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>
      </div>

      <div className="">
        <img
          loading="lazy"
          src="/src/assets/now.png"
          alt="Mobile app interface"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AppSection;
