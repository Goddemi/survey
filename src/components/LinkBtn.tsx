import { Link } from "react-router-dom";

const LinkBtn = ({ to }: { to: string }) => {
  return (
    <Link to={to}>
      <button className="mt-3 p-4 bg-orange-500 text-white font-semibold rounded-lg ">
        {to === "/preview" ? "미리보기" : "제출"}
      </button>
    </Link>
  );
};

export default LinkBtn;
