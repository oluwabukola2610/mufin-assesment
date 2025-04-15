// components/ChairmanSection.jsx
const ChairmanSection = () => {
  return (
    <div className="w-full py-8">
      <div className="flex flex-col lg:flex-row justify-end items-center">
        <div className="flex flex-1 flex-col w-full px-8  md:max-w-2xl ">
          <h2 className="text-3xl font-bold mb-6">이사장 인사말.</h2>
          <p className="mb-4">안녕하세요, 사색의향기 이사장 오연균 입니다.</p>
          <p className="mb-4">
            사색의향기는 "책혹성 문화 나눔"을 통해 더 나은 사회적 가치를
            만들어가고자 노력해왔습니다. 앞으로도 문학과 인문학의 가치를
            공유하며, 함께 커뮤니티로서 함께 성장하겠습니다.
          </p>
          <p className="mb-8">많은 관심과 응원 부탁드립니다. 감사합니다.</p>

          <div className="flex items-center">
            <p className="mr-2">사단법인 사색의향기 이사장 오연균</p>
            <img
              loading="lazy"
              src="/src/assets/signature.png"
              alt="Signature"
              className="h-16"
            />
          </div>

          <div className="mt-8">
            <a href="#" className="flex items-center text-sm">
              인터뷰 더 보기
              <svg
                className="ml-1 w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="">
          <img
           loading="lazy"
            src="/src/assets/Chairman Image Container.png"
            alt="Chairman speaking with microphone"
            className="w-full"
          />
        </div>
      </div>

      {/* Team Members Section */}
      <div className="mt-24 flex flex-col md:flex-row justify-around items-center gap-8 text-center px-4 md:px-8">
        <div>
          <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto overflow-hidden mb-4">
            <img
              loading="lazy"
              src="/src/assets/Frame 1597884727 copy.png"
              alt="오연균 이사장"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-medium">오연균 이사장</p>
        </div>

        <div>
          <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto overflow-hidden mb-4">
            <img
              loading="lazy"
              src="/src/assets/Frame 1597884727 copy.png"
              alt="정호웅 이사"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-medium">정호웅 이사</p>
        </div>

        <div>
          <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto overflow-hidden mb-4">
            <img
              loading="lazy"
              src="/src/assets/Frame 1597884727 copy.png"
              alt="권혁주 고문"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-medium">권혁주 고문</p>
        </div>
      </div>
    </div>
  );
};

export default ChairmanSection;
