import { useDispatch } from "react-redux";
import { resetQuestionList } from "../../store/questionList/questionList";

const FormInitialize = () => {
  const dispatch = useDispatch();

  const resetHandler = () => {
    dispatch(resetQuestionList());
  };

  return (
    <button
      className="mx-2 mt-3 mb-7 p-4 bg-orange-500 text-white font-semibold rounded-lg"
      onClick={resetHandler}
    >
      양식 지우기
    </button>
  );
};

export default FormInitialize;
