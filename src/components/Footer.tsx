import React from "react";
import { ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-full mb-12 lg:mb-0 ">
            <div className="flex items-center mb-6">
              <img loading="lazy" src="/src/assets/footerlogo.svg" alt="Footer logo" />
            </div>

            <div className="text-sm text-[#7C7C7C] space-y-2">
              <div className="flex flex-wrap gap-x-6">
                <p className="whitespace-nowrap text-white">개인정보 처리방침</p>
                <p className="whitespace-nowrap text-white">이용약관</p>
                <p className="whitespace-nowrap">
                  사무실 영업 08:00~19:00 (주말 및 공휴일 휴무)
                </p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <div className="flex">
                  <span className="text-gray-500 mr-1">사업자등록번호:</span>
                  <span>123-45-67890</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-1">대표자:</span>
                  <span>홍길동</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-1">주소:</span>
                  <span>205-42-36019</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <div className="flex">
                  <span className="text-gray-500 mr-1">주소:</span>
                  <span>서울 강남구 삼성로 212 삼안빌딩(대치동)</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-1">팩스:</span>
                  <span>02-539-9393</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <div className="flex">
                  <span className="text-gray-500 mr-1">전화:</span>
                  <span>070-8888-1001</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-1">이메일:</span>
                  <span>contact@example.com</span>
                </div>
              </div>

              <p className="text-gray-500 text-xs pt-2">
                Copyright © 2025 사색의향기. All Rights Reserved
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12 text-white">
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-1 ">뉴스레터 구독하기</h3>
              <p className="text-sm ">
                이메일 구독을 통해 사색의향기의 최신 소식과 공지 및 이벤트
                소식을 확인해 보세요.
              </p>
            </div>

            <div className="flex w-full mt-6">
              <div className="relative ">
                <input
                  type="email"
                  placeholder="이메일 구독신청"
                  className="w-full py-1 px-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-inherit text-white placeholder:text-white"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-3 "
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight size={20} color="white"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
