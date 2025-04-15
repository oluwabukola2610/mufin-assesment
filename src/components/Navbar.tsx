const Navbar = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="flex items-center justify-between">
        <img loading="lazy" src="/src/assets/logo.svg" alt="Logo" className="h-6 w-auto" />
        <div className="flex items-center space-x-3">
          <span className="text-gray-400">소개</span>
          <span className="font-medium">소소담담 APP</span>
          <span className="text-gray-400">활동</span>
          <select
            className="bg-gray-800 w-auto text-white text-xs p-1 rounded-3xl cursor-pointer"
            defaultValue="ko"
            aria-label="Language Selector"
          >
            <option value="ko">Kor</option>
            <option value="en">Eng</option>
            <option value="zh">Chinese</option>
            <option value="jp">Jap</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;