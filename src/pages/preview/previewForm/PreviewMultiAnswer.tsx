import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { AnswerType } from "../../\bmain/question/option/type/answerType";
import { UpdateType } from "../../\bmain/question/type/types";
import CheckBoxAnswer from "./CheckboxAnswer";
import RadioAnswer from "./RadioAnswer";
import DropdownAnswer from "./DropdownAnswer";

const PreMultipleAnswer = ({
  questionId,
  selectedOption,
  questionUpdateHandler,
}: {
  questionId: string;
  selectedOption: string;
  questionUpdateHandler: UpdateType;
}) => {
  const questionList = useSelector(
    (state: RootState) => state.questionList.list
  );
  const answerList = questionList.filter(
    (question) => question.id === questionId
  )[0].multiAnswer;

  return (
    <div className="flex justify-between items-center my-2">
      {selectedOption === "checkbox" &&
        answerList.map((ele: AnswerType) => {
          const { id, content } = ele;
          return (
            <CheckBoxAnswer
              answerId={id}
              answerContent={content}
              answerList={answerList}
              questionUpdateHandler={questionUpdateHandler}
            />
          );
        })}

      {selectedOption === "multiple" &&
        answerList.map((ele: AnswerType) => {
          const { id, content } = ele;
          return (
            <RadioAnswer
              answerId={id}
              answerContent={content}
              answerList={answerList}
              questionUpdateHandler={questionUpdateHandler}
            />
          );
        })}

      {selectedOption === "dropdown" && (
        <DropdownAnswer
          answerList={answerList}
          questionUpdateHandler={questionUpdateHandler}
        />
      )}
    </div>
  );
};

export default PreMultipleAnswer;

// {selectedOption === "multiple" && (
//   <RadioAnswer
//     answerId={id}
//     answerList={answerList}
//     questionUpdateHandler={questionUpdateHandler}
//     answerContent={content}
//   />
// )}

{
  /* <PreviewAnswer
answerId={id}
answerList={answerList}
questionUpdateHandler={questionUpdateHandler}
answerContent={content}
/> */
}
