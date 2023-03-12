import { Link } from "react-router-dom";

const GoToPreviewBtn = () => {
  return (
    <Link to={"/preview"}>
      <button className="mt-3 mb-7 p-4 bg-orange-500 text-white font-semibold rounded-lg ">
        미리보기
      </button>
    </Link>
  );
};

export default GoToPreviewBtn;
