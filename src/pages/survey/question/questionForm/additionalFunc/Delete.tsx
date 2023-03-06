import { useDispatch } from "react-redux";
import { DeleteIcon } from "../../../../../icons/Icons";
import { deleteQuestionList } from "../../../../../store/questionList/questionList";

const Delete = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteQuestionList(id));
  };

  return (
    <div className="mx-4 cursor-pointer" onClick={deleteHandler}>
      <DeleteIcon />
    </div>
  );
};

export default Delete;
