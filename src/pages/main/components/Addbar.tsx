import { useDispatch } from "react-redux";
import { AddIcon } from "../../../icons/Icons";
import { addQuestionList } from "../../../store/questionList/questionList";

const Addbar = () => {
  const dispatch = useDispatch();

  const addQuestionHandler = () => {
    dispatch(addQuestionList());
  };
  return (
    <div
      className="p-2 bg-white  text-orange-500 rounded-lg cursor-pointer"
      onClick={addQuestionHandler}
    >
      <AddIcon />
    </div>
  );
};

export default Addbar;
