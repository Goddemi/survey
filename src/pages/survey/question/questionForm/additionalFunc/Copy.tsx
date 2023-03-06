import { useDispatch } from "react-redux";
import { CopyIcon } from "../../../../../icons/Icons";
import { copyQuestionList } from "../../../../../store/questionList/questionList";

const Copy = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  const copyHandler = () => {
    //여기에 내용을 이 질문지의 정보를 전역상태로 저장중인 거기에 수정을 해줘야 한다.
    dispatch(copyQuestionList(id));
  };
  return (
    <div className="cursor-pointer" onClick={copyHandler}>
      <CopyIcon />
    </div>
  );
};

export default Copy;
