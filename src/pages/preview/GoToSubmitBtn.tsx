import { useNavigate } from "react-router-dom";

import { QuestionType } from "../../type/types";
const GoToSubmitBtn = ({ questionList }: { questionList: QuestionType[] }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const essentialChecker = questionList.find(
      (question) => question.essentialValueChecker === false
    );
    if (essentialChecker) {
      return;
    }
    navigate("/preview/submit");
  };

  return (
    <button
      className="mt-3 p-4 bg-orange-500 text-white font-semibold rounded-lg "
      onClick={handleNavigate}
    >
      제출
    </button>
  );
};

export default GoToSubmitBtn;
