import React from "react";
import { Link } from "react-router-dom";

const GoToPreview = () => {
  return (
    <Link to="/preview">
      <button className="mt-3 p-4 bg-orange-500 text-white font-semibold rounded-lg ">
        미리보기
      </button>
    </Link>
  );
};

export default GoToPreview;
