import { QuestionType } from "../../type/types";

const SubmitForm = ({ data }: { data: QuestionType }) => {
  const { questionName, option, textAnswer, multiAnswer } = data;

  const textOption = ["short", "long"].includes(option);
  const multiOption = ["multiple", "checkbox", "dropdown"].includes(option);

  const checkedAnswers = multiAnswer.filter((ele) => ele.checked === true);

  return (
    <div className="w-[900px] min-w-max my-2 p-5 px-7 bg-white rounded-lg">
      <span>질문 : {questionName}</span>
      <div className="mt-7 mb-2">
        답안 :{" "}
        <span>
          {textOption && <span>{textAnswer}</span>}
          {multiOption &&
            checkedAnswers.map((ele) => (
              <span key={ele.id} className="mr-3">
                {ele.content}
              </span>
            ))}
        </span>
      </div>
    </div>
  );
};

export default SubmitForm;
