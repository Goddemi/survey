import { useDispatch } from "react-redux";
import { AddIcon } from "../../../icons/Icons";
import { addQuestionList } from "../../../store/questionList/questionList";

const Addbar = () => {
  const dispatch = useDispatch();

  const addQuestionHandler = () => {
    const newId = new Date().getTime().toString();
    const newQuestion = { id: newId, option: "short", questionName: "" };
    dispatch(addQuestionList(newQuestion));
  };
  return (
    <div
      className="absolute -right-11 bg-white rounded-lg p-2 text-orange-500 cursor-pointer"
      onClick={addQuestionHandler}
    >
      <AddIcon />
    </div>
  );
};

export default Addbar;
