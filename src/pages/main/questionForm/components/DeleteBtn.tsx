import { useDispatch } from "react-redux";
import { DeleteIcon } from "../../../../icons/Icons";
import { deleteQuestionList } from "../../../../store/questionList/questionList";

const DeleteBtn = ({ questionId }: { questionId: string }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteQuestionList(questionId));
  };

  return (
    <div className="mx-4 cursor-pointer" onClick={deleteHandler}>
      <DeleteIcon />
    </div>
  );
};

export default DeleteBtn;
