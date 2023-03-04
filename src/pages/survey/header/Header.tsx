const Header = () => {
  return (
    <div className="bg-white rounded-lg w-1/2 min-w-max">
      <div className="bg-orange-500 rounded-t-lg h-2"></div>
      <div className="p-5">
        <input
          className="w-full py-2 text-3xl border-b border-gray-300 focus:outline-none focus:border-orange-500"
          placeholder="제목 없는 설문지"
        />
        <input
          className="w-full my-2 py-1 border-b border-gray-300 focus:outline-none focus:border-orange-500"
          placeholder="설문지 설명"
        />
      </div>
    </div>
  );
};

// #fe4438;

export default Header;
