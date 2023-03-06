import { FormControlLabel, Switch } from "@mui/material";
import { useDispatch } from "react-redux";
import { CopyIcon, DeleteIcon } from "../../../../icons/Icons";
import { deleteQuestionList } from "../../../../store/questionList/questionList";

const AdditionalFunc = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  const deleteHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    dispatch(deleteQuestionList(id));
  };

  return (
    <div className="w-full flex justify-end items-center border-t-2 border-solid border-gray-200 mt-10 pt-3">
      <div className="cursor-pointer">
        <CopyIcon />
      </div>
      <div className="mx-4 cursor-pointer" onClick={deleteHandler}>
        <DeleteIcon />
      </div>
      <FormControlLabel
        control={<Switch defaultChecked color="warning" />}
        label="필수"
      />
    </div>
  );
};

export default AdditionalFunc;
